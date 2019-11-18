import React, { Component } from "react";
import ProductCard from "../../../components/productCard";

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        this.mockProducts();
    }

    render() {

        console.log(this.props);

        var products = this.state.products;
        var productsShow = <></>;
        var havingProducts = false;
        if(products != undefined && products.length > 0){
            havingProducts = true;
            productsShow = products.map((i)=>(
                <ProductCard product={i} history={this.props.history} selectProduct={this.props.selectProduct} addToKart={this.props.addToKart} removeFromKart={this.props.removeFromKart}/>
            ));
        }

        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{textAlign: "left"}}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li className="active">Productos</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div id="main" className="col-md-12">
                                <div className="store-filter clearfix">
                                    <div className="pull-left">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="page-filter">
                                            <select className="input">
                                                <option value={0}>10</option>
                                                <option value={1}>20</option>
                                                <option value={2}>30</option>
                                            </select>
                                        </div>
                                        <ul className="store-pages">
                                            <li><span className="text-uppercase">Página:</span></li>
                                            <li className="active">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="store">
                                    <div className="row">
                                        {productsShow}
                                    </div>
                                </div>
                                <div className="store-filter clearfix">
                                    <div className="pull-left">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="page-filter">
                                            <select className="input">
                                                <option value={0}>10</option>
                                                <option value={1}>20</option>
                                                <option value={2}>30</option>
                                            </select>
                                        </div>
                                        <ul className="store-pages">
                                            <li><span className="text-uppercase">PÁGINA:</span></li>
                                            <li className="active">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    mockProducts() {
        
        var products = [
            {
                id: 1,
                name: "Cartera modelo 9201 Chenson",
                price: 150000,
                currency: {
                    type: "PY",
                    symbol: "GS"
                },
                image: "./img/product01.jpg",
                stock: 10,
                new: true,
                haveDiscount: true,
                discount: -20,
                calification: 5,
                mainImage: "./img/main-product01.jpg",
                brand: "Chenson",
                description: "Cartera ampliamente cómoda",
                details: "20x20cm diseño xforce"
            },
            {
                id: 2,
                name: "Billetera Kavara",
                price: 100000,
                currency: {
                    type: "PY",
                    symbol: "GS"
                },
                image: "./img/product03.jpg",
                stock: 15,
                new: true,
                haveDiscount: true,
                discount: -20,
                calification: 5,
                mainImage: "./img/main-product03.jpg",
                brand: "Kavara",
                description: "Cartera ampliamente cómoda",
                details: "20x20cm diseño xforce"                
            },
            {
                id: 3,
                name: "Reloj Q&Q 2991 xtreme",
                price: 133000,
                currency: {
                    type: "PY",
                    symbol: "GS"
                },
                image: "./img/product02.jpg",
                stock: 15,
                new: false,
                haveDiscount: false,
                discount: undefined,
                calification: 5,
                mainImage: "./img/main-product02.jpg",
                brand: "Q&Q",
                description: "Cartera ampliamente cómoda",
                details: "20x20cm diseño xforce"                
            }
        ];
        this.setState({ products: products });
    }

    goToProducts(){
        this.props.history.push("/products");
    }

    goToHome(){
        this.props.history.push("/");
    }    

}
