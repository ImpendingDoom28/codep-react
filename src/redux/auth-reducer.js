const SET_USER_DATA = "SET_USER_DATA",
  SET_LOGIN_NICKNAME = "SET_LOGIN_NICKNAME",
  SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD",
  SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const initState = {
  userData: {
    id: null,
    nickname: null,
    email: null,
    role: null,
    state: null,
  },
  loginNickname: "",
  loginPassword: "",
  isError: null,
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      debugger;
      return {
        ...state,
        userData: { ...action.userData },
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

export default authReducer;
