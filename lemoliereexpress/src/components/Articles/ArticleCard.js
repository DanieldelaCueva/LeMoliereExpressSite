import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import classes from "./ArticleCard.module.css";

const spain_flag_path = `${process.env.PUBLIC_URL}/assets/images/ArticleCard/spain.png`;
const france_flag_path = `${process.env.PUBLIC_URL}/assets/images/ArticleCard/france.png`;
const uk_flag_path = `${process.env.PUBLIC_URL}/assets/images/ArticleCard/uk.png`;

const ArticleCard = (props) => {
  const getTwenty = (text) => {
    let new_string = "";
    for (let i = 0; i < 20; i++) {
      if (text.split(" ")[i] !== undefined) {
        new_string = `${new_string}${text.split(" ")[i]} `;
      }
    }
    return `${new_string}...`;
  };

  const onClickAuthor = (author) => {
    props.setTypedSearch(author.toString());
    props.setActualFilter("Auteur");
  };

  const onClickDate = (date) => {
    props.setTypedSearch(date.toString());
    props.setActualFilter("Date");
  };

  const onClickGroup = (group) => {
    props.setTypedSearch(group.toString());
    props.setActualFilter("Rubrique");
  };

  return (
    <Col lg={4} md={6} sm={12}>
      <Card style={{ width: "auto", margin: "2rem 2rem" }}>
        <Card.Img variant="top" src={props.article.img_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Auteur:{" "}
            <a
              className={classes.link}
              href="#"
              onClick={() => onClickAuthor(props.article.author)}
            >
              {props.article.author}
            </a>{" "}
            / Date:{" "}
            <a
              className={classes.link}
              href="#"
              onClick={() => onClickDate(props.article.date)}
            >
              {props.article.date}
            </a>{" "}
            / Rubrique:{" "}
            <a
              className={classes.link}
              href="#"
              onClick={() => onClickGroup(props.article.group)}
            >
              {props.article.group}
            </a>
          </Card.Subtitle>
          <Card.Text>{getTwenty(props.article.content)}</Card.Text>
          <Button variant="primary" onClick={props.handleShow}>
            Ouvrir
          </Button>
          {props.article.language !== "Español" || (
            <Image
              src={spain_flag_path}
              roundedCircle
              className={classes.flag}
            />
          )}
          {props.article.language !== "English" || (
            <Image
              src={uk_flag_path}
              roundedCircle
              className={classes.flag}
            />
          )}
          {props.article.language !== "Français" || (
            <Image
              src={france_flag_path}
              roundedCircle
              className={classes.flag}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
