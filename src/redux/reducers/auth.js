import { types } from '../types';

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return state;
    case types.AUTH_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default authReducer;
