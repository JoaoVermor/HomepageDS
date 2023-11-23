import {Container } from "react-bootstrap"

import  Card  from "./components/Card";
import  Footer  from "./components/Footer";
import Header from "./components/Header/Header";
import Forms from "./components/Form";

function App() {
  return (
    <Container className="bg-dark">
      <Header/>
      <Container>
        <Container >
          <Container>
            <Forms/>
          </Container>
        </Container>
        <Card></Card>
      </Container>
      <Footer/>
    </Container>
  );
}

export default App;
