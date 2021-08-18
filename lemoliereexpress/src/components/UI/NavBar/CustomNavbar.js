import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import classes from './CustomNavbar.module.css';

const CustomNavbar = () => {
  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg" className={classes.navbar}>
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: "2rem"}}>Le Molière Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={classes.item}>Accueil</Nav.Link>
            <Nav.Link href="#link" className={classes.item}>Connnaisez nous</Nav.Link>
            <Nav.Link className={classes.item}>Lire Derniers Articles</Nav.Link>
            <Nav.Link className={classes.item}>Éditions Publiées</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
