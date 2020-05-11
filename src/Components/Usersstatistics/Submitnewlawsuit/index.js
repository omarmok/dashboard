import React, { Component } from "react";
import { ReactComponent as SubmitnewlawsuitImage } from "../../..//images/Submitnew.svg";
import "./style.css";
import { SubmitnewlawsuitContainer } from "./style";
class Submitnewlawsuit extends Component {
  render() {
    return (

      <SubmitnewlawsuitContainer className="animated slideInRight">
        تقديم دعوي جديدة
        <SubmitnewlawsuitImage />
      </SubmitnewlawsuitContainer>

    );
  }
}
export default Submitnewlawsuit;
