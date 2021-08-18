import classes from "./Quote.module.css";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Quote = (props) => {
  return (
    <Container className={classes.quote_container}>
      <div className={classes.img_div}>
        <Image
          className={classes.quote_img}
          rounded
          src={props.authorImageUrl}
        />
        <div>
          <h4 className={classes.quote_h4}>{props.authorName},</h4>
          <h4 className={classes.quote_h4}>{props.authorIs}</h4>
        </div>
      </div>
      <div className={classes.quote_div}>
        <p>
          <i className={classes.quote}>" {props.quoteContent} "</i>
        </p>
      </div>
    </Container>
  );
};

export default Quote;
