import React from "react";
import css from "./Confirm.module.css";
import { useLocation, Redirect } from "react-router-dom";

const Confirm = (props) => {
  let location = useLocation();
  let { email } = location.state || { email: null };

  return (
    <>
      {email !== null ? (
        <div className={css.confirm_wrapper}>
          <h1>Thank you for registration!</h1>
          <h3>
            In order to continue you need to go to your email ({email}) and
            confirm your email by clicking the link in message
          </h3>
        </div>
      ) : (
        <Redirect to="/register" />
      )}
    </>
  );
};

export default Confirm;
