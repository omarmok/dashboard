import React from "react";
import "./style";
import Submitnewlawsuit from "./Submitnewlawsuit";
import Messages from "./Messages";
import Judgments from "./Judgments";
import Lawsuitcarousal from "./Lawsuitcarousal";
import Invoices from "./Invoices";

function Usersstatistics() {
  return (
    <div className="Usersstatistics">
      <Submitnewlawsuit />
      <Messages />
      <Judgments />
      <Lawsuitcarousal />
      <Invoices />
    </div>
  );
}

export default Usersstatistics;
