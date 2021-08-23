import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import classes from "./ReadEditions.module.css";

import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

const ReadEditions = props => {
  const { t } = useTranslation();

  const [editions, setEditions] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEditions = () => {
    setIsloading(true);
    setError(null);
    fetch("https://moliereexpressapi.pythonanywhere.com/articles/editions-list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((fetchedResults) => {
        setEditions(fetchedResults);
        setIsloading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchEditions()
  },[]);

  useEffect(() => {
    if (editions.length < 2) {
      props.setFooterFixed(true)
      console.log(true)
    } else {
      props.setFooterFixed(false)
      console.log(false)
    }
  }, [editions])

  let content = "";
  if (editions.length > 0) {
    content = editions.map((edition, idx) => (
      <Container className={classes.wrapper} key={idx}>
        <h1>{edition.title}</h1>
        <h4>{edition.date}</h4>
        <iframe
          src={edition.url}
          className={classes.pdf}
          title={edition.title}
        />
      </Container>
    ));
  }
  if (editions.length === 0) {
    content = (
      <Container className={classes.not_found__container}>
        <h2 className={classes.not_found__h2}>{t("editions_notfound")}</h2>
      </Container>
    );
  }
  if (error) {
    content = (
      <Container className={classes.not_found__container}>
        <h2 className={classes.not_found__h2}>{t("editions_error")}</h2>
      </Container>
    );
  }
  if (isLoading) {
    content = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Le Molière Express | Read Editions</title>
        <meta
          name="description"
          content="Page where you can read the published editions of Le Molière Express"
        />
      </Helmet>
      {content}
    </Container>
  );
};

export default ReadEditions;
