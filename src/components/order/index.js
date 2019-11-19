import React, { Component } from "react";

export default class Order extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var productsInCart = this.props.cart;
        var order = <></>;
        var havingElements = false;
        if (productsInCart != undefined && productsInCart.length > 0) {
            havingElements = true;
            order = productsInCart.map((i) => (
                <tr>
                    <td className="thumb">
                        <img src={"data:image/jpeg;base64," + i.images[0]} alt={i.product_name} />
                    </td>
                    <td className="details">
                        <a href="#">{i.product_name}</a>
                        <ul>
                            <li><span>Size: XL</span></li>
                            <li><span>Color: Camelot</span></li>
                        </ul>
                    </td>
                    <td className="price text-center">
                        <strong>{this.showPrice(i)}</strong><br />
                    </td>
                    <td className="qty text-center">
                        <input className="input" type="number" defaultValue={i.quantity} onChange={(e)=>{this.changeQuantity(i, e)}}/>
                    </td>
                    <td className="total text-center">
                        <strong className="primary-color">{this.showSum(i)}</strong>
                    </td>
                    <td className="text-right">
                        <button className="main-btn icon-btn" onClick={(e)=>{this.props.removeFromCart(i)}}>
                            <i className="fa fa-close" />
                        </button>
                    </td>
                </tr>
            ));
        }

        return (
            <div className="order-summary clearfix">
                <div className="section-title">
                    <h3 className="title">Revisión del pedido</h3>
                </div>
                <table className="shopping-cart-table table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th />
                            <th className="text-center">Precio</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-center">Total</th>
                            <th className="text-right" />
                        </tr>
                    </thead>
                    <tbody>
                        {order}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="empty" colSpan={3} />
                            <th>SUBTOTAL</th>
                            <th colSpan={2} className="sub-total">{this.sumTotal(productsInCart)}</th>
                        </tr>
                        <tr>
                            <th className="empty" colSpan={3} />
                            <th>TOTAL</th>
                            <th colSpan={2} className="total">{this.sumTotalPlusShipping(productsInCart)}</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="pull-right">
                    <button className="primary-btn" onClick={this.goToPayMethod.bind(this)}>Realizar pedido</button>
                </div>
            </div>
        );
    }

    changeQuantity(product, e){
        product.quantity = e.target.value;
        this.props.addToCart(product);
    }    

    sumTotal(cart){
        var sum = 0;
        var currency = "GS";
        for(var i = 0; i < cart.length; i++){
            currency = "GS";
            sum = parseInt( (cart[i].sale_prices * cart[i].quantity) + sum);
        }
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);
    }

    sumTotalPlusShipping(cart){
        var sum = 0;
        var shipping = 0;
        var currency = "GS";
        for(var i = 0; i < cart.length; i++){
            currency = "GS";
            sum = parseInt( (cart[i].sale_prices * cart[i].quantity) + sum);
        }
        sum = parseInt(sum + shipping);
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);        
    }    

    showPrice(product) {
        var currency = "GS";
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices);
    }

    showSum(product){
        var currency = "GS";
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices * product.quantity);        
    }

    showFullCartView() {
        this.props.history.push("/cart");
    }

    showPayment() {
        this.props.history.push("/payment");
    }

    goToPayMethod(){
        this.props.history.push("/paymethod");
    }

}