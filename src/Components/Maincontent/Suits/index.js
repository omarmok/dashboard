import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import All from "./All";
import Checking from "./Checking";
import Reconciliation from "./Reconciliation";
import Arbitration from "./Arbitration";
import Shout from "../../../images/paper.svg"; // Tell webpack this JS file uses this image
import { Maintitle } from "./style.js";
import "./style.css";

function Suits() {
  return (
    <div className="Suits  animated bounceIn"  >
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
          <Tab eventKey="Checking" title=" دعاوى التدقيق">
            <div className="tableContainer">
              <Checking />
            </div>
          </Tab>
          <Tab eventKey="Reconciliation" title="  دعاوي الصلح">
            <div className="tableContainer">
              <Reconciliation />
            </div>
          </Tab>

          <Tab eventKey="Arbitration" title=" دعاوي التحكيم">
            <div className="tableContainer">
              <Arbitration />
            </div>
          </Tab>
        </Tabs>
      </div>

    </div>
  );
}

export default Suits;
