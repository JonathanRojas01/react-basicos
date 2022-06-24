import React, { useRef } from 'react';



export default function ReferenciasPracticas() {


    let refBoton = useRef();


    const mostrarReferencias = (e) => {

        console.log( refBoton.current );

        refBoton.current.style.backgroundColor = 'red';
        refBoton.current.style.width = '200px';

    }


    return(

        <>
        
            <button ref={ refBoton } onClick={ mostrarReferencias } className="btn">Mostrar referencias</button>

        </>

    );


}

