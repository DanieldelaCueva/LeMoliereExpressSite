import classes from "./Footer.module.css";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const instagram_logo_path = `${process.env.PUBLIC_URL}/assets/images/Footer/instagram-logo.png`;
const twitter_logo_path = `${process.env.PUBLIC_URL}/assets/images/Footer/twitter-logo.png`;
const email_logo_path = `${process.env.PUBLIC_URL}/assets/images/Footer/email-logo.png`;

const Footer = (props) => {
  return (
    <div>
      {props.fixed || (
        <footer className={classes.footer}>
          <Container className={classes.container}>
            <div className={classes.text_container}>
              <h1 className={classes.text1}>Le Molière Express</h1>
              <h2 className={classes.text2}>
                Par les élèves. Pour les élèves.
              </h2>
            </div>

            <div className={classes.social_div}>
              <a href="#">
                <Image
                  src={instagram_logo_path}
                  className={classes.image}
                />
              </a>
              <a href="#">
                <Image
                  src={twitter_logo_path}
                  className={classes.image}
                />
              </a>
              <a href="mailto:moliereexpress@molierezaragoza.org?Subject=Contact%20from%20the%20website">
                <Image
                  src={email_logo_path}
                  className={classes.image}
                />
              </a>
            </div>
          </Container>
        </footer>
      )}

      {props.fixed === false || (
        <footer className={classes.footer_fixed}>
          <Container className={classes.container}>
            <div className={classes.text_container}>
              <h1 className={classes.text1}>Le Molière Express</h1>
              <h2 className={classes.text2}>
                Par les élèves. Pour les élèves.
              </h2>
            </div>

            <div className={classes.social_div}>
              <a href="#">
                <Image
                  src={instagram_logo_path}
                  className={classes.image}
                />
              </a>
              <a href="#">
                <Image
                  src={twitter_logo_path}
                  className={classes.image}
                />
              </a>
              <a href="mailto:moliereexpress@molierezaragoza.org?Subject=Contact%20from%20the%20website">
                <Image
                  src={email_logo_path}
                  className={classes.image}
                />
              </a>
            </div>
          </Container>
        </footer>
      )}
    </div>
  );
};

export default Footer;
