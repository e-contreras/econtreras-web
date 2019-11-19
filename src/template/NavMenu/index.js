import React, { Component } from "react";

export default class NavMenu extends Component {
    render() {
        return (
            <div>
                <div id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <div className="menu-nav">
                                <span className="menu-header">Menu<i className="fa fa-bars" /></span>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#" onClick={this.goToHome.bind(this)}>INICIO</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={this.goToAbout.bind(this)}>LA TIENDA</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={this.goToPromotions.bind(this)}>PROMOCIONES</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={this.goToProducts.bind(this)}>PRODUCTOS</a>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    goToProducts(){
        this.props.history.push("/products");
    }

    goToHome(){
        this.props.history.push("/");
    }

    goToAbout(){
        this.props.history.push("/about");
    }

    goToPromotions(){
        this.props.history.push("/promotions");
    }

}
