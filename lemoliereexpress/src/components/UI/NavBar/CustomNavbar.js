import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import classes from './CustomNavbar.module.css';

import LangDropDown from "../LangDropDown/LangDropDown";

import { useTranslation } from "react-i18next";

const CustomNavbar = () => {

  const { t } = useTranslation();

  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg" className={classes.navbar}>
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: "2rem"}}>Le Molière Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={classes.item}>{t('navbar_home')}</Nav.Link>
            <Nav.Link href="#link" className={classes.item}>{t('navbar_aboutus')}</Nav.Link>
            <Nav.Link className={classes.item}>{t('navbar_readlastarticles')}</Nav.Link>
            <Nav.Link className={classes.item}>{t('navbar_publishededitions')}</Nav.Link>
            <Nav.Link><LangDropDown /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
