import React from 'react';
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/Navbar.js";
import Main from "./components/Main.js";

import 'bootstrap/dist/css/bootstrap.css';
import 'fontsource-roboto';
import './App.css';

function App() {
  return (
    <Container>
      <CustomNavbar />
      <Main />
    </Container>

  );
}

export default App;
