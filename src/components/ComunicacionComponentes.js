import React, { Component } from 'react';



export default class Padre extends Component {


    // Estado global
    state = {
        contador: 0,
        saludo: 'Nadie me ha saludado'
    }


    // Metodo
    incrementarContador = (e) => {

        this.setState({
            contador: this.state.contador + 1
        });

    }


    reducirContador = (e) => {

        this.setState({
            contador: this.state.contador - 1
        });

    }


    // El 'componente hijo' recibe como 'props' el metodo 'incrementarContador' desde el padre
    render() {
        return(
            <>
                <h2>Comunicación entre componentes</h2>
                <p>Contador: <b>{ this.state.contador }</b></p>
                <Hijo incrementar={ this.incrementarContador } reducir={ this.reducirContador } mensaje="mensaje para el hijo 1"/>
                <Hijo incrementar={ this.incrementarContador } reducir={ this.reducirContador } mensaje="mensaje para el hijo 2"/>
                <SaludandoAlPadre mensaje="Hola padre"/>
            </>
        );
    }


}




// Este componente es el que recibe el metodo ´incrementarContador´ de parte del componente padre
function Hijo( props ) {

    return(
      
        <>
        
            <h3>{ props.mensaje }</h3>
            <button onClick={ props.incrementar }>+</button>
            <button onClick={ props.reducir }>-</button>

        </>
    
    );

}


function SaludandoAlPadre( props ) {

    return(

        <>
        
            <h6>{ props.mensaje }</h6>

        </>

    );

}