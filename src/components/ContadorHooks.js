// Importar 'useState'
import React, { useState, useEffect } from 'react';



// Los componentes funcionales también pueden recibir propiedades (props)
export default function ContadorHooks( props ) {


    // VARIABLES DE ESTADO
    // 1° Nombre de la variable - 2° Metodo para establecer la variable
    // La variable 'contador inicia en '0'
    const [contador, setContador] = useState(100);

    const [mostrar, setMostrar] = useState(true);


    const sumar = () => {
        setContador( contador + 1 );
    }

    const restar = () => {
        setContador( contador - 1 );
    }

    const resetear = () => {
        setContador(0);
    }

    const multiplicarX100 = () => {
        setContador( contador * 100 );
    }

    const toggle = () => {

        if ( mostrar ) {
            setMostrar(false);
        } else {
            setMostrar(true);
        }
        
    }

    // Se ejecuta cada vez que se actualiza (renderiza)
    useEffect(() => {
        console.log('useEffect: Renderizando');
    });
    

    return(
        <>
            <h2>Hooks - UseSate</h2>
            <p>Componente: { props.nombreComponente }</p>
            <nav>
                <button onClick={ sumar }>+</button>
                <button onClick={ restar }>-</button>
                <button onClick={ resetear }>Resetear</button>
                <button onClick={ multiplicarX100 }>X 100</button>
                <button onClick={ toggle }>Mostrar/Ocultar</button>
            </nav>
            
            { mostrar ? <h3>{ contador }</h3> : <h3>No hay contador</h3> }
        </>
    );


}



// Propiedades por defecto
// Esta pueden ser usadas sin que sea necesario ser pasadas en el componente como parametros
ContadorHooks.defaultProps = {

    nombreComponente: 'Contador'

}