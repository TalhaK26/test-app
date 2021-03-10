import { Container, Row, Col } from 'reactstrap';

import ios from '../assets/images/ios.png';
import android from '../assets/images/android.png';
import web from '../assets/images/web.png';
import game from '../assets/images/game.png';

function SectionTwo() {
  return (
    <Container fluid className="p-0">
      <Row className="text-center m-0">
        <Col>
          <h2 className="s-h">What We Do</h2>
          <div className="s-d">
            <p className="s-p mt-3">We eat, sleep and breathe. It's who we are. We create the kind of apps that people love & are used over & over again.</p>
          </div>
        </Col>
      </Row>
      <Row className="text-center mt-4 justify-content-center m-0">
        <Col md="2">
          <img src={ios} />
          <p className="s-t mt-3">IOS <br/> Development</p>
        </Col>
        <Col md="2">
          <img src={android} />
          <p className="s-t mt-3">Android <br/> Development</p>
        </Col>
        <Col md="2">
          <img src={game} />
          <p className="s-t mt-3">Game <br/> Development</p>
        </Col>
        <Col md="2">
          <img src={web} />
          <p className="s-t mt-3">Web <br/> Development</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionTwo;
