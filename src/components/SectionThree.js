import { Container, Row, Col } from 'reactstrap';

import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';
import black from '../assets/images/black.png';
import yellow from '../assets/images/yellow.png';

function SectionThree() {
  return (
    <Container fluid className="mt-5 mb-5 p-0 pt-5 pb-5" style={{height: 'auto', backgroundColor: '#f5f5f5'}}>
      <Row className="text-center m-0">
        <Col>
          <h2 className="s-h">How We Build The Apps?</h2>
        </Col>
      </Row>
      <Row className="text-center mt-4 m-0 justify-content-center sec-3-con">
        <Col md="2">
          <Row className="align-items-end sec-3">
            <Col md="12">
              <img src={one} />
              <div className="lh-1">
                <p className="s-t mt-3 "><b>Requirement Gathering <br/> / Analysis</b></p>
                <small>Rough Draft. Wireframes, <br/> Scope Document</small>
              </div>
            </Col>
          </Row>
        </Col>
        <div className="connector">
          <img src={yellow} className="connector-img" />
        </div>
        <Col md="2">
          <img src={two} style={{zIndex: 1, position: 'relative'}} />
          <div className="lh-1">
            <p className="s-t mt-3"><b>Design</b></p>
            <small>UI Design, <br/> Functional Design</small>
          </div>
        </Col>
        <div className="connector-1">
          <img src={black} className="connector-img-1" />
        </div>
        <Col md="2">
          <Row className="align-items-end sec-3-dev">
            <Col md="12">
              <img src={three} />
              <div className="lh-1">
                <p className="s-t mt-3 "><b>Development</b></p>
                <small>Agile Development, <br/> Functional Development <br/> Unit Testing</small>
              </div>
            </Col>
          </Row>
        </Col>
        <div className="connector-2">
          <img src={yellow} className="connector-img-2" />
        </div>
        <Col md="2">
          <img src={four} style={{zIndex: 1, position: 'relative'}} />
          <div className="lh-1">
            <p className="s-t mt-3 "><b>Testing</b></p>
            <small>UI Testing, UX Testing, <br/> UAT Testing</small>
          </div>
        </Col>
        <div className="connector-3">
          <img src={black} className="connector-img-3" />
        </div>
        <Col md="2">
          <Row className="align-items-end sec-3-laun">
            <Col md="12">
              <img src={five} />
              <div className="lh-1">
                <p className="s-t mt-3 "><b>Launch / Maintanence</b></p>
                <small>Launch, Load Testing <br/> Maintanence</small>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionThree;
