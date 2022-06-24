import React from "react";
import PropTypes from "prop-types";

export default function Propiedades (props) {

    return(

        <div>
            <h2>Propiedades: { props.porDefecto }</h2>
            <ul>
                <li> { props.cadena } </li>
                <li> { props.numero } </li>
                <li> { props.booleano ? 'Verdadero' : 'Falso' } </li>
                <li> { props.objeto.nombre + ' - ' + props.objeto.correo } </li>
                <li> { props.elementoReact } </li>
                <li> { props.componenteReact } </li>
            </ul>
        </div>

    );

}



// Propiedades por defecto (pueden ser interpoladas en el componente)
Propiedades.defaultProps = {
    porDefecto: 'Las Props'
}

// 'propTypes' sirve para dar un tipado y decir si son requeridas o no las propiedades props
// Instalar mediante => npm i -s prop-types (debe ser también importado)
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}