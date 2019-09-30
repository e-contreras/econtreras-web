import React from "react";
import "./App.css";
import Header from "./Component/Header";
import NavMenu from "./Component/NavMenu";
import BreadCrumb from "./Component/BreadCrumb";
import Content from "./Component/Content";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <BreadCrumb />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
