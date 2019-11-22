import React, { Component } from "react";

export default class NavMenu extends Component {
    
    render() {
        var current = this.props.location.pathname;
        var user = this.props.user;
        var havingSession = (user != null && user != undefined && user);
        return (
            <div>
                <div id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <div className="menu-nav">
                                <span className="menu-header">Menu<i className="fa fa-bars" /></span>
                                <ul className="menu-list">
                                    <li><a href="#" style={current == "/" ? {color: "#F8694A"} : {}} onClick={this.goToHome.bind(this)}>INICIO</a></li>
                                    <li><a href="#" style={current == "/about" ? {color: "#F8694A"} : {}} onClick={this.goToAbout.bind(this)}>LA TIENDA</a></li>
                                    <li><a href="#" style={current == "/promotions" ? {color: "#F8694A"} : {}} onClick={this.goToPromotions.bind(this)}>PROMOCIONES</a></li>
                                    <li><a href="#" style={current == "/products" ? {color: "#F8694A"} : {}} onClick={this.goToProducts.bind(this)}>PRODUCTOS</a></li>
                                    <li style={havingSession ? {} : {display: "none"}}><a href="#"  style={current == "/purchases" ? {color: "#F8694A"} : {}} onClick={this.goToPurchases.bind(this)}>MIS COMPRAS</a></li>
                                    <li style={havingSession ? {} : {display: "none"}}><a href="#" style={current == "/cards" ? {color: "#F8694A"} : {}} onClick={this.goToCards.bind(this)}>MIS MEDIOS DE PAGO</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    goToCards(){ this.props.history.push("/cards") };
    goToPurchases(){ this.props.history.push("/purchases") };    
    goToProducts(){ this.props.history.push("/products"); }
    goToHome(){ this.props.history.push("/"); }
    goToAbout(){ this.props.history.push("/about"); }
    goToPromotions(){ this.props.history.push("/promotions"); }

}
