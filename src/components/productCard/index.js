import React, { Component } from "react";

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

        return (
            <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="product product-single">
                    <div className="product-thumb">
                        <button className="main-btn quick-view" onClick={(e)=>{this.getDetail(product)}}><i className="fa fa-search-plus" />VER</button>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-body">
                        {calification}                    
                        <h3 className="product-Precio">{this.showPrice(product)}</h3>
                        <h2 className="product-name"><a href="#">{product.name}</a></h2>
                        <div className="product-btns">
                            <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                            <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                            <button className="primary-btn add-to-cart" onClick={(e)=>{this.handleAddToKart(product)}}><i className="fa fa-shopping-cart" /> Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showPrice(product) {
        var currency = product.currency.symbol;
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.price);
    }

    handleAddToKart(product){
        var kartItem = {
            id: product.id,
            name: product.name,
            currency: product.currency,
            price: product.price,
            haveDiscount: product.haveDiscount,
            discount: product.discount,
            quantity: 1,
            stock: product.stock,
            image: product.image
        }
        this.props.addToKart(kartItem);
    }

    getDetail(product){
        this.props.selectProduct(product);
        this.props.history.push("/product");
    }

}