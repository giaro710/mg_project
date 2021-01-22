import { types } from '../types';
import axios from 'axios';

const authStart = () => {
  return {
    type: types.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  console.log(authData);
  return {
    type: types.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: types.AUTH_FAIL,
    error: error,
  };
};

export const auth = (username, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    const encryptedUsernameAndPassword = btoa(username + ':' + password);
    const encryptedAuthorization = `Basic ${encryptedUsernameAndPassword}`;

    const authData = {
      headers: {
        Authorization: encryptedAuthorization,
        'Espo-Authorization': encryptedUsernameAndPassword,
        'Espo-Authorization-By-Token': 'false',
        'Espo-Authorization-Create-Token-Secret': 'true',
      },
    };

    await axios
      .get('http://proxy.interpares.net/api/v1/App/user', authData)
      .then((response) => {
        dispatch(authSuccess(response.data));
        console.log('Pluto ciao come stai');
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const logOutAction = (username, token) => {
  return async (dispatch) => {
    const encryptedUsernameAndToken = btoa(username + ':' + token);
    console.log('siamo dentro la action per logout', username, token);
    const encryptedAuthorization = `Basic ${encryptedUsernameAndToken}`;

    await axios
      .post(
        'http://proxy.interpares.net/api/v1/App/action/destroyAuthToken',
        {
          token: token,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: encryptedAuthorization,
            'Espo-Authorization': encryptedUsernameAndToken,
            'Espo-Authorization-By-Token': 'true',
          },
        }
      )
      .then((response) => {
        // console.log(response);
        dispatch({ type: types.AUTH_LOG_OUT });
        this.props.history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchQualcosa = (username, token) => {
  const encryptedUsernameAndToken = btoa(username + ':' + token);
  console.log(
    'siamo dentro fetchQualcosa',
    username,
    token,
    encryptedUsernameAndToken
  );
  const encryptedAuthorization = `Basic ${encryptedUsernameAndToken}`;

  return async (dispatch) => {
    axios
      .get('http://proxy.interpares.net/api/v1/Account', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: encryptedAuthorization,
          'Espo-Authorization': encryptedUsernameAndToken,
          'Espo-Authorization-By-Token': 'true',
        },
        params: {
          maxSize: 20,
          offset: 0,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
};
