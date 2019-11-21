import React, { Component } from "react";
import Purchase from "../../../components/purchase";

export default class Purchases extends Component {

    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{ textAlign: "left" }}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li className="active">Mis compras</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Purchase history={this.props.history} cart={this.props.cart} />
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