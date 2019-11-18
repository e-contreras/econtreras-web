import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Kart from '../../routes/home/kart';
import Payment from '../../routes/home/payment';
import Products from '../../routes/home/products';
import Promotions from "../../routes/home/promotions";
import About from "../../routes/home/about";
import Custom404 from "../404";
import Product from '../../routes/home/product';

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
                    <Route exact path={`/payment`} render={routeProps => <Payment {...routeProps} kart={this.props.kart}/>} />
                    <Route exact path={`/kart`} render={routeProps => <Kart {...routeProps} kart={this.props.kart}/>} />
                    <Route exact path={`/product`} component={Product} />
                    <Route exact path={`/products`} component={Products} />
                    <Route exact path={`/`} component={Products} />
                    <Route path={`*`} component={Custom404} />
                </Switch>
            </div>
        );
    }
}