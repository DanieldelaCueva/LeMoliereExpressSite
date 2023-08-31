import Container from "react-bootstrap/Container";

import Quote from "./Quote/Quote";
import TeamTable from "./TeamTable/TeamTable";

import classes from "./AboutUs.module.css";

import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

import { useEffect } from 'react';

const AboutUs = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.setFooterFixed(true);
  });

  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Le Molière Express | About Us</title>
        <meta name="description" content="About us page" />
      </Helmet>

      <h1>{t("aboutus_title")}</h1>

      <p className={classes.descrpition}>
        {t("aboutus_text")}
      </p>

      <Quote
        authorName="Sabina Gómez"
        authorIs={t("quote_rec")}
        authorImageUrl="https://drive.google.com/uc?export=view&id=11yxCBjJuwg9uQ-kigtnx954h1Xdb6pnu"
        quoteContent='Nous entendons souvent dire que
        les adolescents vivent dans une bulle,
        que nous sommes passifs ou peu
        impliqués. Cependant, voici la preuve
        que nous sommes capables de mener à
        bout une idée par nous-mêmes, sans
        nécessiter de la direction ou supervision
        d’adultes. Le Molière Express est un
        projet collectif que nous, élèves du
        Molière, avons créé et gérons en
        autonomie et dont nous nous devons
        sentir extrêmement fiers.'
      />

      <h3 className={classes.h3}>{t("teamtable_title")}</h3>
      <TeamTable />
    </Container>
  );
};

export default AboutUs;
