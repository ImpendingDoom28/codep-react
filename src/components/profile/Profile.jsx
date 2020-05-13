import React from "react";
import FormButtonInput from "../register/registerform/form/formbuttoninput/FormButtonInput";

const Profile = (props) => {
  return (
    <>
      <div>
        <h2>Your Profile:</h2>
        <div>
          <h4>{props.userInfo.nickname}'s data:</h4>
          <ul>
            <li>ID: {props.userInfo.id}</li>
            <li>Role: {props.userInfo.role}</li>
            <li>Biography: {props.bio}</li>
            <li>Email: {props.userInfo.email}</li>
          </ul>
        </div>
        <div>
          <h4>Your sandboxes:</h4>
          <ul>
            {props.sandboxes !== null && props.sandboxes.size !== 0 ? (
              <>
                {props.sandboxes.map((sandbox) => (
                  <li>
                    <h5>Sandbox name: {sandbox.name}</h5>
                    <span>
                      <FormButtonInput
                        buttonText="Load this sandbox"
                        sendAction={() => {
                          props.loadSandbox(sandbox.id);
                        }}
                      />
                    </span>
                  </li>
                ))}
              </>
            ) : (
              <h5>You have no saved sandboxes! Go and save any!</h5>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
