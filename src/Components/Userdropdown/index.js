import React from "react";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import "./style.css";
import { Userareaname } from "./style.js";

class Userdropdown extends React.Component {
  state = {
    userdown: [],
  };
  componentDidMount() {
    axios.get("https://api.npoint.io/7c336023e3194e99e27c").then((res) => {
      this.setState({ userdown: res.data.userdropdown });
    });
  }

  render() {
    const { userdown } = this.state;

    const userdowncontainer = userdown.map((userdowncount) => {
      return (
        <Userareaname key={userdowncount.id}>
          {userdowncount.name}
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="NavDropdown__Item">
              اعدادات المستخدم
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="NavDropdown__Item">
              الدعاوي
            </NavDropdown.Item>
          </NavDropdown>
        </Userareaname>
      );
    });

    return <div>{userdowncontainer}</div>;
  }
}
export default Userdropdown;
