import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mainalert from "../../Components/Mainalert";
function Index() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12}>
          <Mainalert />
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
