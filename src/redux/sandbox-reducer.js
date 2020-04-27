import { act } from "react-dom/test-utils";

const SET_CODE = "SET_CODE",
  CHANGE_HTML = "CHANGE_HTML",
  CHANGE_JS = "CHANGE_JS",
  CHANGE_CSS = "CHANGE_CSS",
  SET_IS_SANDBOX_FETCHING = "SET_IS_SANDBOX_FETCHING";

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
};

const sandboxReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CODE: {
      return {
        ...state,
        blobUrl: action.blobUrl,
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
    default: {
      return { ...state };
    }
  }
};

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

export default sandboxReducer;
