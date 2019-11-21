import React, { Component } from "react";
import ProductCard from "../../../components/productCard";
import axios from "axios";

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false
        }
    }

    componentWillReceiveProps(nextProps){
        this.getProducts();
    }

    componentWillMount() {
        this.getProducts();
    }

    render() {
        var products = this.state.products;
        var productsShow = <></>;
        var havingProducts = false;
        if(products != undefined && products.length > 0){
            havingProducts = true;
            productsShow = products.map((i)=>(
                <ProductCard product={i} history={this.props.history} selectProduct={this.props.selectProduct} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>
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
                                    <div className="pull-right">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div id="store">
                                    <div className="row" hidden={!havingProducts}>
                                        {productsShow}
                                    </div>
                                    <div className="row" hidden={ !(!havingProducts && !this.state.loading) }>
                                        <h3>No hay resultados ... </h3>
                                    </div>
                                    <div className="row" hidden={!this.state.loading}>
                                        <img width="400" height="400" src="./img/loading.gif" />
                                    </div>
                                </div>
                                <div className="store-filter clearfix">
                                    <div className="pull-right">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
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
        this.setState({loading: true});
        axios.get("http://localhost:8080/products/store")
        .then(res => {
            var productos = this.filter(res.data);
            this.setState({ products: productos, loading: false });
        })
        .catch(error => {
            console.error(error);
            this.setState({ loading: false });
        })
    }

    filter(products){
        var category = this.props.categorySelected;
        var searchField = this.props.searchField;
        console.log(products, category, searchField);
        if(category != undefined && category != 0 && category != -1) {
            products = products.filter(item => item.category_id == category);
        }
        if(searchField != undefined && searchField.trim().length > 0) {
            products = products.filter(item => item.product_name.search(searchField) != -1);
        }
        console.log(products);
        return products;
    }

    goToProducts(){ this.props.history.push("/products"); }
    goToHome(){ this.props.history.push("/"); }    

}
