// useRef => Para tener acceso a las referencias
import React, { useRef } from 'react';



export default function Referencias() {

    // Manipular el DOM de esta forma (getElementById, querySelector, etc)
    // no es una buena practica, pese a que se puede hacer.
    // Para eso en React se usan las 'Referencias'.


    // LAS REFERENCIAS son como un selector que ya existe en el DOM pero solo en REACT


    // El 'createRef' solo se usa en los componentes de clase
    // let refMenu = createRef();

    // Para los componentes funcionales se debe usar 'useRef'
    let refMenu     = useRef();
    let refMenuBtn  = useRef();

    console.log( refMenu, refMenuBtn );

    // Las referencias tienen dentro de si una propiedad llamada 'current'
    // La cual es nula en caso de no ser asignada a ningún elemento
    // Y en caso de que si entonces el valor de 'current' es el elemento en si
    
    // Los elemento en este caso deben ser llamados así: 'refMenuBtn.current.algo'

    // Abrir y cerrar menú
    const handleToggleMenu = (e) => {

        // Obtengo el menú por su ID
        // const $menu = document.getElementById('menu');

        // Evaluar para mostrar u ocultar
        // Gracias a las 'referencias' ya no se hace de esta forma

        // if ( e.target.textContent === 'Menú' ) {
        //     e.target.textContent = 'Cerrar'
        //     $menu.style.display = 'block';
        // } else {
        //     e.target.textContent = 'Menú'
        //     $menu.style.display = 'none';
        // }

        if ( refMenuBtn.current.textContent === 'Menú' ) {
            refMenuBtn.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';
        } else {
            refMenuBtn.current.textContent = 'Menú';
            refMenu.current.style.display = 'none';
        }

    }


    return(
        
        <>
            
            <h2>Referencias</h2>
            
            <button ref={ refMenuBtn } onClick={ handleToggleMenu }>Menú</button>
            
            <nav ref={ refMenu } style={{ display: 'none' }}>
                
                <a href="#">Sección 1</a>
                <br/>
                
                <a href="#">Sección 2</a>
                <br/>
                
                <a href="#">Sección 3</a>
                <br/>
                
                <a href="#">Sección 4</a>
                <br/>
                
                <a href="#">Sección 5</a>
                <br/>
            
            </nav>
        
        </>
        
    );


}