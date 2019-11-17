import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Custom404 from "../404";
import Products from '../../routes/home/products';
import Kart from '../../routes/home/kart';
import Payment from '../../routes/home/payment';

export default class Content extends Component {

    render(){

        return(
            <div style={{textAlign: "center", padding: "20px", width: "100%"}}>
                <Switch>
                    <Route exact path={`/payment`} component={Payment} />
                    <Route exact path={`/kart`} component={Kart} />
                    <Route exact path={`/products`} component={Products} />
                    <Route exact path={`/`} component={Products} />
                    <Route path={`*`} component={Custom404}/>                    
                </Switch>
            </div>
        );
    }
}