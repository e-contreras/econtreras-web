import React, { Component } from "react";

export default class Purchase extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var purchase = this.props.purchase;
        console.log(purchase);        
        var order = <></>;
        var products = purchase.productBeanList;
        if (products != undefined && products.length > 0) {
            order = products.map((i) => (
                <tr>
                    <td className="thumb">
                        <img src={atob(i.images[0])} alt={i.product_name} />
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
                        <input className="input" type="number" disabled defaultValue={i.quantity}/>
                    </td>
                    <td className="total text-center">
                        <strong className="primary-color">{this.showSum(i)}</strong>
                    </td>
                </tr>
            ));
        }

        return (
            <div className="order-summary clearfix">
                <div className="section-title">
                    <h3 className="title">PEDIDO</h3>
                </div>
                <table className="shopping-cart-table table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th />
                            <th className="text-center">Precio</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="empty" colSpan={3} />
                            <th>TOTAL</th>
                            <th colSpan={2} className="total">{this.sumTotal(products)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
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

    showPrice(product) {
        var currency = "GS";
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices);
    }

    showSum(product){
        var currency = "GS";
        return currency + " " + new Intl.NumberFormat("de-DE").format(product.sale_prices * product.quantity);        
    }

}