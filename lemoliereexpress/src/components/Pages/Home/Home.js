import classes from "./Home.module.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { useMediaPredicate } from "react-media-hook";
import { useEffect, useState } from 'react';

import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

import { Redirect } from "react-router-dom"

const Home = props => {

  const [redirect, setRedirect] = useState()

  const { t } = useTranslation();

  const mobile_portrait = useMediaPredicate("(max-width: 992px) and (orientation: portrait)");

  useEffect(() => {
    props.setFooterFixed(mobile_portrait);
  }, [mobile_portrait]);
  
  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Le Molière Express | Home</title>
        <meta name="description" content="Home page of Le Molière Express's site" />
      </Helmet>

      <h1 style={{fontFamily: "'Open Sans', sans-serif"}}>{t('home_welcome')}</h1>

      <Carousel className={classes.carousel} nextLabel="" prevLabel="" pause="hover">
        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/assets/images/institut_francais.jpg"}
            alt="Interview à l'institut français"
            onClick={() => setRedirect("/read-last-articles/333df9a4-2194-4e40-ab6b-40cb02c52ceb")}
          />
          <Carousel.Caption>
            <h3 style={{fontFamily: "'DM Serif Display', serif"}}>Le Molière Express</h3>
            <p>Par les élèves. Pour les élèves</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/assets/images/concours_unes.png"}
            alt="Concours des unes"
            onClick={() => window.open('https://www.instagram.com/p/CcVL90mM8Eo/')}
          />
          <Carousel.Caption>
            <h3 style={{fontFamily: "'DM Serif Display', serif"}}>Le Molière Express</h3>
            <p>Par les élèves. Pour les élèves</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/assets/images/fernando_ledesma.jpg"}
            alt="Interview à Fernando Ledesma Gelas"
            onClick={() => setRedirect("/read-last-articles/ab0befa5-91f4-4a10-a8c3-26c0b4fe4146")}
          />
          <Carousel.Caption>
            <h3 style={{fontFamily: "'DM Serif Display', serif"}}>Le Molière Express</h3>
            <p>Par les élèves. Pour les élèves</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/assets/images/about_us.png"}
            alt="About us"
            onClick={() => setRedirect("/about-us")}
          />
          <Carousel.Caption>
            <h3 style={{fontFamily: "'DM Serif Display', serif"}}>Le Molière Express</h3>
            <p>Par les élèves. Pour les élèves</p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
      {redirect && <Redirect to={redirect}/>}
    </Container>
  );
};

export default Home;
