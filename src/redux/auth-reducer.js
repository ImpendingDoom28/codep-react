const SET_USER_DATA = "SET_USER_DATA",
  SET_LOGIN_NICKNAME = "SET_LOGIN_NICKNAME",
  SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD",
  SET_LOGIN_ERROR = "SET_LOGIN_ERROR",
  SET_IS_VERIFICATION_TOKEN_OKAY = "SET_IS_VERIFICATION_TOKEN_OKAY";

const initState = {
  userData: {
    id: null,
    nickname: null,
    email: null,
    role: null,
    state: null,
  },
  isAdmin: null,
  loginNickname: "",
  loginPassword: "",
  isError: null,
  error: null,
  isOk: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      debugger;
      return {
        ...state,
        userData: { ...action.userData },
        isAdmin: action.userData.role === "ADMIN" ? true : false,
      };
    }
    case SET_LOGIN_NICKNAME: {
      return {
        ...state,
        loginNickname: action.nickname,
      };
    }
    case SET_LOGIN_PASSWORD: {
      return {
        ...state,
        loginPassword: action.password,
      };
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        isError: action.isError,
        error: action.error,
      };
    }
    case SET_IS_VERIFICATION_TOKEN_OKAY: {
      return {
        ...state,
        isOk: action.isOk,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const setUserData = (id, nickname, email, role, state) => ({
  type: SET_USER_DATA,
  userData: {
    id,
    nickname,
    email,
    role,
    state,
  },
});
export const setLoginError = (error, isError) => ({
  type: SET_LOGIN_ERROR,
  error,
  isError,
});
export const setLoginNickname = (nickname) => ({
  type: SET_LOGIN_NICKNAME,
  nickname,
});
export const setLoginPassword = (password) => ({
  type: SET_LOGIN_PASSWORD,
  password,
});
export const setIsVerificationTokenOk = (isOk) => ({
  type: SET_IS_VERIFICATION_TOKEN_OKAY,
  isOk,
});

export default authReducer;
