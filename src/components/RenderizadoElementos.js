import React, { Component } from "react";
import data from "../helpers/data.json";



// COMPONENTE FUNCIONAL (se les llama asi porque es literalmente una función)
// Acepta solamente un parametros => 'props'
// Los componentes funcionales no usan el 'render'
// Elemento que muestra una lista desde un archivo 'json'
// Los 'props' son mandados al momento de ser llamado el elemento
function ElementoLista(props) {

    return(
        
        <li>
            <a target="blank" href={ props.el.web }>{ props.el.name }</a>
        </li>

    )

}



// COMPONENTE DE CLASE (es una clase)
export default class RenderizadoElementos extends Component {


    constructor(props) {

        super(props);

        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }

    }


    render() {

        console.log(data);

        return(

            <div>
                
                <h2>Renderizado de elementos</h2>
                
                <h3>Estaciones del año</h3>
                <ul>
                    { this.state.seasons.map( (el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
                
                <h3>Frameworks FrontEnd</h3>
                <ul>
                    {
                        data.frameworks.map((el) => (
                        <ElementoLista key={el.id} el={el}/>
                    ))}
                </ul>
            
            </div>

        );

    }


}