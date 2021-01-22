import { types } from '../types';

const initialState = {
  username: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  // console.log('Qui siamo nel reducer');
  // console.log(state);
  // console.log('ACTION', action);
  // console.log(action.authData);
  // console.log('ACTION', action.payload.token);
  // console.log('ACTION', action.payload.user.userName);

  switch (action.type) {
    case types.AUTH_START:
      return state;
    case types.AUTH_SUCCESS:
      let newState = {
        ...state,
        token: action.authData.token,
        username: action.authData.user.userName,
      };
      console.log('This is th new state', newState);

      return newState;
    // return Object.assign(state, {
    //   token: action.authData.token,
    //   username: action.authData.user.userName,
    // });
    case types.AUTH_LOG_OUT:
      return (state = { username: null, token: null, error: null });
    default:
      return state;
  }
};

export default authReducer;
