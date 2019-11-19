import React, { Component } from "react";
import CartList from "../../components/cartList";

export default class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {

        var categories = this.props.categories;
        var categoriesShow = <option key="-1" value="-1">No hay categorías</option>;
        if(categories != undefined && categories.length > 0){
            categoriesShow = categories.map( (i) => (
                <option value={i.id} key={i.id}>{i.description}</option>
            ));
        }

        return (
            <div>
                <header>
                    <div id="top-header">
                        <div className="container">
                            <div className="pull-left">
                                <span><strong>Bienvenido a E-Contreras!</strong></span>
                            </div>
                            <div className="pull-right">
                                <ul className="header-top-links">
                                    <li><a href="#"><strong>Admin</strong></a></li>
                                    <li>
                                        <a href="#"><strong>Nosotros</strong></a>
                                    </li>
                                    <li>
                                        <a href="#"><strong>FAQ</strong></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="header">
                        <div className="container">
                            <div className="pull-left">
                                <div className="header-logo">
                                    <a className="logo" href="#" style={{ fontSize: "36pt !important", fontWeight: "bold" }}>
                                        <span style={{ color: "#F0684A" }}>E</span>
                                        <span>-CONTRERAS</span>
                                    </a>
                                </div>
                                <div className="header-search">
                                    <form>
                                        <input className="input search-input" type="text" placeholder="Estoy buscando..." />
                                        <select className="input search-categories">
                                            <option value={0}>Todas las categorías</option>
                                            {categoriesShow}
                                        </select>
                                        <button className="search-btn">
                                            <i className="fa fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="pull-right">
                                <ul className="header-btns">
                                    <li className="header-account dropdown default-dropdown">
                                        <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-user-o" />
                                            </div>
                                            <strong className="text-uppercase">
                                                Mi cuenta <i className="fa fa-caret-down" />
                                            </strong>
                                        </div>
                                        <a href="#" className="text-uppercase" onClick={this.props.showLogin} >Login</a>{" "}/{" "}
                                        <a href="#" className="text-uppercase" onClick={this.props.showRegister}>Join</a>
                                        <ul className="custom-menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user-o" /> Mi cuenta
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart-o" /> Mi lista de deseos
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-check" /> Checkout
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={this.props.showLogin}>
                                                    <i className="fa fa-unlock-alt" /> Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={this.props.showRegister}>
                                                    <i className="fa fa-user-plus" /> Crear una cuenta
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-cart dropdown default-dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="qty">{this.quantityProductsInCart()}</span>
                                            </div>
                                            <strong className="text-uppercase">MI CARRITO</strong>
                                            <br />
                                            <span>{this.sumProductsInCart()}</span>
                                        </a>
                                        <CartList cart={this.props.cart} history={this.props.history} removeFromCart={this.props.removeFromCart}/>
                                    </li>
                                    <li className="nav-toggle">
                                        <button className="nav-toggle-btn main-btn icon-btn">
                                            <i className="fa fa-bars" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

    quantityProductsInCart(){
        var cart = this.props.cart;
        return cart.length;
    }

    sumProductsInCart(){
        var cart = this.props.cart;
        var sum = 0;
        var currency = "GS";
        for(var i = 0; i < cart.length; i++){
            currency = "GS";
            sum = parseInt( (cart[i].sale_prices * cart[i].quantity) + sum);
        }
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);
    }

}
