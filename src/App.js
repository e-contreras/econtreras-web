import React from "react";
import Header from "./template/Header";
import NavMenu from "./template/NavMenu";
import BreadCrumb from "./template/BreadCrumb";
import Content from "./template/Content";
import Footer from "./template/Footer";
import "./App.css";

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
