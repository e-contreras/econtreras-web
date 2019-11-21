import React, { Component } from "react";
import axios from "axios";
import Notifications, { notify } from 'react-notify-toast';

export default class PayMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardSelected: undefined
        }
    }
    
    componentWillMount() {
        this.getCardsByClient();
    }

    render() {

        var cards = this.state.cards;
        var user = this.props.user;
        var cardShow = <></>;
        var havingCards = false;

        if (user == null || user == undefined || !user) {
            this.props.history.push("/");
            return <></>;
        }

        if (cards != null && cards != undefined && cards.length > 0) {
            havingCards = true;
            var currentStyle = { background: "white", padding: "10px", marginBottom: "10px", border: "2px solid #f8694a", cursor: "pointer", textAlign: "left" };
            var normalStyle = { background: "#eff3f6", padding: "10px", marginBottom: "10px", cursor: "pointer", textAlign: "left" };
            var selected = this.state.cardSelected;
            cardShow = cards.map((i) => (
                <li style={selected.id == i.id ? currentStyle : normalStyle} onClick={(e) => { this.setState({ cardSelected: i }) }}>
                    <p><strong style={{ color: "#f8694a" }}>{i.nombre}</strong></p>
                    <p>{this.showCensoredCard(i.numero)}</p>
                </li>
            ));
        }

        return (
            <div>
                <Notifications />
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{ textAlign: "left" }}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.goToProducts.bind(this)} >Productos</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.goToPayments.bind(this)} >Pedido</a>
                            </li>
                            <li className="active">Forma de pago</li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="payments-methods">
                                        <div className="section-title">
                                            <h4 className="title">Formas de pago</h4>
                                        </div>
                                        <div className="input-checkbox" style={{ textAlign: "left" }}>
                                            <input type="radio" name="payments" id="payments-1" defaultChecked />&nbsp;&nbsp;
                                            <label htmlFor="payments-1">TRANSFERENCIA BANCARIA</label>
                                            <div className="caption">
                                                <div style={{ padding: "20px" }}>
                                                    <table style={{ width: "100%" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Cuenta a debitar</label>
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Cuenta a acreditar</label>
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Entidad financiera</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de cuenta" />
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de cuenta" />
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione la entidad financiera" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Moneda</label>
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Tipo de documento</label>
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <label>Número de documento</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione la moneda" />
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione el tipo de documento" />
                                                                </td>
                                                                <td style={{ width: "33%" }}>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de documento" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-checkbox" style={{ textAlign: "left", marginTop: "20px" }}>
                                            <input type="radio" name="payments" id="payments-2" />&nbsp;&nbsp;
                                            <label htmlFor="payments-2">TARJETA DE CRÉDITO</label>
                                            <div className="caption">
                                                <div className="col-md-12" style={{ padding: "20px" }}>
                                                    <section>
                                                        <ul>
                                                            {cardShow}
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <button className="primary-btn" onClick={this.confirmPurchase.bind(this)}>CONFIRMAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    convert(cart) {
        var newCart = [];
        if (cart != undefined && cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                var n = {
                    cartId: cart[i].id,
                    price: cart[i].sale_prices,
                    productId: cart[i].id,
                    purchasePrice: cart[i].sale_prices,
                    quantity: parseInt(cart[i].quantity)
                };
                newCart.push(n);
            }
        }
        return newCart;
    }

    confirmPurchase() {
        var cart = this.props.cart;
        cart = this.convert(cart);
        var obj = {
            cartProductBeanList: cart,
            status: "CONFIRMADO"
        };
        console.log(obj);
        axios.post("http://localhost:8080/carts", obj)
            .then(res => {
                notify.show("Se ha realizado el pedido correctamente", "success");
            })
            .catch(error => {
                notify.show("Ha ocurrido un error al procesar el pedido", "error");
                console.error(error);
            })
    }

    getCardsByClient() {
        var user = this.props.user;
        if (user != null && user != undefined && user) {
            this.setState({ loading: true });
            axios.get("http://localhost:8080/card/" + user.id)
                .then(res => {
                    console.log(res.data);
                    if(res.data.length > 0){
                        this.setState({ cards: res.data, cardSelected: res.data[0], loading: false });
                    }
                    else{
                        this.setState({ cards: res.data, loading: false });
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.setState({ cards: [], cardSelected: undefined, loading: false });
                })
        }
        else {
            this.props.history.push("/");
        }
    }    

    showCensoredCard(number){
        return "•••• •••• •••• " + number.substring(12, 16);
    }    

    goToProducts() { this.props.history.push("/products"); }
    goToHome() { this.props.history.push("/"); }
    goToPayments() { this.props.history.push("/payment"); }

}