import { Container, Row, Col } from 'reactstrap';

import logo from '../assets/images/appshah_logo.png';
import android from '../assets/images/android.png';
import web from '../assets/images/web.png';
import game from '../assets/images/game.png';

function SectionOne() {
  return (
    <Container fluid className="p-0">
      <Row className="text-center m-0" >
        <Col md="5 pt-3">
            <Row className="m-0">
                <Col><img src={logo} /></Col>
            </Row>
            <Row className="m-0">
                <Col>
                    <h2>LOOKING TO BUILD</h2>
                    <h1>MOBILE APPS</h1>
                    <p>MOBILE APPS</p>
                </Col>
            </Row>
        </Col>
        <Col md="7 pt-3" className="banner-sec"></Col>
      </Row>
    </Container>
  );
}

export default SectionOne;
