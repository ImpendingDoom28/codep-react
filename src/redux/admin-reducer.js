const SET_ALL_USERS = "SET_ALL_USERS";

const initState = {
  users: [],
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users,
});

export default adminReducer;
