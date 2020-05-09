import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SubmitnewlawsuitImage } from "../../..//images/Submitnew.svg";
import "./style.css";
import { SubmitnewlawsuitContainer } from "./style";
class Submitnewlawsuit extends Component {
  render() {
    return (
      <Link to="/">
        <SubmitnewlawsuitContainer className="animated slideInRight">
          تقديم دعوي جديدة
          <SubmitnewlawsuitImage />
        </SubmitnewlawsuitContainer>
      </Link>
    );
  }
}
export default Submitnewlawsuit;
