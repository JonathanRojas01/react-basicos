import React, { Component } from "react";


function EstadoAHijo(props) {

    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );

}


export default class Estado extends Component {


    // Si este componente llegase a tener 'props', estos deben ser pasados como parametro en el constructor
    constructor(props) {
        

        // Con el metodo super hereda el constructor de la clase 'Component' de la cual extiende
        super(props);


        // Objeto del estado
        this.state = {

            // Variable del estado
            contador: 0

        }


        setInterval(() => {

            // El estado debe ser modificado solo dentro del metodo 'setState'
            this.setState({
                contador: this.state.contador + 1
            });

        }, 1000);


    }


    render() {

        return (
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        );

    }


}