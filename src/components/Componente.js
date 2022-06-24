// Importar react y el uso de los componentes
import React, { Component } from "react";



// Clase 'Componente' del tipo Component
class Componente extends Component {

    
    // Renderizado (es lo que se mostrará)
    render() {
        
        return (

            <h2> { this.props.msg } </h2>

        );

    }


}



// Exportar para poder usarlo en otros archivos
export default Componente;

