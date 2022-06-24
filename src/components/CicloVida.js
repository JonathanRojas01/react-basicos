import React, { Component } from 'react';



// COMPONENTE HIJO
class Reloj extends Component {

    constructor(props) {
        super( props );
    }

    componentWillUnmount() {
        console.log(3, 'Componente ha sido eliminado del DOM');
    }

    render() {
        return(
            <h3>{ this.props.hora }</h3>
        );
    }

}



// COMPONENTE PADRE
export default class CicloVida extends Component {

    /* ### Ciclo de vida ###

    ** - Montaje
            0- constructor()
            - render()
            - componentDidMount()
    ** - Actualización
            4- render()
            - componentDidUpdate()
    ** - Desmontaje    
            - componentWillUnmount()
    */


    constructor( props ) {
        
        super( props );
        
        console.log(0, 'Constructor: Componente inicializado, aún no esta en el DOM');
    
        // ESTADO GLOBAL
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;

    }


    componentDidMount() {
        console.log(1, 'Componente ya se encuentra en el DOM');
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(2, 'El estado o las props del componente han cambiado');
        console.log(prevProps);
        console.log(prevState);
    }


    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    }


    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        });
    }
    

    detener = () => {
        clearInterval(this.temporizador);
    }


    render() {
        console.log(4, 'Render: Componente se dibuja (o redibuja por algún cambio) en el DOM');
        return(
            <>
                <h2>Ciclo de vida de los Componentes de Clase</h2>
                { this.state.visible && <Reloj hora={ this.state.hora }/> }
                <button onClick={ this.iniciar }>Iniciar</button>
                <button onClick={ this.detener }>Detener</button>
            </>
        );
    }


}