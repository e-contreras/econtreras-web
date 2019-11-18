import React, { Component } from "react";

export default class Product extends Component {

    render() {
        var product = this.props.product;
        if(product == undefined || product == null){ return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{textAlign: "left"}}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.goToProducts.bind(this)} >Productos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ); }
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{textAlign: "left"}}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.goToProducts.bind(this)} >Productos</a>
                            </li>
                            <li className="active">{product.name}</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="product product-details clearfix">
                                <div className="col-md-6">
                                    <div id="product-main-view">
                                        <div className="product-view">
                                            <img src={product.mainImage} alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-body">
                                        <h2 className="product-name">{product.name}</h2>
                                        <h3 className="product-price">{this.showPrice(product)}</h3>
                                        <div>
                                            <div className="product-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                        <p><strong>Disponiblidad:</strong> En Stock</p>
                                        <p><strong>Marca:</strong>{product.brand}</p>
                                        <p></p>
                                        <div className="product-options">
                                            <ul className="size-option">
                                                <li><span className="text-uppercase">Tamaño:</span></li>
                                                <li className="active"><a href="#">S</a></li>
                                                <li><a href="#">XL</a></li>
                                                <li><a href="#">SL</a></li>
                                            </ul>
                                            <ul className="color-option">
                                                <li><span className="text-uppercase">Color:</span></li>
                                                <li className="active"><a href="#" style={{ backgroundColor: '#475984' }} /></li>
                                                <li><a href="#" style={{ backgroundColor: '#8A2454' }} /></li>
                                                <li><a href="#" style={{ backgroundColor: '#BF6989' }} /></li>
                                                <li><a href="#" style={{ backgroundColor: '#9A54D8' }} /></li>
                                            </ul>
                                        </div>
                                        <div className="product-btns">
                                            <div className="qty-input">
                                                <span className="text-uppercase">Cantidad: </span>
                                                <input className="input" type="number" />
                                            </div>
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                            <div className="pull-right">
                                                <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-share-alt" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="product-tab">
                                        <ul className="tab-nav">
                                            <li className="active"><a data-toggle="tab" href="#tab1">Descripción</a></li>
                                            <li><a data-toggle="tab" href="#tab2">Detalles</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab1" className="tab-pane fade in active">
                                                <p>{product.description}</p>
                                            </div>
                                            <div id="tab2" className="tab-pane fade in">
                                                {product.details}
                                            </div>
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

    showPrice(product) {
        var currency = product.currency.symbol;
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.price);
    }

    goToProducts(){
        this.props.history.push("/products");
    }

    goToHome(){
        this.props.history.push("/");
    }

    goToProduct(){
        this.props.history.push("/product");
    }

}
