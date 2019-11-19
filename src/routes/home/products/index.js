import React, { Component } from "react";
import ProductCard from "../../../components/productCard";
import axios from "axios";

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        this.getProducts();
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

    getProducts(){
        axios.get("http://localhost:8080/products/store")
        .then(res => {
            console.log(res.data);
            this.setState({ products: res.data });
        })
        .catch(error => {
            console.error(error);
        })
    }

    goToProducts(){ this.props.history.push("/products"); }
    goToHome(){ this.props.history.push("/"); }    

}
