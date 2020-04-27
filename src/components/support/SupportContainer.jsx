import React from "react";
import Support from "./Support";
import { connect } from "react-redux";
import {
  setCurrentMessage,
  sendMessage,
  setMessages,
  setPageId,
} from "../../redux/support-reducer";
import api from "../../axios/api-config";

class SupportContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.getPageId();
  }

  getPageId() {
    api.get("/support").then((response) => {
      console.log(response.data);
      this.props.setPageId(response.data.token);
      this.props.setCurrentMessage("SupportChatInit");
      this.sendMessage(this.props.pageId, this.props.currentMessage);
    });
  }

  sendMessage() {
    const messageVal = this.props
      ? this.props.currentMessage
      : this.currentMessage;
    const pageIdVal = this.props ? this.props.pageId : this.pageId;
    api
      .post("/messages", {
        pageId: pageIdVal,
        message: messageVal,
      })
      .then((response) => {
        if (messageVal === "SupportChatInit") {
          this.receiveMessage(pageIdVal);
        }
        this.props.setCurrentMessage("");
      });
  }

  receiveMessage(pageId) {
    api.get("/messages?pageId=" + pageId).then((response) => {
      this.props.setMessages(response.data);
      this.receiveMessage(pageId);
    });
  }

  render() {
    return <Support {...this.props} sendMessage={this.sendMessage} />;
  }
}

const mapStateToProps = (state) => {
  return {
    pageId: state.supportPage.pageId,
    currentMessage: state.supportPage.message,
    messages: state.supportPage.messages,
  };
};

export default connect(mapStateToProps, {
  sendMessage,
  setCurrentMessage,
  setMessages,
  setPageId,
})(SupportContainer);
