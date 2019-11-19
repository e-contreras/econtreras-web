import React, { Component } from "react";
import Header from "../../template/Header";
import NavMenu from "../../template/NavMenu";
import Content from "../../components/content";
import Footer from "../../template/Footer";
import Login from "./login";
import Register from "./register";
import ls from "local-storage";

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            kart: [],
            categories: [],
            searchField: undefined,
            productSelected: undefined,
            showLogin: false,
            showRegister: false
        }
    }

    componentWillMount(){
        this.loadKartFromLS();
        this.getCategories();
    }

    render() {
        return (
            <div>
                <Login show={this.state.showLogin} close={this.closeLogin.bind(this)} showRegister={this.showRegisterPage.bind(this)}/>
                <Register show={this.state.showRegister} showLogin={this.showLoginPage.bind(this)} close={this.closeRegister.bind(this)}/>
                <Header showLogin={this.showLoginPage.bind(this)} showRegister={this.showRegisterPage.bind(this)} categories={this.state.categories} kart={this.state.kart} history={this.props.history} removeFromKart={this.removeFromKart.bind(this)}/>
                <NavMenu history={this.props.history} location={this.props.location}/>
                <Content
                    kart={this.state.kart} addToKart={this.addToKart.bind(this)}
                    removeFromKart={this.removeFromKart.bind(this)}
                    product={this.state.productSelected} selectProduct={this.selectProduct.bind(this)}
                />
                <Footer />
            </div>
        );

    }
   
    addToKart(product){
        var kart = this.state.kart;
        if(kart.length > 0){
            for(var i = 0; i < kart.length; i++){
                if(product.id == kart[i].id){
                    kart[i].quantity = product.quantity;
                    ls.set("e-contreras-kart", JSON.stringify(kart));                    
                    this.setState({ kart: kart });
                    return;
                }
            }
        }
        kart.push(product);
        ls.set("e-contreras-kart", JSON.stringify(kart));        
        this.setState({kart: kart});
    }

    removeFromKart(product){
        var kart = this.state.kart;
        kart = kart.filter(item => item !== product);
        ls.set("e-contreras-kart", JSON.stringify(kart));
        this.setState({kart: kart});
    }

    selectProduct(product){
        this.setState({ productSelected: product });
    }

    loadKartFromLS(){
        var kart = this.state.kart;
        if(kart == undefined || kart.length == 0){
            // obtener del Local Storage
            var kartLS = ls.get("e-contreras-kart");
            if(kartLS != null && kartLS != undefined && kartLS){
                this.setState({ kart: JSON.parse(kartLS) });
            }
        }
    }

    getCategories(){
        var categorias = [
            {
                id: 1,
                name: "Celulares"
            },
            {
                id: 2,
                name: "Prendas de vestir"
            },
            {
                id: 3,
                name: "Mochilas"
            },
            {
                id: 4,
                name: "Bolsos"
            }
        ];
        this.setState({categories: categorias});
    }

    showLoginPage(){ this.setState({ showRegister: false, showLogin: true }); }
    closeLogin(){ this.setState({ showRegister: false, showLogin: false }); }
    showRegisterPage(){ this.setState({ showRegister: true, showLogin: false }); }
    closeRegister(){ this.setState({ showRegister: false, showLogin: false }); }

}