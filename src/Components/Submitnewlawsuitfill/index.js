import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Shout from "../../images/Submitnew.svg"; // Tell webpack this JS file uses this image
import { Maintitle, ContairnerBg } from "./style.js";
import './style.css';
export default function Submitnewlawsuitfill() {
    return (
        <div className="animated slideInLeft">

            <Maintitle>
                <img src={Shout} alt="Shout" className="Maintitle__image" />
    تقديم دعوى
      </Maintitle>

            <ContairnerBg>

                <Form>
                    <Row>
                        <Col md={3} sm="12" className="text-right">
                            <Form.Label className="formlabel">الاسم</Form.Label>
                            <Form.Control type="input" />
                        </Col>
                        <Col md={3} sm="12" className="text-right">
                            <Form.Label className="formlabel">رقم الهوية</Form.Label>
                            <Form.Control type="number" />
                        </Col>

                        <Col md={3} sm="12" className="text-right">

                            <Form.Label className="formlabel">الجنسية</Form.Label>
                            <Form.Control as="select">
                                <option>سعودي</option>
                                <option>خليجي</option>
                                <option>مقيم</option>

                            </Form.Control>
                        </Col>

                        <Col md={3} sm="12" className="text-right">
                            <Form.Label className="formlabel">ارفاق نسخة الهوية </Form.Label>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input />
                                <Form.File.Label className="formlabel" data-browse="رفع ملف">
                                </Form.File.Label>
                            </Form.File>
                        </Col>


                    </Row>

                    <Row>
                        <Col md={8} sm="12" className="text-right mt-3">

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="formlabel">الموضوع</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                        </Col>

                        <Col md={4} sm="12" className="text-right mt-3">
                            <Form.Label className="formlabel">الجنس</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />

                                </div>
                            ))}
                        </Col>
                    </Row>

                    <Row>

                        <Col className="text-right">
                            <Button variant="primary" type="submit"> ارسال </Button>
                        </Col>
                    </Row>
                </Form>
            </ContairnerBg>

        </div >
    );
}


