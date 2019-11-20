import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            documentTypes: [],
            birthday: undefined,
            cellphone: undefined,
            documentNumber: undefined,
            documentType: 0,
            email: undefined,
            lastName: undefined,
            name: undefined,
            password: undefined,
            phone: undefined,
            username: undefined
        }
    }

    componentWillMount() {
        this.getDocumentTypes();
    }

    render() {

        var documentTypes = this.state.documentTypes;
        var documentTypesShow = <option key="-1" value="-1">No hay resultados</option>
        if (documentTypes != undefined && documentTypes.length > 0) {
            documentTypesShow = documentTypes.map((i) => (
                <option key={i.id} value={i.id}>{i.description}</option>
            ));
        }

        return (
            <div className="limiter" hidden={!this.props.show}>
                <div className="container-login100" style={{ background: "rgba(0,0,0,0.5)", zIndex: "1", position: "fixed" }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-55 p-b-20" style={{ width: "70%" }}>
                        <span className="login100-form-title p-b-33">
                            Crear cuenta
                        </span>
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" placeholder="Nombres" value={this.state.name} onChange={(e)=>{this.changeField(e, "name")}}/>
                                        </div>
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100">
                                            <input className="input100" text="text" placeholder="Apellidos" value={this.state.lastName} onChange={(e)=>{this.changeField(e, "lastName")}}/>
                                        </div>
                                    </td>
                                </tr>
                                &nbsp;
                                <tr>
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100">
                                            <input className="input100" text="text" placeholder="Email" value={this.state.email} onChange={(e)=>{this.changeField(e, "email")}}/>
                                        </div>
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100">
                                            <input className="input100" text="date" type="date" placeholder="Fecha de nacimiento" value={this.state.birthday} onChange={(e)=>{this.changeField(e, "birthday")}}/>
                                        </div>
                                    </td>
                                </tr>
                                &nbsp;
                                <tr>
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" placeholder="Teléfono" value={this.state.cellphone} onChange={(e)=>{this.changeField(e, "cellphone")}}/>
                                        </div>
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" placeholder="Celular" value={this.state.phone} onChange={(e)=>{this.changeField(e, "phone")}}/>
                                        </div>
                                    </td>
                                </tr>
                                &nbsp;
                                <tr>
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <select className="input100" style={{ height: "35px", border: "#666666", padding: "5px" }} value={this.state.documentTypeSelected} onChange={(e)=>{this.changeField(e, "documentTypeSelected")}}>
                                                <option key="0" value="0">Seleccione</option>
                                                {documentTypesShow}
                                            </select>
                                        </div>
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" placeholder="Documento" value={this.state.documentNumber} onChange={(e)=>{this.changeField(e, "documentNumber")}}/>
                                        </div>
                                    </td>
                                </tr>
                                &nbsp;
                                <tr>
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" placeholder="Nombre de usuario" value={this.state.username} onChange={(e)=>{this.changeField(e, "username")}}/>
                                        </div>
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    <td style={{ width: "50%" }}>
                                        <div className="wrap-input100" >
                                            <input className="input100" text="text" type="password" placeholder="Contraseña" value={this.state.password} onChange={(e)=>{this.changeField(e, "password")}}/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn" onClick={this.handleRegister.bind(this)}>Crear cuenta</button>
                        </div>
                        <div className="container-login100-form-btn m-t-5">
                            <button className="login100-form-btn" style={{ background: "silver" }} onClick={(e) => { this.props.close() }}>Cancelar</button>
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

    changeField(e, field) {
        var obj = {};
        obj[field] = e.target.value;
        this.setState(obj);
    }    

    getDocumentTypes() {
        axios.get("http://localhost:8080/document_types")
            .then(res => {
                console.log(res.data);
                this.setState({
                    documentTypes: res.data
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleRegister() {

        var obj = {
            birthday: this.state.birthday,
            cellphone: this.state.cellphone,
            documentNumber: this.state.documentNumber,
            documentType: this.state.documentTypeSelected,
            email: this.state.email,
            lastName: this.state.lastName,
            name: this.state.name,
            password: this.state.password,
            personType: 1,
            phone: this.state.phone,
            roleId: 5,
            username: this.state.username
        };

        axios.post("http://localhost:8080/authentication/register", obj)
        .then(res => {
            console.log(res.data);
            this.props.notify.show("Se ha registrado exitosamente", "success");
            this.props.close();
        })
        .catch(error => {
            console.log(error);
            this.props.notify.show("Ha ocurrido un error en el registro", "error");
            this.props.close();
        })

        console.log(obj);

    }

}