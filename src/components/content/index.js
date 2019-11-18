import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Kart from '../../routes/home/kart';
import Payment from '../../routes/home/payment';
import Products from '../../routes/home/products';
import Promotions from "../../routes/home/promotions";
import About from "../../routes/home/about";
import Custom404 from "../404";

export default class Content extends Component {

    render() {

        return (
            <div style={{ textAlign: "center", width: "100%" }}>
                <Switch>
                    <Route exact path={`/about`} component={About} />
                    <Route exact path={`/promotions`} component={Promotions} />
                    <Route exact path={`/payment`} component={Payment} />
                    <Route exact path={`/kart`} component={Kart} />
                    <Route exact path={`/products`} component={Products} />
                    <Route exact path={`/`} component={Products} />
                    <Route path={`*`} component={Custom404} />
                </Switch>
            </div>
        );
    }
}