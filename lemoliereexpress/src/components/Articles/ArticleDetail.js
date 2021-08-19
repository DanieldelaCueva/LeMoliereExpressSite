import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import classes from "./ArticleDetail.module.css";

import { useTranslation } from "react-i18next";

const ArticleDetail = (props) => {
  const { t } = useTranslation();

  const onClickAuthor = author => {
    props.setTypedSearch(author.toString());
    props.setActualFilter("Auteur");
    props.handleClose();
  };

  const onClickDate = date => {
    props.setTypedSearch(date.toString());
    props.setActualFilter("Date");
    props.handleClose();
  };

  const onClickGroup = group => {
    props.setTypedSearch(group.toString());
    props.setActualFilter("Rubrique");
    props.handleClose();
  };

  return (
    <Modal centered show={props.show} onHide={props.handleClose} dialogClassName={classes.modal}>
      <Modal.Header>
        <Modal.Title>{props.article.title}</Modal.Title>
      </Modal.Header>
      <Image src={props.article.img_url} />
      <Modal.Body>
        <h6 className={classes.attribs}>{t('lastarticles_author')}: <a className={classes.link} href="#" onClick={() => onClickAuthor(props.article.author)}>{props.article.author}</a></h6>
        <h6 className={classes.attribs}>{t('lastarticles_date')}: <a className={classes.link} href="#" onClick={() => onClickDate(props.article.date)}>{props.article.date}</a></h6>
        <h6 className={classes.attribs}>{t('lastarticles_group')}: <a className={classes.link} href="#" onClick={() => onClickGroup(props.article.group)}>{props.article.group}</a></h6> <br />
        <p>{props.article.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        {t('articledetail_close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleDetail;
