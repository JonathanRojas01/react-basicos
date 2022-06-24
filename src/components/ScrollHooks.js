import React, { useState, useEffect } from 'react';



export default function ScrollHooks() {


    const [scrollY, SetScrollY] = useState(0);
    // const [name, setName] = useState('Jonathan');
    

    // useEffect le dice al componente que debe hacer algo después de renderizarse
    // useEffect recibe 2 parametros
    // 1° CallBack con el código a ejecutar
    // 2° variable (en este caso de estado y se ejecutará cada vez que esa variable tenga cambios)
    useEffect(() => {
        
        console.log('Moviendo el Scroll');

        const detectarScroll = () => {
            SetScrollY(window.pageYOffset);
        }

        window.addEventListener('scroll', detectarScroll);

        // Cuando este componente ya no exista voy a retornar un función
        // para desuscribirme de este efecto
        return () => {
            window.removeEventListener('scroll', detectarScroll);
        }

    }, [scrollY]);


    // De esta forma se ejecutará solo una vez
    useEffect(() => {
        console.log('Fase de Montaje');
    }, []);


    // Así se ejecuta cada vez que es actualizado (renderizado)
    useEffect(() => {
        console.log('Fase de Actualización');
    });


    // Cuando a un useEffect se le agrega una función dentro de el
    // se le dice que ejecuta la fase de desmontaje
    // Esto se ejecutará cuando se desmonte
    useEffect(() => {
    
        return () => {
            console.log('Fase de Desmontaje');
        }

    });


    return(
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scrool Y del navegador { scrollY } px</p>
        </>
    );


}