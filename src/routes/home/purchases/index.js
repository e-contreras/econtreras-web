import React, { Component } from "react";
import Purchase from "../../../components/purchase";
import axios from "axios";

export default class Purchases extends Component {

    constructor(props){
        super(props);
        this.state = {
            purchases: [],
            loading: false
        }
    }

    componentWillMount(){
        this.getPurchases();
    }

    render() {

        var purchases = this.state.purchases;
        var user = this.props.user;
        var purchasesShow = <></>;
        var havingPurchases = false;

        if(user == null || user == undefined || !user){
            this.props.history.push("/");
            return <></>;
        }
        
        if (purchases != null && purchases != undefined && purchases.length > 0) {
            havingPurchases = true;
            purchasesShow = purchases.map((i) => (
                <Purchase purchase={i} />
            ));
        }

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
                            <div className="row" hidden={!havingPurchases}>
                                {purchasesShow}
                            </div>
                            <div className="col-md-12" hidden={!(!havingPurchases && !this.state.loading)}>
                                <h3>No hay resultados ... </h3>                                
                            </div>
                            <div className="col-md-12" hidden={!this.state.loading}>
                                <img width="400" height="400" src="./img/loading.gif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getPurchases(){
        var user = this.props.user;
        if(user != null && user != undefined && user){
            this.setState({ loading: true });
            axios.get("http://localhost:8080/solicitude/" + user.id)
            .then(res => {
                this.setState({ purchases: res.data, loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            })
        }
        else{ this.props.history.push("/"); }
    }

    goToProducts() { this.props.history.push("/products"); }
    goToHome() { this.props.history.push("/"); }

}