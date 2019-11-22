import React, { Component } from "react";

export default class Card extends Component {

    render() {
        var card = this.props.card;
        if(card == undefined){ return <></>; }
        return (
            <div>
                <div className="fiDetails-container js_fiDetails-container" tabIndex={-1}>
                    <div className="cardDetails fiDetails">
                        <div className="cardImage-container cardImage-container_large">
                            <img width={300} className="cardImage_large" src={this.selectBankImageByNumber(card.numero)} />
                            <br></br>
                            <div style={{marginTop: "10px"}}>
                                <span dir="ltr">{this.showCensoredCard(card.numero)}</span>
                            </div>
                            <br></br>
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <h3>{card.nombre}</h3>
                            <hr />
                            <p><strong>Fecha de vencimiento</strong></p>
                            <p><span>{card.fechaExpiracionMes}/{card.fechaExpiracionAnho}</span></p>
                            <hr />
                            <div>
                                <a href="#" onClick={(e)=>{this.props.delete(card.id)}}>Eliminar tarjeta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showCensoredCard(number){
        return "•••• •••• •••• " + number.substring(12, 16);
    }

    showSeparatedCard(number){
        return number.substring(0, 4) + " " + number.substring(4, 8) + " "  + number.substring(8, 12) + " " + number.substring(12, 16);
    }    

    selectBankImageByNumber(number){
        var firstNumber = parseInt(number.substring(0,1));
        if(firstNumber == 4){
            return "./img/visa.png";
        }
        else if(firstNumber == 5){
            return "./img/mastercard.png";
        }
        else {
            return "./img/other-card.png";
        }
    }

}