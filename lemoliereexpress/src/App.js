import logo from "./logo.svg";
import "./App.css";

import react, {useState} from "react";

import ReactDOM from "react-dom";

import CustomNavbar from "./components/UI/NavBar/CustomNavbar";

import Home from "./components/Pages/Home/Home";
import ReadLastArticles from "./components/Pages/ReadLastArticles/ReadLastArticles";
import ReadEditions from "./components/Pages/ReadEditions/ReadEditions";
import AboutUs from './components/Pages/AboutUs/AboutUs';

import Footer from "./components/UI/Footer/Footer";

function App() {
  const [footerFixed, setFooterFixed] = useState(false);
  return (
    <div style={{minHeigth: "100%"}}>
      {ReactDOM.createPortal(
        <CustomNavbar />,
        document.getElementById("navbar")
      )}
      {/* <Home setFooterFixed={setFooterFixed}/> */}
      <AboutUs />
      {/* <ReadLastArticles setFooterFixed={setFooterFixed}/> */}
      {/* <ReadEditions /> */}
      {ReactDOM.createPortal(
        <Footer className="footer" fixed={footerFixed}/>,
        document.getElementById("footer")
      )}
    </div>
  );
}

export default App;
