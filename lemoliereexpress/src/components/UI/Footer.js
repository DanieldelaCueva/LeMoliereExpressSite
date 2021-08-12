import classes from "./Footer.module.css";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.text_container}>
          <h1 className={classes.text1}>Le Molière Express</h1>
          <h2 className={classes.text2}>Par les élèves. Pour les élèves.</h2>
        </div>

        <div className={classes.social_div}>
          <a href="#">
            <Image
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
              className={classes.image}
            />
          </a>
          <a href="#">
            <Image
              src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-6.png"
              className={classes.image}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
