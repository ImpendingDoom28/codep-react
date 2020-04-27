const SET_NICKNAME = "SET_NICKNAME",
  SET_PASSWORD = "SET_PASSWORD",
  SET_CONFIRM_PASSWORD = "SET_CONFIRM_PASSWORD",
  SET_EMAIL = "SET_EMAIL",
  SET_ERROR = "SET_ERROR",
  SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";

const initState = {
  nickname: "",
  password: "",
  confirmPassword: "",
  email: "",
  isError: false,
  error: null,
  successMessage: null,
};

//REDUCER - обработчик некий обработчик событий,
//Сюда попадают ACTION-CREATORS, функции, которые
//обязательно содержат type, и по этому типу REDUCER
//решает, что нужно сделать дальше
const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NICKNAME: {
      return {
        ...state,
        nickname: action.nickname,
      };
    }
    case SET_CONFIRM_PASSWORD: {
      return {
        ...state,
        confirmPassword: action.confirmPassword,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isError: action.isError,
        error: action.error,
      };
    }
    case SET_SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: action.successMessage,
      };
    }
    default:
      return state;
  }
};

//ACTION-CREATORS
export const setNickname = (nickname) => ({
  type: SET_NICKNAME,
  nickname,
});
export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  confirmPassword,
});
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});
export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});
export const setError = (error, isError) => ({
  type: SET_ERROR,
  error,
  isError,
});
export const setSuccessMessage = (successMessage) => ({
  type: SET_SUCCESS_MESSAGE,
  successMessage,
});
export default registerReducer;
