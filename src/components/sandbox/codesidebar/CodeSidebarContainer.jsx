import React from "react";
import CodeSidebar from "./CodeSidebar";
import { connect } from "react-redux";
import {
  setCode,
  changeCss,
  changeHtml,
  changeJs,
  setIsFetching,
  setSandboxId,
  setName,
  setIsSpacebarPressed,
  addCharToInputArray,
  popCharFromInputArray,
  setNewOptions,
  setIsEmpty,
  setInputCharsArray,
} from "../../../redux/sandbox-reducer";
import api from "../../../axios/api-config";

class CodeSidebarContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isSandboxLoaded) {
      this.props.setIsFetching(true);
      api()
        .get("/sandbox")
        .then((response) => {
          console.log(response.data);
          if (!response.data.isError) {
            const { id, name, htmlCode, cssCode, jsCode } = response.data;
            this.props.changeHtml(htmlCode);
            this.props.changeCss(cssCode);
            this.props.changeJs(jsCode);
            this.props.setSandboxId(id);
            this.props.setName(name);
            this.props.setIsFetching(false);
          }
        });
    } else {
      this.props.setIsFetching(false);
    }
  }

  componentDidUpdate() {
    if (!this.props.isFetching) {
      this.changeCode();
    }
  }

  showAssistant = () => {
    this.props.setIsSpacebarPressed(!this.props.isSpacebarPressed);
  };

  changeCode = () => {
    let blobUrl = this.getGeneratedPageURL({
      html: this.props.htmlInfo.htmlTemplateCode,
      js: this.props.jsInfo.jsTemplateCode,
      css: this.props.cssInfo.cssTemplateCode,
    });
    this.props.setCode(blobUrl);
  };

  getGeneratedPageURL = ({ html, css, js }) => {
    //Create blob-URLs for each code-snippet of language
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javascript");

    const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        ${js && `<script src="${jsURL}"></script>`}
      </head>
      <body>
        ${html || ""}
      </body>
    </html>
  `;

    return getBlobURL(source, "text/html");
  };

  render() {
    return <CodeSidebar showAssistant={this.showAssistant} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    htmlInfo: state.sandboxPage.htmlInfo,
    jsInfo: state.sandboxPage.jsInfo,
    cssInfo: state.sandboxPage.cssInfo,
    isFetching: state.sandboxPage.isFetching,
    id: state.sandboxPage.id,
    name: state.sandboxPage.name,
    isSandboxLoaded: state.sandboxPage.isSandboxLoaded,
    isSpacebarPressed: state.sandboxPage.isSpacebarPressed,
    inputCharsArray: state.sandboxPage.inputCharsArray,
    newOptionsArray: state.sandboxPage.newOptionsArray,
    isEmpty: state.sandboxPage.isEmpty,
    basicOptionsArray: state.sandboxPage.basicOptionsArray,
  };
};

export default connect(mapStateToProps, {
  setCode,
  changeHtml,
  changeCss,
  changeJs,
  setIsFetching,
  setSandboxId,
  setName,
  setIsSpacebarPressed,
  addCharToInputArray,
  popCharFromInputArray,
  setNewOptions,
  setIsEmpty,
  setInputCharsArray,
})(CodeSidebarContainer);
