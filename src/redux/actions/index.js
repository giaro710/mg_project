import { types } from '../types';
import axios from 'axios';

const authStart = () => {
  return {
    type: types.AUTH_START,
  };
};

export const authSuccess = (authData) => {
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
    const encryptedAuthorisation = `Basic ${encryptedUsernameAndPassword}`;

    const authData = {
      headers: {
        Authentication: encryptedAuthorisation,
        'Espo-Authorization': encryptedUsernameAndPassword,
        'Espo-Authorization-By-Token': false,
        'Espo-Authorization-Create-Token-Secret': true,
      },
    };

    await axios
      .get('http://proxy.interpares.net/api/v1/App/user', authData)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.token);
        // console.log(response.data.settings.authTokenLifetime);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

// fetch('http://proxy.interpares.net/api/v1/App/user', {
//       method: 'get',
//       mode: 'cors',
//       headers: {
//           'Authentication': x,
//           'Espo-Authorization': encryptedEmailAndPassword,
//           'Espo-Authorization-By-Token': false,
//           'Espo-Authorization-Create-Token-Secret': true,
//       }
//   })

// Basic Authentication
// Note: This method is not recommended.

// For regular users EspoCRM uses Basic Authentication. Username and password (or token) are passed through Authorization header encoded in base64.

// "Authorization: Basic " + base64Encode(username + ':' + password)

// It's better to use auth token instead of password when you work with API. In this case you will need to provide username and password/token in Espo-Authorization header.

// "Espo-Authorization: " + base64Encode(username  + ':' + passwordOrToken)
// Obtain an access token by GET App/user request with the username and password passed in Espo-Authorization header.
// Use this token instead of password in Espo-Authorization header for all further request.
// If the request returns 401 error that means either username/password is wrong or token is not valid anymore.
