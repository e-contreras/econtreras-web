import React, { Component } from "react";
import Order from "../../../components/order";

export default class Payment extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <form id="checkout-form" className="clearfix">
                                <div className="col-md-6">
                                    <div className="billing-details">
                                        <p>Ya eres un cliente ? <a href="#">Inicie sesión</a></p>
                                        <div className="section-title">
                                            <h3 className="title">Detalles de facturación</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="first-name" placeholder="Nombre" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="last-name" placeholder="Apellido" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Dirección" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="city" placeholder="Ciudad" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="country" placeholder="País" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="tel" name="tel" placeholder="Teléfono" />
                                        </div>
                                        <div className="form-group">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="register" />
                                                <label className="font-weak" htmlFor="register">Crear una cuenta ?</label>
                                                <div className="caption">
                                                        <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="shiping-methods">
                                        <div className="section-title">
                                            <h4 className="title">Métodos de envío</h4>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="shipping" id="shipping-1" defaultChecked />
                                            <label htmlFor="shipping-1">Envío gratis -  $0.00</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="shipping" id="shipping-2" />
                                            <label htmlFor="shipping-2">Estándar - $4.00</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payments-methods">
                                        <div className="section-title">
                                            <h4 className="title">Formas de pago</h4>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-1" defaultChecked />
                                            <label htmlFor="payments-1">Transferencia bancaria</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-2" />
                                            <label htmlFor="payments-2">Tarjeta de crédito</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-3" />
                                            <label htmlFor="payments-3">Paypal</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p><p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Order paymentMethod={undefined} shippingType={undefined} kart={this.props.kart}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}