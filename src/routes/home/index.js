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
        //this.mockKart();        
    }

    render() {
        return (
            <div>
                <Header kart={this.state.kart} history={this.props.history} removeFromKart={this.removeFromKart.bind(this)}/>
                <NavMenu />
                <BreadCrumb />
                <Content kart={this.state.kart} addToKart={this.addToKart.bind(this)} removeFromKart={this.removeFromKart.bind(this)}/>
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

    addToKart(product){
        var kart = this.state.kart;
        if(kart.length > 0){
            for(var i = 0; i < kart.length; i++){
                if(product.id == kart[i].id){
                    // el producto ya esta en el carrito
                    return;
                }
            }
        }
        kart.push(product);
        this.setState({kart: kart});
    }

    deleteFromWorks(work){
        var trabajos = this.state.trabajos;
        trabajos = trabajos.filter(item => item !== work);
        this.setState({trabajos: trabajos});

    }        

    removeFromKart(product){
        var kart = this.state.kart;
        kart = kart.filter(item => item !== product);
        this.setState({kart: kart});
    }

}