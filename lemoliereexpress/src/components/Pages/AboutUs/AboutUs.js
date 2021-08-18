import Container from "react-bootstrap/Container";

import Quote from "./Quote/Quote";
import TeamTable from "./TeamTable/TeamTable";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Container className={classes.container}>
      <h1>Connaisez nous</h1>

      <p className={classes.descrpition}>
        Le Molière Express est le journal scolaire du Lycée Français Molière. Il
        est réalisé par les élèves de secondaire, dans le but de créer un
        journal portant sur des sujets très variés et intéressant le plus grand
        nombre d’étudiants possible.
        <br />
        Il s’agit d’un projet qui permet aussi aux élèves participant de
        s’exprimer, d’apprendre et se lier en amitié avec des élèves d’autres
        niveaux.
        <br />
        L’idée a été conçue par Sabina Gómez (1ère) en novembre 2020.
        Actuellement, l’équipe comporte aussi deux autres élèves, Daniel De la
        Cueva (1ère) et Zoe Hinojo (Tale), qui collaborent dans la direction et
        organisation du journal.
        <br />
        Pour contacter avec l’équipe et/ou recevoir le dernier exemplaire,
        dirigez-vous vers l’'icône e-mail en bas à droite, dans ce même site
        web.
      </p>

      <Quote
        authorName="Sabina Gómez"
        authorIs="Rédactrice en chef"
        authorImageUrl="data:image/jpeg;base64,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"
        quoteContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      />

      <h3>Notre équipe</h3>
      <TeamTable/>
    </Container>
  );
};

export default AboutUs;
