import React, { useState, useEffect } from 'react';



function Reloj( hora ) {

    return(
        <h3>{ hora }</h3>
    );

}



export default function RelojHooks() {


    const [hora, setHora] = useState( new Date().toLocaleTimeString() );
    const [visible, setVisible] = useState( false );


    const iniciar = () => {
        
    }


    const detener = () => {
        
    }


    return(
        <>
            <h2>Reloj con Hooks</h2>
            { visible ? <Reloj hora={ hora } /> : <p>Nada</p> }
            <button onClick={ iniciar }>Iniciar</button>
            <button onClick={ detener }>Detener</button>
        </>
    );


}