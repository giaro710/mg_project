import { types } from '../types';
import axios from 'axios';

export const sendUsernameAndPassword = (email, password) => {
  // Questa action la chiami dal metodo handleSubmit attaccato all'onSubmit del form di login. Le altre cose legate ai singoli input rimangono ma così le spedisci insieme
  return {
    type: types.SETEMAILANDPASSWORD,
    payload: { email, password },
  };
};

const authStart = () => {
  return {
    type: types.AUTH_START,
  };
};

export const makeLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const encryptedEmailAndPassword = btoa(email + ':' + password);
    const encryptedAuthorisation = `Basic ${encryptedEmailAndPassword}`;

    const authData = {
      headers: {
        Authentication: encryptedAuthorisation,
        'Espo-Authorization': encryptedEmailAndPassword,
        'Espo-Authorization-By-Token': false,
        'Espo-Authorization-Create-Token-Secret': true,
      },
    };

    axios
      .get('http://proxy.interpares.net/api/v1/App/user', authData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
