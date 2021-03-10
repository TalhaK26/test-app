import { useState } from 'react';
import { Container, Row, Col, Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import logo from '../assets/images/appshah_logo.png';
import android from '../assets/images/android.png';
import web from '../assets/images/web.png';
import game from '../assets/images/game.png';

function SectionOne() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
return (
    <Container fluid className="p-0 banner-sec">
        <Container>
            <Row className="m-0 pt-3">
                <Col md="6" className="brand-logo"><img src={logo}/></Col>
                <Col md="6">
                    <Row>
                    <Col md="6" sm="12" className="text-right h-text">
                        <p className="sec-1-text"> Got an idea?
                            <br/><span className="sec-1-num">+1 917-732-1695</span>
                        </p>
                    </Col>   
                    <Col md="6" sm="12" className="h-btn">
                        <Button className="btn-sec-1">Request Estimate</Button>
                    </Col>   
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md="6 banner-text">
                    <div>
                        <h2 style={{fontSize: 27}}>LOOKING TO BUILD</h2>
                        <h1 className="banner-h">MOBILE APPS</h1>
                        <p>We eat, sleep and breathe mobile. It's who we are, <br/> create the kind of apps that people love & are used <br/> over & over again. We eat, sleep and breathe mobile. <br/> It's who we are</p>
                    </div>
                    </Col>
                <Col md="6"></Col>
            </Row>
        </Container>
    </Container>

    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="me-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/components/">Components</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    //         </NavItem>
    //       </Nav>
    //       <NavbarText>Simple Text</NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
}

export default SectionOne;
