import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import classes from './CustomNavbar.module.css';

import LangDropDown from "../LangDropDown/LangDropDown";

import { useState, useContext } from "react";

import { useTranslation } from "react-i18next";

import { NavLink, Link } from 'react-router-dom';
import ThemeContext from "../../../store/theme-context";

const CustomNavbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const themeCtx = useContext(ThemeContext)

  const { t } = useTranslation();

  const switchTheme = () => {
    themeCtx.switchTheme();
  };

  return (
    <Navbar sticky="top" bg="light" variant="light" expand="xl" className={classes.navbar} expanded={navExpanded}>
      <Container>
        <Navbar.Brand style={{fontSize: "2rem"}}><NavLink to="/home" className={classes.title}>Le Molière Express</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => navExpanded ? setNavExpanded(false) : setNavExpanded(true)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item bsPrefix="nav-link" onClick={() => setNavExpanded(false)} className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/home">{t('navbar_home')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" onClick={() => setNavExpanded(false)} className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/about-us">{t('navbar_aboutus')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" onClick={() => setNavExpanded(false)} className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="/read-last-articles">{t('navbar_readlastarticles')}</NavLink></Nav.Item>
            <Nav.Item bsPrefix="nav-link" onClick={() => setNavExpanded(false)} className={classes.item}><NavLink activeClassName={classes.active} className={classes.link} to="read-editions">{t('navbar_publishededitions')}</NavLink></Nav.Item>
            <Button variant="outline-secondary" onClick={switchTheme} className={classes.item}>{themeCtx.theme === 'light' ? t('navbar_darktheme') : t('navbar_lighttheme')}</Button>
            <Nav.Item bsPrefix="nav-link" ><LangDropDown /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
