import logo from "./logo.svg";
import "./App.css";

import CustomNavbar from "./components/UI/CustomNavbar";

import ReadLastArticles from "./components/ReadLastArticles/ReadLastArticles";

import Footer from "./components/UI/Footer";

function App() {
  return (
    <div>
      <CustomNavbar />
      <ReadLastArticles/>
      <Footer />
    </div>
  );
}

export default App;
