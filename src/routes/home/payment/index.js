import React, { Component } from "react";
import Order from "../../../components/order";

export default class Payment extends Component {

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
                            <li className="active">Pagos</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Order removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart} history={this.props.history} cart={this.props.cart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    goToProducts() {
        this.props.history.push("/products");
    }

    goToHome() {
        this.props.history.push("/");
    }

}