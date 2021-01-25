import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticaated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
