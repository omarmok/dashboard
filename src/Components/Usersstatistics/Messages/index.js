import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ReactComponent as MessagesImage } from "../../..//images/Submitnew.svg";
import { MessagesContainer } from "./style";
class Messages extends Component {
  render() {
    return (
      <Link to="/">
        <MessagesContainer>
          <div className="">
            <MessagesImage className="d-block" />
            رسائل جديدة
          </div>

          <div className="messageCount">222</div>
        </MessagesContainer>
      </Link>
    );
  }
}
export default Messages;
