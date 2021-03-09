import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <Container>
      <SectionTwo />
      <SectionThree />
    </Container>
  );
}

export default App;
