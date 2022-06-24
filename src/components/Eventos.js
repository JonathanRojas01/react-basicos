import React, { Component } from "react";



export class EventosES6 extends Component {


    constructor( props ) {
        
        super( props );
        
        this.state = {
            contador: 0
        }

        // Enlazar el metodo 'this' del metodo 'sumar' con el 'this' de la clase
        // Ahora se puede actualizar el estado desde el metodo sumar
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);

    }


    sumar(e) {
        
        console.log('Sumando');
        // console.log(this);

        this.setState({
            contador: this.state.contador +1
        });

    }


    restar(e) {
        console.log('Restando');
        this.setState({
            contador: this.state.contador -1
        });
    }


    render() {

        return(

            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={ this.sumar }>+</button>
                    <button onClick={ this.restar }>-</button>
                </nav>
                <h3>{ this.state.contador }</h3>
            </div>

        );

    }


}



// Properties Initializer (no es necesario el constructor)
export class EventosES7 extends Component {


    state = {
        contador: 0
    }


    // Arrow functions
    sumar = (e) => {
        console.log('Sumando');
        this.setState({
            contador: this.state.contador +1
        });
    }


    restar = (e) => {
        console.log('Restando');
        this.setState({
            contador: this.state.contador -1
        });
    }


    render() {

        return(

            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={ this.sumar }>+</button>
                    <button onClick={ this.restar }>-</button>
                </nav>
                <h3>{ this.state.contador }</h3>
            </div>

        );

    }


}




export class MasSobreEventos extends Component {


    handleClick = (e) => {

        // 'e' se refiere al evento como tal (viene con todas las propiedades tipicas de un evento)
        console.log(e);
        console.log(e.nativeEvent);
        // 'target' se refiere al objeto que ejecuta el evento (<button> en este caso)
        console.log(e.target);
        console.log(e.target);
    }


    render() {

        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={this.handleClick}>Saludar</button>
                <Boton myOnClick={(e) => {
                    this.handleClick(e, 'Hola desde el componente botón')
                }}/>
            </div>
        );

    }


}



function Boton( props ) {
    return <button onClick={ props.myOnClick }>Botón hecho componente</button>
}