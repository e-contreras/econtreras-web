import React, { Component } from "react";

export default class KartList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        var productsInKart = this.props.kart;
        var productsShow = <div>Carrito vacío</div>;
        var havingElements = false;
        if(productsInKart != undefined && productsInKart.length > 0 ){
            havingElements = true;
            productsShow = productsInKart.map((i)=>(
                <div className="product product-widget">
                    <div className="product-thumb">
                        <img src={i.image} alt />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">
                            {this.showPrice(i)} <span className="qty">x{i.quantity}</span>
                        </h3>
                        <h2 className="product-name">
                            <a href="#">{i.name}</a>
                        </h2>
                    </div>
                    <button className="cancel-btn" onClick={(e)=>{this.props.removeFromKart(i)}}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            ));
        }
        return (
            <div className="custom-menu">
                <div id="shopping-cart">
                    <div className="shopping-cart-list">
                        {productsShow}
                    </div>
                    <div className="shopping-cart-btns" hidden={!havingElements}>
                        <button className="main-btn" onClick={this.showFullKartView.bind(this)}>Ver carrito</button>
                        <button className="primary-btn" onClick={this.showPayment.bind(this)} >COMPRAR <i className="fa fa-arrow-circle-right" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    showPrice(product){
        var currency = product.currency.symbol;
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.price);
    }    

    showFullKartView(){
        this.props.history.push("/kart");
    }

    showPayment(){
        this.props.history.push("/payment");
    }

}