import classes from "./Home.module.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { useMediaPredicate } from "react-media-hook";
import { useEffect } from 'react';

import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

const Home = props => {

  const { t } = useTranslation();

  const mobile_portrait = useMediaPredicate("(max-width: 768px) and (orientation: portrait)");

  useEffect(() => {
    props.setFooterFixed(mobile_portrait);
  }, [mobile_portrait]);
  
  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Le Molière Express | Home</title>
        <meta name="description" content="Home page of Le Molière Express's site" />
      </Helmet>

      <h1>{t('home_welcome')}</h1>

      <Carousel variant="dark" className={classes.carousel} nextLabel="" prevLabel="">
        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/5b/be/51/5bbe514dd733c24cf53b26dcc5b61d30.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Le Molière Express</h3>
            <p>Par les élèves. Pour les élèves</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/5b/be/51/5bbe514dd733c24cf53b26dcc5b61d30.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Le Molière Express</h3>
            <p>{t('home_interview')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/5b/be/51/5bbe514dd733c24cf53b26dcc5b61d30.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Le Molière Express</h3>
            <p>{t('home_visite')}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
