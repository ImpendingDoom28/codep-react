import React from "react";
import css from "./Form.module.css";
import FormInput from "./forminput/FormInput";
import FormButtonInput from "./formbuttoninput/FormButtonInput";

const Form = (props) => {
  return (
    <div className={css.form_wrapper}>
      <FormInput
        setInput={props.setNickname}
        type={"text"}
        placeholder="Enter your nickname"
        value={props.nickname}
        required={true}
      />
      <FormInput
        setInput={props.setEmail}
        type={"e-mail"}
        placeholder="Enter your e-mail"
        value={props.email}
        required={true}
      />
      <FormInput
        setInput={props.setPassword}
        type={"password"}
        placeholder="Enter your password"
        value={props.password}
        required={true}
      />
      <div className={css.password_conditions}>
        <h4>Your password must follow the conditions below:</h4>
        <ul className={css.password_list}>
          <li>
            <h4>It must be at least 8 symbols</h4>
          </li>
          <li>
            <h4>It must at least contain 1 upper case letter</h4>
          </li>
          <li>
            <h4>It must at least contain 1 number</h4>
          </li>
        </ul>
      </div>
      <FormInput
        setInput={props.setConfirmPassword}
        type={"password"}
        placeholder="Confirm your password"
        value={props.confirmPassword}
        required={true}
      />
      <FormButtonInput
        sendAction={props.sendRegister}
        buttonText={"Register now on CodeP!"}
      />
    </div>
  );
};

export default Form;
