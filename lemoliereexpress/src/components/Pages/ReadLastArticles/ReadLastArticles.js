import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import ArticleDetail from "../../Articles/ArticleDetail";
import ArticleCard from "../../Articles/ArticleCard";

import { useState, useEffect } from "react";
import ArticleFilter from "../../Articles/ArticleFilter";

import classes from "./ReadLastArticles.module.css";

import { useTranslation } from "react-i18next";

import { Route } from "react-router-dom";

import { useMediaPredicate } from "react-media-hook";

import { Helmet } from "react-helmet";

const ReadLastArticles = (props) => {
  const { t } = useTranslation();
  const [winFactor, setWinFactor] = useState(0);

  const loadOnScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;

    setWinFactor(Math.round(scrollTop / (windowHeight-300)));
  };

  window.addEventListener("scroll", loadOnScroll);

  useEffect(() => {
    if (9 + winFactor * 3 > articlesLoaded){
      setArticlesLoaded(9 + winFactor * 3);
      fetchArticleList();
    }
  }, [winFactor]);

  const addToBaseArticleList = (addToList) => {
    let prevList = baseArticleList
    prevList.push(...addToList)
    setBaseArticleList(prevList);
  }

  const fetchArticleList = () => {
    setError(null);
    setIsLoading(false);
    fetch(`https://moliereexpressapi.pythonanywhere.com/articles/validated-last-articles/${articlesLoaded}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((fetchedList) => {
        let newList = [];
        for (let i = prevArticlesLoaded; i<fetchedList.length; i++) {
          newList.push(fetchedList[i])
        }
        addToBaseArticleList(newList);
        setPrevArticlesLoaded(articlesLoaded);
      })
      .catch((error) => {
        setError(t("lastarticles_error"));
      });
  };

  const [baseArticleList, setBaseArticleList] = useState([]);
  const [articleList, setArticleList] = useState(baseArticleList);

  const [actualFilter, setActualFilter] = useState(t("lastarticles_title"));

  const [typedSearch, setTypedSearch] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [articlesLoaded, setArticlesLoaded] = useState(9); // number of articles requested and loaded in screen (depends on scroll)
  const [prevArticlesLoaded, setPrevArticlesLoaded] = useState(0);

  useEffect(() => {
    fetchArticleList();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setArticleList(baseArticleList);
    }, 500);
    setIsLoading(false);
  }, [baseArticleList]);

  useEffect(() => {
    if (articleList.length === 0) {
      props.setFooterFixed(true);
    } else {
      props.setFooterFixed(false);
    }
  }, [articleList]);


  const filterArticles = () => {
    if (
      actualFilter === "Titre" ||
      actualFilter === "Title" ||
      actualFilter === "Título"
    ) {
      setArticleList(
        baseArticleList.filter((article) =>
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
        baseArticleList.filter((article) =>
          article.author.toString().includes(typedSearch)
        )
      );
    }
    if (actualFilter === "Date" || actualFilter === "Fecha") {
      setArticleList(
        baseArticleList.filter((article) =>
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
        baseArticleList.filter((article) =>
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
        baseArticleList.filter((article) =>
          article.language.toString().includes(typedSearch)
        )
      );
    }
  };

  return (
    <div>
      <Container className={classes.container}>
        <Helmet>
          <title>Le Molière Express | Read Last Articles</title>
          <meta
            name="description"
            content="Page where you can read our very last articles"
          />
        </Helmet>
        <ArticleFilter
          typedSearch={typedSearch}
          onChangeTyped={setTypedSearch}
          filterArticles={filterArticles}
          actualFilter={actualFilter}
          setActualFilter={setActualFilter}
        />
        <Row>
          {!isLoading &&
            articleList.lenght !== 0 &&
            articleList.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                setTypedSearch={setTypedSearch}
                setActualFilter={setActualFilter}
              />
            ))}
          {!isLoading && articleList.length === 0 && (
            <Container className={classes.not_found__container}>
              <h2 className={classes.not_found__h2}>
                {t("lastarticle_notfound")}
              </h2>
            </Container>
          )}
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
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
