import React from "react";

const SET_CODE = "SET_CODE",
  CHANGE_HTML = "CHANGE_HTML",
  CHANGE_JS = "CHANGE_JS",
  CHANGE_CSS = "CHANGE_CSS",
  SET_IS_SANDBOX_FETCHING = "SET_IS_SANDBOX_FETCHING",
  SET_SANDBOX_ID = "SET_SANDBOX_ID",
  SET_SANDBOX_NAME = "SET_SANDBOX_NAME",
  SET_IS_CHOOSE_NAME = "SET_IS_CHOOSE_NAME",
  SET_IS_SAVED = "SET_IS_SAVED",
  SET_IS_SANDBOX_LOADED = "SET_IS_SANDBOX_LOADED",
  SET_IS_SPACEBAR_PRESSED = "SET_IS_SPACEBAR_PRESSED",
  ADD_CHAR_TO_INPUT_ARRAY = "ADD_CHAR_TO_INPUT_ARRAY",
  POP_CHAR_FROM_INPUT_ARRAY = "POP_CHAR_FROM_INPUT_ARRAY",
  SET_IS_EMPTY = "SET_IS_EMPTY",
  SET_NEW_OPTIONS = "SET_NEW_OPTIONS",
  SET_INPUT_CHARS_ARRAY = "SET_INPUT_CHARS_ARRAY";

const initState = {
  htmlInfo: {
    htmlTemplateCode: ``,
    id: "html",
    title: "HTML",
  },
  jsInfo: {
    jsTemplateCode: ``,
    id: "js",
    title: "JavaScript",
  },
  cssInfo: {
    cssTemplateCode: ``,
    id: "css",
    title: "CSS",
  },
  blobUrl: "",
  isFetching: false,
  id: null,
  name: null,
  isChooseName: false,
  isSaved: false,
  isSandboxLoaded: false,
  savedMessage: null,
  isSpacebarPressed: false,
  inputCharsArray: [],
  isEmpty: true,
  newOptionsArray: [],
  basicOptionsArray: [
    { value: "<div></div>", name: "<div>" },
    { value: "<h1></h1>", name: "<h1>" },
    { value: "<h2></h2>", name: "<h2>" },
    { value: "<h3></h3>", name: "<h3>" },
    { value: "<h4></h4>", name: "<h4>" },
    { value: "<h5></h5>", name: "<h5>" },
    { value: "<span></span>", name: "<span>" },
    { value: "<strong></strong>", name: "<strong>" },
    { value: "<select></select>", name: "<select>" },
    { value: "<p></p>", name: "<p>" },
    { value: "<a></a>", name: "<a>" },
    { value: "<img></img>", name: "<img>" },
    { value: "<audio></audio>", name: "<audio>" },
    { value: "<video></video>", name: "<video>" },
    { value: "<br></br>", name: "<br>" },
    { value: "<b></b>", name: "<b>" },
  ],
};

const sandboxReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INPUT_CHARS_ARRAY: {
      return {
        ...state,
        inputCharsArray: action.inputCharsArray,
      };
    }
    case SET_NEW_OPTIONS: {
      return {
        ...state,
        newOptionsArray: action.newOptionsArray,
      };
    }
    case SET_IS_EMPTY: {
      return {
        ...state,
        isEmpty: action.isEmpty,
      };
    }
    case ADD_CHAR_TO_INPUT_ARRAY: {
      return {
        ...state,
        inputCharsArray: state.inputCharsArray.concat(action.char),
      };
    }
    case POP_CHAR_FROM_INPUT_ARRAY: {
      return {
        ...state,
        inputCharsArray: state.inputCharsArray.pop(),
      };
    }
    case SET_IS_SPACEBAR_PRESSED: {
      return {
        ...state,
        isSpacebarPressed: action.isSpacebarPressed,
      };
    }
    case SET_IS_SANDBOX_LOADED: {
      return {
        ...state,
        isSandboxLoaded: action.isSandboxLoaded,
      };
    }
    case SET_CODE: {
      return {
        ...state,
        blobUrl: action.blobUrl,
      };
    }
    case SET_IS_CHOOSE_NAME: {
      return {
        ...state,
        isChooseName: action.isChooseName,
      };
    }
    case SET_SANDBOX_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case CHANGE_HTML: {
      return {
        ...state,
        htmlInfo: {
          ...state.htmlInfo,
          htmlTemplateCode: action.html,
        },
      };
    }
    case CHANGE_JS: {
      return {
        ...state,
        jsInfo: {
          ...state.jsInfo,
          jsTemplateCode: action.js,
        },
      };
    }
    case CHANGE_CSS: {
      return {
        ...state,
        cssInfo: {
          ...state.cssInfo,
          cssTemplateCode: action.css,
        },
      };
    }
    case SET_IS_SANDBOX_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_SANDBOX_ID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case SET_IS_SAVED: {
      return {
        ...state,
        isSaved: action.isSaved,
        savedMessage: action.savedMessage,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const setInputCharsArray = (inputCharsArray) => ({
  type: SET_INPUT_CHARS_ARRAY,
  inputCharsArray,
});
export const setNewOptions = (newOptionsArray) => ({
  type: SET_NEW_OPTIONS,
  newOptionsArray,
});
export const setIsEmpty = (isEmpty) => ({
  type: SET_IS_EMPTY,
  isEmpty,
});
export const addCharToInputArray = (char) => ({
  type: ADD_CHAR_TO_INPUT_ARRAY,
  char,
});
export const popCharFromInputArray = () => ({
  type: POP_CHAR_FROM_INPUT_ARRAY,
});
export const setIsSpacebarPressed = (isSpacebarPressed) => ({
  type: SET_IS_SPACEBAR_PRESSED,
  isSpacebarPressed,
});
export const setName = (name) => ({
  type: SET_SANDBOX_NAME,
  name,
});
export const setCode = (blobUrl) => ({
  type: SET_CODE,
  blobUrl,
});
export const changeHtml = (html) => ({
  type: CHANGE_HTML,
  html,
});
export const changeJs = (js) => ({
  type: CHANGE_JS,
  js,
});
export const changeCss = (css) => ({
  type: CHANGE_CSS,
  css,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_SANDBOX_FETCHING,
  isFetching,
});
export const setSandboxId = (id) => ({
  type: SET_SANDBOX_ID,
  id,
});
export const setIsChooseName = (isChooseName) => ({
  type: SET_IS_CHOOSE_NAME,
  isChooseName,
});
export const setIsSaved = (isSaved, savedMessage) => ({
  type: SET_IS_SAVED,
  isSaved,
  savedMessage,
});
export const setIsSandboxLoaded = (isSandboxLoaded) => ({
  type: SET_IS_SANDBOX_LOADED,
  isSandboxLoaded,
});

export default sandboxReducer;
