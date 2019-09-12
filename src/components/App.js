import React from "react";
import { Container } from "reactstrap";
import Intro from "./Intro";
import Memorial from "./Memorial";
import Outro from "./Outro";

const App = () => {
  return (
    <Container fluid className="h-100 p-0">
      <Intro />
      <Memorial />
      <Outro />
    </Container>
  );
};

export default App;
