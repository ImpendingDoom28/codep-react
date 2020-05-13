const SET_SANDBOXES = "SET_SANDBOXES",
  SET_IS_PROFILE_FETCHING = "SET_IS_PROFILE_FETCHING",
  SET_BIO = "SET_BIO",
  SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

const initState = {
  bio: null,
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
        sandboxes: [...action.sandboxes],
      };
    }
    case SET_IS_PROFILE_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_BIO: {
      return {
        ...state,
        bio: action.bio,
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
export const setBio = (bio) => ({
  type: SET_BIO,
  bio,
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
