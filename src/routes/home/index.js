import React, { Component } from "react";
import Header from "../../template/Header";
import NavMenu from "../../template/NavMenu";
import BreadCrumb from "../../template/BreadCrumb";
import Content from "../../components/content";
import Footer from "../../template/Footer";

export default class Home extends Component {

    render() {

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

}