import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import All from "./All";
import Shout from "../../../images/paper.svg"; // Tell webpack this JS file uses this image
import { Maintitle } from "./style.js";
import "./style.css";

function Suits() {
  return (
    <div className="Suits">
      <Maintitle>
        <img src={Shout} alt="Shout" className="Maintitle__image" />
        الدعاوي
      </Maintitle>

      <div className="tabs">
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="الكل">
            <div className="tableContainer">
              <All />
            </div>
          </Tab>
          <Tab eventKey="two" title=" دعاوى التدقيق">
            دعاوى التدقيق
          </Tab>
          <Tab eventKey="three" title="  دعاوي الصلح">
            دعاوي الصلح
          </Tab>

          <Tab eventKey="three" title=" دعاوي التحكيم">
            دعاوي التحكيم
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Suits;
