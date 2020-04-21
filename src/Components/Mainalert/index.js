import React, { Component } from "react";
import axios from "axios";
import { Alert, Carousel } from "react-bootstrap";
import Shout from "../../images/shout.svg"; // Tell webpack this JS file uses this image

import { Custom } from "./style.css";
import { Anchor } from "./style.js";

class Mainalert extends Component {
  state = {
    alerts: [],
  };
  componentDidMount() {
    axios.get("../data.json").then((res) => {
      this.setState({ alerts: res.data.alerts });
    });
  }

  render() {
    const { alerts } = this.state;

    const alertsmessagesitem = alerts.map((alertsmessages) => {
      return (
        <Carousel.Item key={alertsmessages.id}>
          <Carousel.Caption>
            <div class="d-flex justify-content-between   align-items-center">
              <div className="description">{alertsmessages.description}</div>
              <Anchor href={alertsmessages.link} className="btn ">
                التفاصيل
              </Anchor>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <Alert className="Custom">
        <div class="pl-1">
          <img src={Shout} alt="Shout" className="alert__image" />
        </div>
        <Carousel>{alertsmessagesitem}</Carousel>
      </Alert>
    );
  }
}

export default Mainalert;
