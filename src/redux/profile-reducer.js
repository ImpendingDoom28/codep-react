const SET_PROFILE_INFO = "SET_PROFILE_INFO";

const initState = {
  id: "",
  image: "",
  nickname: "",
  email: "",
  description: "",
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO: {
      return {
        ...state,
        id: action,
      };
    }
  }
};

export const setProfileInfo = (profile) => {
  action: SET_PROFILE_INFO, profile;
};
