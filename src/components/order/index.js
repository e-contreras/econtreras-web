import React, { Component } from "react";

export default class Order extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var productsInKart = this.props.kart;
        var order = <div>Carrito vacío</div>;
        var havingElements = false;
        if (productsInKart != undefined && productsInKart.length > 0) {
            havingElements = true;
            order = productsInKart.map((i) => (
                <tr>
                    <td className="thumb"><img src={i.image} alt={i.name} /></td>
                    <td className="details">
                        <a href="#">{i.name}</a>
                        <ul>
                            <li><span>Size: XL</span></li>
                            <li><span>Color: Camelot</span></li>
                        </ul>
                    </td>
                    <td className="price text-center">
                        <strong>{this.showPrice(i)}</strong><br />
                    </td>
                    <td className="qty text-center">
                        <input className="input" type="number" defaultValue={i.quantity} />
                    </td>
                    <td className="total text-center">
                        <strong className="primary-color">{this.showSum(i)}</strong>
                    </td>
                    <td className="text-right">
                        <button className="main-btn icon-btn">
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
                            <th colSpan={2} className="sub-total">{this.sumTotal(productsInKart)}</th>
                        </tr>
                        <tr>
                            <th className="empty" colSpan={3} />
                            <th>SHIPING</th>
                            <td colSpan={2}>Free Shipping</td>
                        </tr>
                        <tr>
                            <th className="empty" colSpan={3} />
                            <th>TOTAL</th>
                            <th colSpan={2} className="total">{this.sumTotalPlusShipping(productsInKart)}</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="pull-right">
                    <button className="primary-btn">Realizar pedido</button>
                </div>
            </div>
        );
    }

    sumTotal(kart){
        var sum = 0;
        var currency = "GS";
        for(var i = 0; i < kart.length; i++){
            currency = kart[i].currency.symbol;
            sum = parseInt( (kart[i].price * kart[i].quantity) + sum);
        }
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);
    }

    sumTotalPlusShipping(kart){
        var sum = 0;
        var shipping = 0;
        var currency = "GS";
        for(var i = 0; i < kart.length; i++){
            currency = kart[i].currency.symbol;
            sum = parseInt( (kart[i].price * kart[i].quantity) + sum);
        }
        sum = parseInt(sum + shipping);
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);        
    }    

    showPrice(product) {
        var currency = product.currency.symbol;
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.price);
    }

    showSum(product){
        var currency = product.currency.symbol;
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.price * product.quantity);        
    }

    showFullKartView() {
        this.props.history.push("/kart");
    }

    showPayment() {
        this.props.history.push("/payment");
    }

}