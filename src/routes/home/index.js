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
            searchField: undefined,
            productSelected: undefined
        }
    }

    render() {
        return (
            <div>
                <Header kart={this.state.kart} history={this.props.history} removeFromKart={this.removeFromKart.bind(this)}/>
                <NavMenu history={this.props.history}/>
                <Content
                    kart={this.state.kart} addToKart={this.addToKart.bind(this)}
                    removeFromKart={this.removeFromKart.bind(this)}
                    product={this.state.productSelected} selectProduct={this.selectProduct.bind(this)}
                />
                <Footer />
            </div>
        );

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

    selectProduct(product){
        this.setState({ productSelected: product });
    }

}