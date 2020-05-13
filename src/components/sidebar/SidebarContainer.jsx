import React from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import api from "../../axios/api-config";
import FormInput from "../register/registerform/form/forminput/FormInput";
import FormButtonInput from "../register/registerform/form/formbuttoninput/FormButtonInput";
import {
  setIsChooseName,
  setName,
  setIsSaved,
} from "../../redux/sandbox-reducer";

class SidebarContainer extends React.Component {
  chooseName = () => {
    console.log("changeToChooseName");
    this.props.setIsChooseName(true);
  };

  saveSandbox = () => {
    console.log("saveSandbox");
    api()
      .post("/sandbox", {
        id: this.props.id,
        name: this.props.name,
        htmlCode: this.props.htmlCode,
        jsCode: this.props.jsCode,
        cssCode: this.props.cssCode,
      })
      .then((response) => {
        const { isError, message, code } = response.data;
        if (!isError) {
          this.props.setIsChooseName(false);
          this.props.setIsSaved(true, message);
          setTimeout(() => {
            this.props.setIsSaved(false, "");
          }, 3000);
        }
      });
  };

  render() {
    return (
      <>
        <Sidebar chooseName={this.chooseName} {...this.props} />
        {this.props.isChooseName ? (
          <div
            style={{
              position: "absolute",
              zIndex: "2000",
              background: "#212121",
            }}
          >
            <FormInput
              setInput={this.props.setName}
              type={"text"}
              placeholder={"Введите имя песочницы"}
              value={this.props.name}
            />
            <FormButtonInput
              buttonText={"Отправить"}
              sendAction={this.saveSandbox}
            />
          </div>
        ) : (
          <></>
        )}
        {this.props.isSaved ? (
          <div
            style={{
              position: "absolute",
              zIndex: "2000",
              background: "#212121",
              color: "goldenrod",
            }}
          >
            {this.props.savedMessage}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    htmlCode: state.sandboxPage.htmlInfo.htmlTemplateCode,
    jsCode: state.sandboxPage.jsInfo.jsTemplateCode,
    cssCode: state.sandboxPage.cssInfo.cssTemplateCode,
    id: state.sandboxPage.id,
    name: state.sandboxPage.name,
    isChooseName: state.sandboxPage.isChooseName,
    isSaved: state.sandboxPage.isSaved,
    savedMessage: state.sandboxPage.savedMessage,
  };
};

export default connect(mapStateToProps, {
  setIsChooseName,
  setName,
  setIsSaved,
})(SidebarContainer);
