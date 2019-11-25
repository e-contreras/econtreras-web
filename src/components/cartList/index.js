import React, { Component } from "react";

export default class CartList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        var productsInCart = this.props.cart;
        var productsShow = <div>Carrito vacío</div>;
        var havingElements = false;
        if(productsInCart != undefined && productsInCart.length > 0 ){
            havingElements = true;
            productsShow = productsInCart.map((i)=>(
                <div className="product product-widget">
                    <div className="product-thumb">
                        <img src={atob(i.images[0])} alt />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">
                            {this.showPrice(i)} <span className="qty">x{i.quantity}</span>
                        </h3>
                        <h2 className="product-name">
                            <a href="#">{i.product_name}</a>
                        </h2>
                    </div>
                    <button className="cancel-btn" onClick={(e)=>{this.props.removeFromCart(i)}}>
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
                        <button className="main-btn" onClick={this.showFullCartView.bind(this)}>Ver carrito</button>
                        <button className="primary-btn" onClick={this.showPayment.bind(this)} >COMPRAR <i className="fa fa-arrow-circle-right" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    showPrice(product){
        var currency = "GS";
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices);
    }    

    showFullCartView(){
        this.props.history.push("/cart");
    }

    showPayment(){
        this.props.history.push("/payment");
    }


}