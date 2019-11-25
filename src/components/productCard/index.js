import React, { Component } from "react";
import {decode as atob, encode as btoa} from 'base-64'

export default class ProductCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var product = this.props.product;
        if (product == undefined || product == null) {
            return <></>;
        }

        var calification = (
            <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o empty" />
            </div>
        );


        var productBtoa = product.images[0] === undefined ? '' : product.images[0] ;
        productBtoa = atob(productBtoa);
        
        return (
            <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="product product-single">
                    <div className="product-thumb">
                        <button className="main-btn quick-view" onClick={(e)=>{this.getDetail(product)}}><i className="fa fa-search-plus" />VER</button>
                        <img src={productBtoa} alt={product.product_name} />
                        {/* <img src={"data:image/jpeg;base64," + btoa(product.images[0])} alt={product.product_name} /> */}
                    </div>
                    <div className="product-body">
                        {calification}                    
                        <h3 className="product-Precio">{this.showPrice(product)}</h3>
                        <h2 className="product-name"><a href="#">{product.product_name}</a></h2>
                        <div className="product-btns">
                            <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                            <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                            <button className="primary-btn add-to-cart" onClick={(e)=>{this.handleAddToCart(product)}}><i className="fa fa-shopping-cart" /> Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showPrice(product) {
        var currency = "GS"
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices);
    }

    handleAddToCart(product){
        var cartItem = {
            available: product.available,
            description: product.description,
            id: product.id,
            images: product.images,
            product_name: product.product_name,
            purchase_prices: product.purchase_prices,
            sale_prices: product.sale_prices,
            quantity: 1
        }
        this.props.addToCart(cartItem);
    }

    getDetail(product){
        this.props.selectProduct(product);
        this.props.history.push("/product");
    }

}