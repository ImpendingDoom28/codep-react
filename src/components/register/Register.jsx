import React from "react";
import css from "./Register.module.css";
import Description from "./description/Description";
import RegisterForm from "./registerform/RegisterForm";

const Register = (props) => {
  return (
    <div className={css.container}>
      {/* <div className={css.downangle}></div>
      <div className={css.triangle}></div> */}
      <Description
        title={"Sign up now to get:"}
        list={[
          "Ability to save your snippets!",
          "To load or upload code snippets from out site!",
        ]}
      />
      <RegisterForm {...props} />
      <div className={css.square}></div>
    </div>
  );
};

export default Register;
