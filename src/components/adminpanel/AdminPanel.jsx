import React from "react";

const AdminPanel = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
