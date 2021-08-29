import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import classes from "./ArticleDetail.module.css";

import { useTranslation } from "react-i18next";

import { Link, Redirect, useParams } from "react-router-dom";

const ArticleDetail = (props) => {
  const params = useParams();
  const article_id = params.articleId;

  const [detailedArticle, setDetailedArticle] = useState([]);
  const [error404, setError404] = useState(false);

  const { t } = useTranslation();

  const fetchDetailedArticle = (id) => {
    setError404(false);
    fetch(
      `https://moliereexpressapi.pythonanywhere.com/articles/validated-article-detail/${id}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 500) {
          throw new Error("500");
        }
      })
      .then((fetchedArticle) => setDetailedArticle(fetchedArticle))
      .catch((error) => {
        setError404(true);
      });
  };

  useEffect(() => {
    fetchDetailedArticle(article_id);
  }, []);

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
    <div>
      {!error404 && <Modal centered show={true} dialogClassName={classes.modal}>
        <Modal.Header>
          <Modal.Title>{detailedArticle.title}</Modal.Title>
        </Modal.Header>
        <Image src={detailedArticle.img_url} alt="Article image" style={{maxHeight: "1000px"}}/>
        <Modal.Body>
          <h6 className={classes.attribs}>
            {t("lastarticles_author")}:{" "}
            <Link
              className={classes.link}
              onClick={() => onClickAuthor(detailedArticle.author)}
              to="/read-last-articles"
            >
              {detailedArticle.author}
            </Link>
          </h6>
          <h6 className={classes.attribs}>
            {t("lastarticles_date")}:{" "}
            <Link
              className={classes.link}
              onClick={() => onClickDate(detailedArticle.date)}
              to="/read-last-articles"
            >
              {detailedArticle.date}
            </Link>
          </h6>
          <h6 className={classes.attribs}>
            {t("lastarticles_group")}:{" "}
            <Link
              className={classes.link}
              onClick={() => onClickGroup(detailedArticle.group)}
              to="/read-last-articles"
            >
              {detailedArticle.group}
            </Link>
          </h6>{" "}
          <br />
          <textarea readOnly rows={20} className={classes.textarea} value={detailedArticle.content}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            <Link className={classes.link_nodec} to="/read-last-articles">
              {t("articledetail_close")}
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>}

      {error404 && <Redirect to="/404"></Redirect>}
    </div>
  );
};

export default ArticleDetail;
