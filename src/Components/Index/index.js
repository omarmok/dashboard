import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mainalert from "../../Components/Mainalert";
import Usersstatistics from "../../Components/Usersstatistics";
import Maincontent from "../../Components/Maincontent";
function Index() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12}>
          <Mainalert />
        </Col>
      </Row>

      <Row className="mt-5">
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
