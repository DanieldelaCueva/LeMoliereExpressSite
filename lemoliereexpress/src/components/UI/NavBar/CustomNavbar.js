import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import classes from './CustomNavbar.module.css';

import LangDropDown from "../LangDropDown/LangDropDown";

import { useTranslation } from "react-i18next";

import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {

  const { t } = useTranslation();

  return (
    <Navbar fixed="top" bg="light" variant="light" expand="xl" className={classes.navbar} collapseOnSelect>
      <Container>
        <Navbar.Brand style={{fontSize: "2rem"}}>Le Molière Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item bsPrefix="nav-link" className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/home">{t('navbar_home')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/about-us">{t('navbar_aboutus')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/read-last-articles">{t('navbar_readlastarticles')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="read-editions">{t('navbar_publishededitions')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" ><LangDropDown /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
