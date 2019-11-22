import React, { Component } from "react";
import Card from "../../../components/card";
import RegisterCard from "../../../components/registerCard";
import axios from "axios";
import Notifications, {notify} from "react-notify-toast";

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardSelected: undefined,
            loading: false
        };
    }

    componentWillMount() {
        this.getCardsByClient();
    }

    render() {

        var cards = this.state.cards;
        var user = this.props.user;
        var cardShow = <></>;
        var havingCards = false;

        if(user == null || user == undefined || !user){
            this.props.history.push("/");
            return <></>;
        }
        
        if (cards != null && cards != undefined && cards.length > 0) {
            havingCards = true;            
            var currentStyle = {background: "white", padding: "10px", marginBottom: "10px", border: "2px solid #f8694a", cursor: "pointer", textAlign: "left"};
            var normalStyle = {background: "#eff3f6", padding: "10px", marginBottom: "10px", cursor: "pointer", textAlign: "left"};
            var selected = this.state.cardSelected;
            cardShow = cards.map((i) => (
                <li style={selected.id == i.id ? currentStyle : normalStyle} onClick={(e)=>{this.setState({cardSelected: i})}}>
                    <p><strong style={{color: "#f8694a"}}>{i.nombre}</strong></p>
                    <p>{this.showCensoredCard(i.numero)}</p>
                </li>
            ));
        }

        return (
            <div>
                <Notifications/>
                <RegisterCard show={this.state.showRegister} close={this.closeRegister.bind(this)} save={this.saveCard.bind(this)} user={this.props.user}/>
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb" style={{ textAlign: "left" }}>
                            <li>
                                <a href="#" onClick={this.goToHome.bind(this)}>Inicio</a>
                            </li>
                            <li className="active">Medios de pago</li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <button className="primary-btn add-to-cart" style={{ marginBottom: "20px", float: "left" }} onClick={this.showRegisterCard.bind(this)}>Nuevo medio de pago</button>
                        <div className="row" hidden={!havingCards}>
                            <div id="main" className="col-md-12">
                                <div className="col-md-4" style={{paddingLeft: "0px"}}>
                                    <section>
                                        <ul>
                                            {cardShow}                   
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-md-8">
                                    <Card card={this.state.cardSelected} delete={this.deleteCard.bind(this)}/>
                                </div>
                            </div>

                        </div>
                        <div className="row" hidden={!(!havingCards && !this.state.loading)}>
                            <h3>No hay resultados ... </h3>
                        </div>
                        <div className="row" hidden={!this.state.loading}>
                            <img width="400" height="400" src="./img/loading.gif" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showRegisterCard(){
        this.setState({
            showRegister: true
        });
    }

    closeRegister(){
        this.setState({
            showRegister: false
        });
    }

    getCardsByClient() {
        var user = this.props.user;
        if (user != null && user != undefined && user) {
            this.setState({ loading: true });
            axios.get("http://localhost:8080/card/" + user.id)
                .then(res => {
                    if(res.data.length > 0){
                        this.setState({ cards: res.data, cardSelected: res.data[0], loading: false });
                    }
                    else{
                        this.setState({ cards: res.data, loading: false });
                    }
                })
                .catch(error => {
                    this.setState({ cards: [], cardSelected: undefined, loading: false });
                })
        }
        else {
            this.props.history.push("/");
        }
    }

    goToHome() {
        this.props.history.push("/");
    }

    showCensoredCard(number){
        return "•••• •••• •••• " + number.substring(12, 16);
    }

    saveCard(obj){
        axios.post("http://localhost:8080/card", obj)
        .then(res => {
            notify.show("Ha registrado un nuevo medio de pago exitosamente", "success");
            this.setState({ showRegister: false }, this.getCardsByClient);
        })
        .catch(error => {
            notify.show("Ha ocurrido un error al registrar el medio de pago", "error");
            this.setState({ showRegister: false });
        })
    }

    deleteCard(id){
        axios.delete("http://localhost:8080/card/" + id)
        .then(res => {
            notify.show("Tarjeta eliminada exitosamente", "success");
            this.getCardsByClient();
        })
        .catch(error => {
            notify.show("Ha ocurrido un error al eliminar la tarjeta", "error");
        })
    }

}