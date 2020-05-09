import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { ReactComponent as JudgmentsImage } from "../../..//images/Submitnew.svg";
import { JudgmentsContainer } from "./style";
function Judgments() {
  const [usermJudgments, setuserJudgments] = useState([]);

  useEffect(() => {
    axios.get("https://api.npoint.io/e9229b44cf8d5a2c8866").then((res) => {
      setuserJudgments(res.data.ussermassages);
    });
  }, []);

  const UsrJudgments = usermJudgments.map((Judgment) => {
    return (
      <div className="judgmentsCount" key={Judgment.id}>
        {Judgment.no}
      </div>
    );
  });

  return (
    <Link to="/" >
      <JudgmentsContainer className="animated  bounceInUp">
        <div className="">
          <JudgmentsImage className="d-block" />
          رسائل جديدة
        </div>
        {UsrJudgments}
      </JudgmentsContainer>
    </Link>
  );
}
export default Judgments;
