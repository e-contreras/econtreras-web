import React, { Component } from "react";

export default class Login extends Component {

    render() {
        return (
            <div className="limiter" hidden={!this.props.show}>
                <div className="container-login100" style={{ background: "rgba(0,0,0,0.5)", zIndex: "1", position: "fixed" }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <span className="login100-form-title p-b-33">
                            Iniciar sesión
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email / Nombre de usuario" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Contraseña" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Ingresar
                                </button>
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

}