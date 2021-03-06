import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { ReactComponent as MessagesImage } from "../../..//images/Submitnew.svg";
import { MessagesContainer } from "./style";
function Messages() {
  const [usermessages, setusermassages] = useState([]);

  useEffect(() => {
    axios.get("https://api.npoint.io/e9229b44cf8d5a2c8866").then((res) => {
      setusermassages(res.data.ussermassages);
    });
  }, []);

  const Usrmessages = usermessages.map((message) => {
    return (
      <div className="messageCount" key={message.id}>
        {message.no}
      </div>
    );
  });

  return (

    <MessagesContainer className="animated pulse">
      <div className="">
        <MessagesImage className="d-block" />
          رسائل جديدة
        </div>
      {Usrmessages}
    </MessagesContainer>

  );
}
export default Messages;
