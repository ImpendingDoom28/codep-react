import React from "react";
import api from "../../axios/api-config";
import { setAllUsers } from "../../redux/admin-reducer";
import AdminPanel from "./AdminPanel";
import { connect } from "react-redux";

class AdminPanelContainer extends React.Component {
  getAdminInfo = () => {
    api()
      .get("/admin/users")
      .then((response) => {
        this.props.setAllUsers(response.data.users);
      });
  };

  componentDidMount() {
    this.getAdminInfo();
  }

  render() {
    return <AdminPanel users={this.props.allUsers} />;
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.adminPage.users,
  };
};

export default connect(mapStateToProps, { setAllUsers })(AdminPanelContainer);
