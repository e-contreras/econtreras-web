import React, { Component } from "react";
import axios from "axios";

export default class RegisterCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: undefined,
            cuarteto1: undefined,
            cuarteto2: undefined,
            cuarteto3: undefined,
            cuarteto4: undefined,
            vencimientoMes: undefined,
            vencimientoAnho: undefined
        }
    }

    render() {
        return (
            <div className="limiter" hidden={!this.props.show} style={{top: "0", position: "absolute"}}>
                <div className="container-login100" style={{ background: "rgba(0,0,0,0.5)", zIndex: "1", position: "fixed" }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <span className="login100-form-title p-b-33">
                            Asociar tarjeta
                        </span>

                        <div className="wrap-input100 validate-input" style={{marginBottom: "5px"}}>
                            <input className="input100" type="text" value={this.state.nombre} onChange={(e)=>{this.changeField(e, "nombre")}} name="text" placeholder="Nombre de la tarjeta" />
                        </div>
                        <div style={{display: "inline-block"}} style={{marginBottom: "5px"}}>
                            <div className="wrap-input100 validate-input" style={{width: "25%", display: "inline-block"}}>
                                <input className="input100" type="text" value={this.state.cuarteto1} onChange={(e)=>{this.changeField(e, "cuarteto1")}} name="text" placeholder="0000" />
                            </div>
                            <div className="wrap-input100 validate-input" style={{width: "25%", display: "inline-block"}}>
                                <input className="input100" type="text" value={this.state.cuarteto2} onChange={(e)=>{this.changeField(e, "cuarteto2")}} name="text" placeholder="0000" />
                            </div>
                            <div className="wrap-input100 validate-input" style={{width: "25%", display: "inline-block"}}>
                                <input className="input100" type="text" value={this.state.cuarteto3} onChange={(e)=>{this.changeField(e, "cuarteto3")}} name="text" placeholder="0000" />
                            </div>
                            <div className="wrap-input100 validate-input" style={{width: "25%", display: "inline-block"}}>
                                <input className="input100" type="text" value={this.state.cuarteto4} onChange={(e)=>{this.changeField(e, "cuarteto4")}} name="text" placeholder="0000" />
                            </div>                                                                        
                        </div>

                        <div style={{display: "inline-block"}} style={{marginBottom: "5px", textAlign: "right"}}>
                            <div className="wrap-input100 validate-input" style={{width: "45%", display: "inline-block"}}>
                                <input style={{textAlign: "right"}} className="input100" type="number" value={this.state.vencimientoMes} onChange={(e)=>{this.changeField(e, "vencimientoMes")}} name="text" placeholder="03" />
                            </div>
                            <span style={{width: "10%"}}>&nbsp;/&nbsp;</span>
                            <div className="wrap-input100 validate-input" style={{width: "45%", display: "inline-block"}}>
                                <input className="input100" type="number" value={this.state.vencimientoAnho} onChange={(e)=>{this.changeField(e, "vencimientoAnho")}} name="text" placeholder="2020" />
                            </div>
                        </div>                        

                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn" onClick={this.handlePost.bind(this)}>Registrar</button>
                        </div>
                        <div className="container-login100-form-btn m-t-5">
                            <button className="login100-form-btn" style={{background: "silver"}} onClick={(e)=>{this.props.close()}}>Cancelar</button>
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

    handlePost(){
        var user = this.props.user;
        var obj = {
            clienteId: user.id,
            fechaExpiracionAnho: this.state.vencimientoAnho,
            fechaExpiracionMes: this.state.vencimientoMes,
            nombre: this.state.nombre,
            numero: this.state.cuarteto1 + this.state.cuarteto2 + this.state.cuarteto3 + this.state.cuarteto4
        }
        this.props.save(obj);
    }

}