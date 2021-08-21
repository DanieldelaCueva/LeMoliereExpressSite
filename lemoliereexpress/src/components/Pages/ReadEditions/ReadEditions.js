import Container from "react-bootstrap/Container";

import classes from "./ReadEditions.module.css"

const Editions = [
  {
    title: "Deuxième Edition - Le Molière Express",
    date: "2021-05-01",
    url: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
  },
  {
    title: "Deuxième Edition - Le Molière Express",
    date: "2021-05-01",
    url: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
  },
  {
    title: "Deuxième Edition - Le Molière Express",
    date: "2021-05-01",
    url: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
  },
  {
    title: "Deuxième Edition - Le Molière Express",
    date: "2021-05-01",
    url: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
  },
];

const ReadEditions = () => {
  return (
    <Container className={classes.container}>
      {Editions.map((edition, idx) => (
        <Container className={classes.wrapper} key={idx}>
            <h1>{edition.title}</h1>
            <h4>{edition.date}</h4>
            <iframe src={edition.url} className={classes.pdf} title={edition.title}/>
        </Container>
      ))}
    </Container>
  );
};

export default ReadEditions;
