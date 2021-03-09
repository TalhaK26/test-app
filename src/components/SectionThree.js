import { Container, Row, Col } from 'reactstrap';

import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';

function SectionThree() {
  return (
    <Container className="mt-5 mb-5" style={{height: 700}}>
      <Row className="text-center">
        <Col>
          <h2 className="s-h">How We Build The Apps?</h2>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col md="3">
          <img src={one} />
          <div className="lh-1">
            <p className="s-t mt-3 "><b>Requirement Gathering <br/> / Analysis</b></p>
            <small>Requirement Gathering <br/> / Analysis</small>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionThree;
