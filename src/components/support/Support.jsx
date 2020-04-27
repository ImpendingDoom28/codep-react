import React from "react";
import css from "./Support.module.css";

const Support = (props) => {
  const inputRef = React.createRef();
  const setMessage = () => {
    let message = inputRef.current.value;
    props.setCurrentMessage(message);
  };

  return (
    <div className={css.chat}>
      <h1>Chat with support</h1>
      <h3>Here you can chat with support in order to ask some questions!!!</h3>

      <input
        type="text"
        placeholder="Enter your message here"
        ref={inputRef}
        value={props.message}
        onChange={setMessage}
      />
      <button onClick={props.sendMessage}>Send</button>
      <table>
        <thead>
          <tr>
            <td>Said:</td>
            <td>Message:</td>
          </tr>
        </thead>
        <tbody>
          {props.messages.map((messageDto) => (
            <tr>
              <td>{messageDto.pageId}</td>
              <td>{messageDto.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Support;
