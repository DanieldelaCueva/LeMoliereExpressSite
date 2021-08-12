import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import classes from "./ArticleCard.module.css";

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

  const onClickAuthor = author => {
    props.setTypedSearch(author.toString());
    props.setActualFilter("Auteur");
  };

  const onClickDate = date => {
    props.setTypedSearch(date.toString());
    props.setActualFilter("Date");
  };

  const onClickGroup = group => {
    props.setTypedSearch(group.toString());
    props.setActualFilter("Rubrique");
  };

  return (
    <Col lg={4} md={6} sm={12}>
      <Card style={{ width: "auto", margin: "2rem 2rem" }}>
        <Card.Img variant="top" src={props.article.img_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><a className={classes.link} href="#" onClick={() => onClickAuthor(props.article.author)}>Auteur: {props.article.author}</a> / <a className={classes.link} href="#" onClick={() => onClickDate(props.article.date)}>Date: {props.article.date}</a> / <a className={classes.link} href="#" onClick={() => onClickGroup(props.article.group)}>Rubrique: {props.article.group}</a></Card.Subtitle>
          <Card.Text>{getTwenty(props.article.content)}</Card.Text>
          <Button variant="primary" onClick={props.handleShow}>
            Ouvrir
          </Button>
          {props.article.language !== "Español" || (
            <Image
              src="data:image/png;base64,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"
              roundedCircle
              className={classes.flag}
            />
          )}
          {props.article.language !== "English" || (
            <Image
              src="data:image/png;base64,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"
              roundedCircle
              className={classes.flag}
            />
          )}
          {props.article.language !== "Français" || (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/270px-Flag_of_France.svg.png"
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


