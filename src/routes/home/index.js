import React, { Component } from "react";
import Header from "../../template/Header";
import NavMenu from "../../template/NavMenu";
import Content from "../../components/content";
import Footer from "../../template/Footer";
import Login from "./login";
import Register from "./register";
import ls from "local-storage";
import axios from "axios";
import Notifications, {notify} from "react-notify-toast";

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            cart: [],
            categories: [],
            searchField: undefined,
            productSelected: undefined,
            showLogin: false,
            showRegister: false,
            user: undefined
        }
    }

    componentWillMount(){
        this.loadUserFromLS();
        this.loadCartFromLS();
        this.getCategories();
    }

    render() {
        return (
            <div>
                <Notifications/>
                <Login show={this.state.showLogin} close={this.closeLogin.bind(this)} showRegister={this.showRegisterPage.bind(this)} login={this.login.bind(this)}/>
                <Register notify={notify} show={this.state.showRegister} showLogin={this.showLoginPage.bind(this)} close={this.closeRegister.bind(this)}/>
                <Header user={this.state.user} showLogin={this.showLoginPage.bind(this)} showRegister={this.showRegisterPage.bind(this)} categories={this.state.categories} cart={this.state.cart} history={this.props.history} removeFromCart={this.removeFromCart.bind(this)} logout={this.logout.bind(this)}/>
                <NavMenu user={this.state.user} history={this.props.history} location={this.props.location}/>
                <Content
                    cart={this.state.cart} addToCart={this.addToCart.bind(this)}
                    removeFromCart={this.removeFromCart.bind(this)} user={this.state.user}
                    product={this.state.productSelected} selectProduct={this.selectProduct.bind(this)}
                />
                <Footer />
            </div>
        );

    }
   
    addToCart(product){
        var cart = this.state.cart;
        if(cart.length > 0){
            for(var i = 0; i < cart.length; i++){
                if(product.id == cart[i].id){
                    cart[i].quantity = product.quantity;
                    ls.set("e-contreras-cart", JSON.stringify(cart));                    
                    this.setState({ cart: cart });
                    return;
                }
            }
        }
        cart.push(product);
        ls.set("e-contreras-cart", JSON.stringify(cart));        
        this.setState({cart: cart});
    }

    removeFromCart(product){
        var cart = this.state.cart;
        cart = cart.filter(item => item !== product);
        ls.set("e-contreras-cart", JSON.stringify(cart));
        this.setState({cart: cart});
    }

    selectProduct(product){
        this.setState({ productSelected: product });
    }

    loadCartFromLS(){
        var cart = this.state.cart;
        if(cart == undefined || cart.length == 0){
            // obtener del Local Storage
            var cartLS = ls.get("e-contreras-cart");
            if(cartLS != null && cartLS != undefined && cartLS){
                this.setState({ cart: JSON.parse(cartLS) });
            }
        }
    }

    loadUserFromLS(){
        var user = this.state.user;
        if(user == undefined || user == null){
            var userLS = ls.get("e-contreras-user");
            if(userLS != null && userLS != undefined && userLS){
                this.setState({ user: userLS });
            }
        }
    }

    login(user){
        ls.set("e-contreras-user", user);
        this.setState({ user: user });
    }

    logout(){
        ls.remove("e-contreras-user");
        this.setState({ user: undefined });
    }

    getCategories(){
        axios.get("http://localhost:8080/categories")
        .then(res => {
            console.log(res);
            this.setState({ categories: res.data });
        })
        .catch(error => {
            console.error(error);
        });
    }

    showLoginPage(){ this.setState({ showRegister: false, showLogin: true }); }
    closeLogin(){ this.setState({ showRegister: false, showLogin: false }); }
    showRegisterPage(){ this.setState({ showRegister: true, showLogin: false }); }
    closeRegister(){ this.setState({ showRegister: false, showLogin: false }); }

}