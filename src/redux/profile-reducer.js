import { act } from "react-dom/test-utils";

const SET_SANDBOXES = "SET_SANDBOXES",
  SET_IS_PROFILE_FETCHING = "SET_IS_PROFILE_FETCHING",
  SET_DESCRITION = "SET_DESCRIPTION",
  SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

const initState = {
  description: "",
  sandboxes: null,
  isFetching: false,
  isError: false,
  message: null,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SANDBOXES: {
      return {
        ...state,
        ...action.sandboxes,
      };
    }
    case SET_IS_PROFILE_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_DESCRITION: {
      return {
        ...state,
        description: action.description,
      };
    }
    case SET_PROFILE_ERROR: {
      return {
        ...state,
        isError: action.isError,
        message: action.message,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const setSandboxes = (sandboxes) => ({
  type: SET_SANDBOXES,
  sandboxes,
});
export const setDescription = (description) => ({
  type: SET_DESCRITION,
  description,
});
export const setIsProfileFetching = (isFetching) => ({
  type: SET_IS_PROFILE_FETCHING,
  isFetching,
});
export const setProfileError = (message, isError) => ({
  type: SET_PROFILE_ERROR,
  message,
  isError,
});

export default profileReducer;
