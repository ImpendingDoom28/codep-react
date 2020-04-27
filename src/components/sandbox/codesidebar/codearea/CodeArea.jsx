import React from "react";
import css from "./Codearea.module.css";

const CodeArea = (props) => {
  let textareaRef = React.createRef();
  const changeCode = () => {
    let textareaVal = textareaRef.current.value;
    props.changeCode(textareaVal);
  };

  return (
    <div className={css.codearea_container}>
      <h2>{props.title}</h2>
      <textarea
        className={css.codearea}
        cols={52}
        id={props.id}
        onChange={changeCode}
        value={props.templateCode}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default CodeArea;
