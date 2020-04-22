import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mainalert from "../../Components/Mainalert";
import Usersstatistics from "../../Components/Usersstatistics";
import Maincontent from "../../Components/Maincontent";
import "./style.css";
function Index() {
  return (
    <Container className="mt-5 maincontent">
      <Row>
        <Col sm={12}>
          <Mainalert />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={3} sm={12}>
          <Usersstatistics />
        </Col>
        <Col md={9} sm={12}>
          <Maincontent />
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
