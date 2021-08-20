import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ArticleDetail from "../../Articles/ArticleDetail";
import ArticleCard from "../../Articles/ArticleCard";

import { useState, useEffect } from "react";
import ArticleFilter from "../../Articles/ArticleFilter";

import classes from "./ReadLastArticles.module.css";

import { useTranslation } from "react-i18next";

import { Route } from "react-router-dom";

const test_articles = [
  {
    id: 1,
    title: "Test",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    validated: false,
    group: "Science et technologie",
    language: "English",
    author: 4,
  },
  {
    id: 2,
    title: "Another test",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    validated: false,
    group: "Science et technologie",
    language: "Español",
    author: "Daniel De la Cueva, Sabina Gómez",
  },
  {
    id: 3,
    title: "Test 3",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    validated: false,
    group: "Science et technologie",
    language: "Français",
    author: 4,
  },
  {
    id: 4,
    title: "Test",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content: "Hola",
    validated: false,
    group: "Art et culture",
    language: "English",
    author: 4,
  },
  {
    id: 5,
    title: "Another test",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    validated: false,
    group: "Science et technologie",
    language: "Français",
    author: 4,
  },
  {
    id: 6,
    title: "Test 3",
    date: "2021-07-27",
    img_url:
      "https://www.azulschool.net/wp-content/uploads/2021/04/Creacion-y-consumo-de-APIs-con-Django-REST-Framework.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    validated: false,
    group: "Science et technologie",
    language: "Español",
    author: 4,
  },
];

const ReadLastArticles = (props) => {
  const { t } = useTranslation();

  const [articleList, setArticleList] = useState(test_articles);

  const [actualFilter, setActualFilter] = useState(t("lastarticles_title"));

  const [typedSearch, setTypedSearch] = useState("");

  const filterArticles = () => {
    if (
      actualFilter === "Titre" ||
      actualFilter === "Title" ||
      actualFilter === "Título"
    ) {
      setArticleList(
        test_articles.filter((article) =>
          article.title.toString().includes(typedSearch)
        )
      );
    }
    if (
      actualFilter === "Auteur" ||
      actualFilter === "Author" ||
      actualFilter === "Autor"
    ) {
      setArticleList(
        test_articles.filter((article) =>
          article.author.toString().includes(typedSearch)
        )
      );
    }
    if (actualFilter === "Date" || actualFilter === "Fecha") {
      setArticleList(
        test_articles.filter((article) =>
          article.date.toString().includes(typedSearch)
        )
      );
    }
    if (
      actualFilter === "Group" ||
      actualFilter === "Rubrique" ||
      actualFilter === "Sección"
    ) {
      setArticleList(
        test_articles.filter((article) =>
          article.group.toString().includes(typedSearch)
        )
      );
    }
    if (
      actualFilter === "Language" ||
      actualFilter === "Langue" ||
      actualFilter === "Idioma"
    ) {
      setArticleList(
        test_articles.filter((article) =>
          article.language.toString().includes(typedSearch)
        )
      );
    }
  };

  useEffect(() => {
    if (articleList.length === 0) {
      props.setFooterFixed(true);
    } else {
      props.setFooterFixed(false);
    }
  }, [articleList]);

  return (
    <div>
      <Container>
        <ArticleFilter
          typedSearch={typedSearch}
          onChangeTyped={setTypedSearch}
          filterArticles={filterArticles}
          actualFilter={actualFilter}
          setActualFilter={setActualFilter}
        />
        <Row>
          {articleList.lenght === 0 ||
            articleList.map((article) => (
              <ArticleCard
                key={article.id}
                // handleShow={() => handleShow(article.id)}
                article={article}
                setTypedSearch={setTypedSearch}
                setActualFilter={setActualFilter}
              />
            ))}
          {articleList.length !== 0 || (
            <Container className={classes.not_found__container}>
              <h2 className={classes.not_found__h2}>
                {t("lastarticle_notfound")}
              </h2>
            </Container>
          )}
        </Row>
      </Container>

      <Route path="/read-last-articles/:articleId">
        <ArticleDetail
          setTypedSearch={setTypedSearch}
          setActualFilter={setActualFilter}
        />
      </Route>
    </div>
  );
};

export default ReadLastArticles;
