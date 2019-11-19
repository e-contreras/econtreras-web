import React, { Component } from "react";

export default class Register extends Component {

    render() {
        return (


            <div className="limiter" hidden={!this.props.show}>
                <div className="container-login100" style={{ background: "rgba(0,0,0,0.5)", zIndex: "1", position: "fixed"}}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-20">
                        <span className="login100-form-title p-b-33">
                            Crear cuenta
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="El nombre es requerido">
                            <input className="input100" type="text" name="nombre" placeholder="Nombre"/>
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="El apellido es requerido">
                            <input className="input100" type="text" name="apellido" placeholder="Apellido"/>
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>                                                
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Email válido requerido: ex@abc.xyz">
                            <input className="input100" type="text" name="username" placeholder="Nombre de usuario" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>                        
                        <div className="wrap-input100 validate-input" data-validate="La contraseña es requerida">
                            <input className="input100" type="password" name="pass" placeholder="Contraseña" />
                            <span className="focus-input100-1" />
                            <span className="focus-input100-2" />
                        </div>
                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Crear cuenta
                                </button>
                        </div>
                        <div className="container-login100-form-btn m-t-5">
                            <button className="login100-form-btn" style={{background: "silver"}} onClick={(e)=>{this.props.close()}}>Cancelar</button>
                        </div>                        
                        <br></br>
                        <div className="text-center">
                            <span className="txt1">Ya tienes una cuenta?</span>&nbsp;&nbsp;
                            <a href="#" onClick={this.props.showLogin} className="txt2 hov1">Inicia sesión aquí</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}