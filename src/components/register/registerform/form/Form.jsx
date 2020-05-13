import React from "react";
import css from "./Form.module.css";
import FormInput from "./forminput/FormInput";
import FormButtonInput from "./formbuttoninput/FormButtonInput";
import * as registerService from "../../../../js/services/RegisterValidationService";
import { useTranslation } from "react-i18next";

const Form = (props) => {
  const { t } = useTranslation("registerPage");

  const number = React.createRef();
  const symbols = React.createRef();
  const letter = React.createRef();

  const isNumberPresent = () => {
    if (!registerService.validateNumber(props.password)) {
      number.current.style = "color: green";
    } else {
      number.current.style = "color: red";
    }
  };

  const isLetterPresent = () => {
    if (!registerService.validateLetter(props.password)) {
      letter.current.style = "color: green";
    } else {
      letter.current.style = "color: red";
    }
  };

  const isLengthMatch = () => {
    if (registerService.validateSymbols(props.password)) {
      symbols.current.style = "color: green";
    } else {
      symbols.current.style = "color: red";
    }
  };
  const setPassword = (password) => {
    isLetterPresent();
    isLengthMatch();
    isNumberPresent();
    props.setPassword(password);
  };

  return (
    <div className={css.form_wrapper}>
      <FormInput
        setInput={props.setNickname}
        type={"text"}
        placeholder={t("form.nicknamePlaceholder")}
        value={props.nickname}
        required={true}
      />
      <FormInput
        setInput={props.setEmail}
        type={"e-mail"}
        placeholder={t("form.emailPlaceholder")}
        value={props.email}
        required={true}
      />
      <FormInput
        setInput={setPassword}
        type={"password"}
        placeholder={t("form.passwordPlaceholder")}
        value={props.password}
        required={true}
      />
      <div className={css.password_conditions}>
        <h4>{t("form.conditions.title")}</h4>
        <ul className={css.password_list}>
          <li>
            <h4 style={{ color: "red" }} ref={symbols}>
              {t("form.conditions.1")}
            </h4>
          </li>
          <li>
            <h4 style={{ color: "red" }} ref={letter}>
              {t("form.conditions.2")}
            </h4>
          </li>
          <li>
            <h4 style={{ color: "red" }} ref={number}>
              {t("form.conditions.3")}
            </h4>
          </li>
        </ul>
      </div>
      <FormInput
        setInput={props.setConfirmPassword}
        type={"password"}
        placeholder={t("form.confirmPasswordPlaceholder")}
        value={props.confirmPassword}
        required={true}
      />
      <FormButtonInput
        sendAction={props.sendRegister}
        buttonText={t("form.buttonText")}
      />
    </div>
  );
};

export default Form;
