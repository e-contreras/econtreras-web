import React, { Component } from "react";
import Header from "../../template/Header";
import NavMenu from "../../template/NavMenu";
import BreadCrumb from "../../template/BreadCrumb";
import Content from "../../components/content";
import Footer from "../../template/Footer";

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            kart: [],
            categories: [],
            searchField: undefined
        }
    }

    componentWillMount(){
        this.mockKart();        
    }

    render() {
        return (
            <div>
                <Header kart={this.state.kart} history={this.props.history}/>
                <NavMenu />
                <BreadCrumb />
                <Content kart={this.state.kart}/>
                <Footer />
            </div>
        );

    }

    mockKart(){
        var productsInKart = [
            {
                name: "Celular iPhone X 256 GB",
                price: 500,
                currency: {
                    type: "USD",
                    symbol: "$"
                },
                image: "./img/main-product01.jpg",
                quantity: 3

            },
            {
                name: "Celular iPhone X 256 GB",
                price: 500,
                currency: {
                    type: "USD",
                    symbol: "$"
                },                
                image: "./img/main-product01.jpg",                
                quantity: 3
            }
        ];
        this.setState({ kart: productsInKart });
    }

}