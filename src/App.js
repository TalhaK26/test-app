import './App.css';
import { Container } from 'reactstrap';
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <Container fluid className="p-0">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Container>
  );
}

export default App;
