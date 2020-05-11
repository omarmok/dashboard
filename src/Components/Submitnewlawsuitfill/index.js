import React from "react";
import { Form, Row, Col } from "react-bootstrap";
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
                            <Form.Label className="formlabel">الاسم</Form.Label>
                            <Form.Control type="input" />
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
                </Form>
            </ContairnerBg>

        </div >
    );
}


