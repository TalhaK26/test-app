import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import logo from '../assets/images/appshah_logo.png';

function SectionOne() {
    return (
        <Container fluid className="p-0 banner-sec">
            <Row className="m-0 pt-4 w-75 mx-auto">
            <Col md="6" className="brand-logo"><img src={logo}/></Col>
            <Col md="6">
                <Row>
                    <Col md="12" sm="12" className="text-right h-text">
                        <div className="sec-1-text d-md-inline-block"> 
                            <p className="mb-0 ">Got an idea?</p>
                            <p className="sec-1-num mb-0 d-md-inline">+1 917-732-1695</p>
                        </div>
                        <div className="req-btn">
                            <Button className="btn-sec-1 d-md-inline">Request Estimate</Button>
                        </div>
                    </Col>   
                </Row>
            </Col>
           </Row>
            <Row className="m-0 h-100">
                <div style={{width:'100%', margin: '0px 0px 0px 0px'}}>
                    <Row className="m-0 h-100">
                        <Col md="6 banner-text">
                            <Row className="m-0 h-75 align-items-center justify-content-center">
                                <Col md="8" className="banner-text">
                                    <h2 style={{fontSize: 27}}>LOOKING TO BUILD</h2>
                                    <h1 className="banner-h">MOBILE APPS</h1>
                                    <p>We eat, sleep and breathe mobile. It's who we are, <br/> create the kind of apps that people love & are used <br/> over & over again. We eat, sleep and breathe mobile. <br/> It's who we are</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6">
                            <Row className="m-0 h-75 align-items-center">
                                <Col md="12">
                                    <Form className="req-form">
                                        <FormGroup>
                                            <Label className="form-txt">Discuss with us to start <br/> molding your idea.</Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="text" placeholder="Full Name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="email" name="email" placeholder="Email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="number" name="phone" placeholder="Phone Number" />
                                        </FormGroup>
                                        <FormGroup className="text-center">
                                            <Button className="btn-form mt-3">Send Request</Button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default SectionOne;
