const initialState = {
  authLoginError: null,
  authSignupError: null

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authLoginError: action.err.message
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authLoginError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signup success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authSignupError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authSignupError: action.err.message
      }
    default:
      return state;
  }
};

export default authReducer;
