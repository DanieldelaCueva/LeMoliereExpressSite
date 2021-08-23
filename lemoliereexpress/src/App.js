import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import CustomNavbar from "./components/UI/NavBar/CustomNavbar";

import Footer from "./components/UI/Footer/Footer";

import Home from "./components/Pages/Home/Home";
import ReadLastArticles from "./components/Pages/ReadLastArticles/ReadLastArticles";
import ReadEditions from "./components/Pages/ReadEditions/ReadEditions";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import NotFound404 from "./components/Pages/NotFound404/NotFound404";
import { Helmet } from "react-helmet";

function App() {
  const [footerFixed, setFooterFixed] = useState(false);
  return (
    <div style={{ height: "inherit" }}>
      {ReactDOM.createPortal(
        <CustomNavbar />,
        document.getElementById("navbar")
      )}
      <Helmet>
        <title>Le Molière Express</title>
        <meta name="description" content="Le Molière Express's website" />
      </Helmet>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home setFooterFixed={setFooterFixed} />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/read-last-articles">
          <ReadLastArticles
            setFooterFixed={setFooterFixed}
            footerFixed={footerFixed}
          />
        </Route>
        <Route path="/read-editions">
          <ReadEditions setFooterFixed={setFooterFixed} />
        </Route>
        <Route path="/404">
          <NotFound404 setFooterFixed={setFooterFixed} />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      {ReactDOM.createPortal(
        <Footer className="footer" fixed={footerFixed} />,
        document.getElementById("footer")
      )}
    </div>
  );
}

export default App;
