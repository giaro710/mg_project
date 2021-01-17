import { types } from '../types';

export const setEmail = (email) => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: 'SET_PASSWORD',
    payload: password,
  };
};

export const sendUsernameAndPassword = (email, password) => {
  return {
    type: types.SETEMAILANDPASSWORD,
    payload: { email, password },
  };
};
