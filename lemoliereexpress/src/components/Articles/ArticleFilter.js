import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "react-bootstrap/Image";

import classes from "./ArticleFilter.module.css";

import react, { useEffect } from "react";

const ArticleFilter = (props) => {
  const onSelectFilterHandler = (selectedFilter) => {
    props.setActualFilter(selectedFilter);
  };

  const onTypeHandler = (event) => {
    props.onChangeTyped(event.target.value.toString());
  };

  useEffect(() => {
    setTimeout(() => {
      props.filterArticles();
    }, 500);
  }, [props.typedSearch]);

  return (
    <Container className={classes.container}>
      <label htmlFor="dropdown-basic-button" className={classes.label}>
        Filtrer par:
      </label>

      <DropdownButton
        id="dropdown-basic-button"
        title={props.actualFilter}
        className={classes.dropdown}
      >
        <Dropdown.Item onClick={() => onSelectFilterHandler("Titre")}>
          Titre
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectFilterHandler("Auteur")}>
          Auteur
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectFilterHandler("Date")}>
          Date
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectFilterHandler("Rubrique")}>
          Rubrique
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectFilterHandler("Langue")}>
          Langue
        </Dropdown.Item>
      </DropdownButton>

      <Container className={classes.searchBar_container}>
        <input
          className={classes.searchBar}
          type="text"
          placeholder="Cherchez..."
          onChange={onTypeHandler}
          value={props.typedSearch}
        />
      </Container>
    </Container>
  );
};

export default ArticleFilter;
