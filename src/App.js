import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Mainalert from "./Components/Mainalert";
import Submitnewlawsuit from "./Components/Usersstatistics/Submitnewlawsuit";
import Messages from "./Components/Usersstatistics/Messages";
import Judgments from "./Components/Usersstatistics/Judgments";
import Lawsuitcarousal from "./Components/Usersstatistics/Lawsuitcarousal";
import Invoices from "./Components/Usersstatistics/Invoices";
import Submitnewlawsuitfill from "./Components/Submitnewlawsuitfill";
import "./App.css";

import Mainnav from "./Components/Mainnav";
import Index from "./Components/Index";

function App() {
  return (
    <div className="App text-center ">
      <BrowserRouter>
        <Mainnav />
        <Container className="mt-5 maincontent">
          <Row>
            <Col sm={12}>
              <Mainalert />
            </Col>
          </Row>

          <Row className="mt-3 mb-1">
            <Col md={3} sm={12}>
              <Link to="/Submitnewlawsuitfill"> <Submitnewlawsuit /></Link>
              <Link to="/index"> <Judgments /></Link>
              <Link to="/"> <Messages /></Link>
              <Link to="/"><Lawsuitcarousal /></Link>
              <Link to="/"><Invoices /></Link>
            </Col>
            <Col md={9} sm={12}>
              <Route exact path="/" component={Index}></Route>
              <Route path="/Submitnewlawsuitfill" component={Submitnewlawsuitfill}></Route>
              <Route path="/Index" component={Index}></Route>
            </Col>
          </Row>

        </Container>




      </BrowserRouter>
    </div>
  );
}

export default App;
