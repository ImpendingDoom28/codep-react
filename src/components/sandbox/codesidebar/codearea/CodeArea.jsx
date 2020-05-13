import React from "react";
import css from "./Codearea.module.css";

const CodeArea = (props) => {
  let textareaRef = React.createRef();
  const changeCode = () => {
    let textareaVal = textareaRef.current.value;
    props.changeCode(textareaVal);
  };

  const checkShiftSpacebar = (event) => {
    event.preventDefault();
    if (event.keyCode === 32 && event.shiftKey) {
      debugger;
      props.onKeyUp();
    }
  };

  const selectRef = React.createRef();

  const onKeyUp = (event) => {
    debugger;
    event.preventDefault();
    if (props.isSpacebarPressed) {
      if (event.keyCode !== 8) {
        if (event.keyCode !== 32) {
          if (event.keyCode !== 16) {
            if (event.keyCode !== 13) {
              props.addChar(event.key === 188 ? "<" : event.key);
            }
          }
        }
      } else {
        props.popChar();
      }
      if (event.keyCode === 13) {
        insertAtCursor(
          textareaRef.current,
          props.newOptionsArray[0].value.substring(props.inputCharsArray.length)
        );
      } else if (event.keyCode !== 32 || event.keyCode !== 16) {
        props.setNewOptionsArray(getAvailableOptions());
      }
    } else {
      checkShiftSpacebar(event);
    }
  };

  const insertAtCursor = (myField, myValue) => {
    //IE support
    if (document.selection) {
      myField.focus();
      let sel = document.selection.createRange();
      sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == "0") {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value =
        myField.value.substring(0, startPos) +
        myValue +
        myField.value.substring(endPos, myField.value.length);
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
    } else {
      myField.value += myValue;
    }
    // props.setNewOptionsArray([]);
    // props.setIsEmpty(true);
    // props.setInputCharsArray([]);
  };

  const getAvailableOptions = () => {
    let i;
    const inputByUser = props.inputCharsArray.join("");
    const getAvailableOptions = [];
    const availableValues = [];
    for (i = 0; i < props.basicOptionsArray.length; i++) {
      if (props.basicOptionsArray[i].name.startsWith(inputByUser)) {
        getAvailableOptions.push(props.basicOptionsArray[i].name);
        availableValues.push(props.basicOptionsArray[i].value);
        props.setIsEmpty(false);
      }
    }
    if (getAvailableOptions.length == 0) {
      props.setIsEmpty(true);
      return [];
    } else {
      const toReturn = [];
      let j;
      for (j = 0; j < getAvailableOptions.length; j++) {
        toReturn.push({
          value: availableValues[j],
          name: getAvailableOptions[j],
        });
      }
      return toReturn;
    }
  };

  return (
    <div className={css.codearea_container}>
      <h2>{props.title}</h2>
      {props.isSpacebarPressed ? (
        <div
          style={{
            position: "absolute",
            background: "white",
            zIndex: "2900",
            transform: "translate(-6rem, 2rem)",
          }}
        >
          <select ref={selectRef} size="7">
            {props.isEmpty ? (
              <>
                {props.basicOptionsArray.map((elem) => (
                  <>
                    <option value={elem.value}>{elem.name}</option>
                  </>
                ))}
              </>
            ) : (
              <>
                {props.newOptionsArray.map((elem) => (
                  <>
                    <option value={elem.value}>{elem.name}</option>
                  </>
                ))}
              </>
            )}
          </select>
        </div>
      ) : (
        ""
      )}
      <textarea
        className={css.codearea}
        cols={52}
        id={props.id}
        onChange={changeCode}
        onKeyUp={onKeyUp}
        value={props.templateCode}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default CodeArea;
