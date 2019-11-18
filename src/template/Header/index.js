import React, { Component } from "react";
import KartList from "../../components/kartList";

export default class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <div id="top-header">
                        <div className="container">
                            <div className="pull-left">
                                <span>Bienvenido a E-Contreras!</span>
                            </div>
                            <div className="pull-right">
                                <ul className="header-top-links">
                                    <li>
                                        <a href="#">Admin</a>
                                    </li>
                                    <li>
                                        <a href="#">Nosotros</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
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
                                            <option value={1}>Category 01</option>
                                            <option value={1}>Category 02</option>
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
                                        <a href="#" className="text-uppercase">Login</a>{" "}/{" "}
                                        <a href="#" className="text-uppercase">Join</a>
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
                                                <a href="#">
                                                    <i className="fa fa-unlock-alt" /> Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user-plus" /> Crear una cuenta
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-cart dropdown default-dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="qty">{this.quantityProductsInKart()}</span>
                                            </div>
                                            <strong className="text-uppercase">MI CARRITO</strong>
                                            <br />
                                            <span>{this.sumProductsInKart()}</span>
                                        </a>
                                        <KartList kart={this.props.kart} history={this.props.history}/>
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

    quantityProductsInKart(){
        var kart = this.props.kart;
        return kart.length;
    }

    sumProductsInKart(){
        var kart = this.props.kart;
        var sum = 0;
        var currency = "GS";
        for(var i = 0; i < kart.length; i++){
            currency = kart[i].currency.symbol;
            sum = parseInt( (kart[i].price * kart[i].quantity) + sum);
        }
        return currency + " " + new Intl.NumberFormat("de-DE").format(sum);
    }

}
