import React, { Component } from "react";
import Order from "../../../components/order";

export default class PayMethod extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
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
                                                                <td>
                                                                    <label>Cuenta a debitar</label>
                                                                </td>
                                                                <td>
                                                                    <label>Cuenta a acreditar</label>
                                                                </td>
                                                                <td>
                                                                    <label>Entidad financiera</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de cuenta" />
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de cuenta"/>
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione la entidad financiera"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>                                                                                                                                
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label>Moneda</label>
                                                                </td>
                                                                <td>
                                                                    <label>Tipo de documento</label>
                                                                </td>
                                                                <td>
                                                                    <label>Número de documento</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione la moneda"/>
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Seleccione el tipo de documento"/>
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Número de documento"/>
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
                                                <div style={{ padding: "20px" }}>
                                                    <table style={{ width: "100%" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label>Número de tarjeta de crédito</label>
                                                                </td>
                                                                <td>
                                                                    <label>Nombre en la tarjeta de crédito</label>
                                                                </td>
                                                                <td>
                                                                    <label>Fecha de expiración</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "50px" }} placeholder="0000"/>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "50px" }} placeholder="0000"/>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "50px" }} placeholder="0000"/>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "50px" }} placeholder="0000"/>
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "95%" }} type="text" placeholder="Nombre del propietario"/>
                                                                </td>
                                                                <td>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "40%", textAlign: "right" }} type="number" maxLength="4" max="12" defaultValue="1" />
                                                                    <span> / </span>
                                                                    <input style={{ border: "1px solid silver", padding: "5px", width: "40%" }} type="number" maxLength="4" defaultValue="2019" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <button className="primary-btn">CONFIRMAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    goToProducts() { this.props.history.push("/products"); }
    goToHome() { this.props.history.push("/"); }
    goToPayments() { this.props.history.push("/payment"); }

}