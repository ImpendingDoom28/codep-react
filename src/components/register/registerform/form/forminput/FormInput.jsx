import React from "react";
import css from "./FormInput.module.css";

const FormInput = (props) => {
  let inputRef = React.createRef();
  const setInput = () => {
    const inputVal = inputRef.current.value;
    props.setInput(inputVal);
  };
  return (
    <div className={css.input_container}>
      <input
        type={props.type}
        value={props.value}
        onChange={setInput}
        ref={inputRef}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default FormInput;
