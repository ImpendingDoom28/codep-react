const SEND_MESSAGE = "SEND_MESSAGE",
  SET_CURRENT_MESSAGE = "SET_CURRENT_MESSAGE",
  SET_MESSAGES = "SET_MESSAGES",
  SET_PAGE_ID = "SET_PAGE_ID";

const initState = {
  currentMessage: "",
  pageId: "",
  messages: [],
};

const supportReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
      };
    }
    case SET_CURRENT_MESSAGE: {
      return {
        ...state,
        message: action.message,
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: [...action.messages],
      };
    }
    default: {
      return { ...state };
    }
    case SET_PAGE_ID: {
      return {
        ...state,
        pageId: action.pageId,
      };
    }
  }
};

export const setCurrentMessage = (message) => ({
  type: SET_CURRENT_MESSAGE,
  message,
});
export const sendMessage = (id, message) => ({
  type: SEND_MESSAGE,
  id,
  message,
});
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});
export const setPageId = (pageId) => ({
  type: SET_PAGE_ID,
  pageId,
});

export default supportReducer;
