import React, { Component } from "react";
import axios from "axios";
import ls from "local-storage";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: undefined,
            password: undefined
        }
    }

    render() {
        return (
            <div className="limiter" hidden={!this.props.show}>
                <div className="container-login100" style={{ background: "rgba(0,0,0,0.5)", zIndex: "1", position: "fixed" }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <span className="login100-form-title p-b-33">
                            Iniciar sesión
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" value={this.state.username} onChange={(e)=>{this.changeField(e, "username")}} name="text" placeholder="Nombre de usuario" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" value={this.state.password} onChange={(e)=>{this.changeField(e, "password")}} name="pass" placeholder="Contraseña" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn" onClick={this.handleLogin.bind(this)}>Ingresar</button>
                        </div>
                        <div className="container-login100-form-btn m-t-5">
                            <button className="login100-form-btn" style={{background: "silver"}} onClick={(e)=>{this.props.close()}}>Cancelar</button>
                        </div>                        
                        <br></br>
                        <div className="text-center">
                            <span className="txt1">Crear una cuenta?</span>&nbsp;&nbsp;
                            <a href="#" onClick={this.props.showRegister} className="txt2 hov1">Registrarse</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeField(e, field) {
        var obj = {};
        obj[field] = e.target.value;
        this.setState(obj);
    }

    handleLogin(e){
        e.preventDefault();        
        var obj = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(obj);
        axios.post("http://localhost:8080/authentication/login", obj)
        .then(res => {
            this.props.notify.show("Bienvenido " + res.data.name + " " + res.data.lastName, "success");
            this.props.login(res.data);
            this.props.close();
        })
        .catch(error => {
            console.log(console.log(error.response.data.message));
            this.props.notify.show(error.response.data.message, "error");
            this.props.close();
        })
    }

}