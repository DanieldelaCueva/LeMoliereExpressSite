import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import CustomNavbar from "./components/UI/NavBar/CustomNavbar";

import Footer from "./components/UI/Footer/Footer";

const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const ReadLastArticles = React.lazy(() => import("./components/Pages/ReadLastArticles/ReadLastArticles"));
const ReadEditions = React.lazy(() => import("./components/Pages/ReadEditions/ReadEditions"));
const AboutUs = React.lazy(() => import("./components/Pages/AboutUs/AboutUs"));
const NotFound404 = React.lazy(() => import("./components/Pages/NotFound404/NotFound404"));

function App() {
  const [footerFixed, setFooterFixed] = useState(false);
  return (
    <div style={{ height: "inherit" }}>
      {ReactDOM.createPortal(
        <CustomNavbar />,
        document.getElementById("navbar")
      )}
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
