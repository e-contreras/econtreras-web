import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../../routes/home/cart';
import Cards from "../../routes/home/cards";
import Payment from '../../routes/home/payment';
import Products from '../../routes/home/products';
import Promotions from "../../routes/home/promotions";
import About from "../../routes/home/about";
import Custom404 from "../404";
import Product from '../../routes/home/product';
import Start from '../../routes/home/start';
import PayMethod from '../../routes/home/payMethod';
import Purchases from '../../routes/home/purchases';

export default class Content extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{ textAlign: "center", width: "100%" }}>
                <Switch>
                    <Route exact path={`/about`} component={About}  />
                    <Route exact path={`/promotions`} component={Promotions} />
                    <Route exact path={`/payment`} render={routeProps => <Payment {...routeProps} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
                    <Route exact path={`/purchases`} render={routeProps => <Purchases {...routeProps} cart={this.props.cart}/>} />
                    <Route exact path={`/cards`} render={routeProps => <Cards {...routeProps} user={this.props.user}/>} />
                    <Route exact path={`/paymethod`} render={routeProps => <PayMethod {...routeProps} user={this.props.user} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart}/>} />
                    <Route exact path={`/cart`} render={routeProps => <Cart {...routeProps} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />} />
                    <Route exact path={`/products`} render={routeProps => <Products {...routeProps} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} selectProduct={this.props.selectProduct} searchField={this.props.searchField} categorySelected={this.props.categorySelected}/> }/>
                    <Route exact path={`/product`} render={routeProps => <Product {...routeProps} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} product={this.props.product} /> } />
                    <Route exact path={`/`} render={routeProps => <Start {...routeProps} /> } />
                    <Route path={`*`} component={Custom404} />
                </Switch>
            </div>
        );
    }
}