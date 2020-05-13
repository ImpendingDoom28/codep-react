import React from "react";
import CodeArea from "./codearea/CodeArea";
import css from "./CodeSidebar.module.css";

const CodeSidebar = (props) => {
  return (
    <div className={css.inner_wrapper}>
      <CodeArea
        title={props.htmlInfo.title}
        changeCode={props.changeHtml}
        id={props.htmlInfo.id}
        templateCode={props.htmlInfo.htmlTemplateCode}
        onKeyUp={props.showAssistant}
        isSpacebarPressed={props.isSpacebarPressed}
        inputCharsArray={props.inputCharsArray}
        newOptionsArray={props.newOptionsArray}
        setNewOptionsArray={props.setNewOptions}
        setIsEmpty={props.setIsEmpty}
        addChar={props.addCharToInputArray}
        popChar={props.popCharFromInputArray}
        basicOptionsArray={props.basicOptionsArray}
        setInputCharsArray={props.setInputCharsArray}
      />
      <CodeArea
        title={props.jsInfo.title}
        changeCode={props.changeJs}
        id={props.jsInfo.id}
        templateCode={props.jsInfo.jsTemplateCode}
      />
      <CodeArea
        title={props.cssInfo.title}
        changeCode={props.changeCss}
        id={props.cssInfo.id}
        templateCode={props.cssInfo.cssTemplateCode}
      />
    </div>
  );
};

export default CodeSidebar;
