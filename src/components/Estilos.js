import React from 'react';

// Hoja de estilos normal
import './Estilos.css';

// SASS
import './Estilos.scss';

// Estilos de tipo modulos
import moduleStyles from './Estilos.module.css';



export default function Estilos() {


    // Objetos con estilos
    let myStyles = {
        borderRadius: '.rem',
        margin: '2rem auto',
        maxWidth: '50%'
    }


    return (

        <>
            
            <section className="estilos">
                
                <h2>Estilos CSS en React</h2>
                
                <h3 className="bg-react">Estilos en hoja CSS externa</h3>
                
                <h3
                    className="bg-react"
                    style={{ borderRadius: '25rem', margin: '1rem' }}>
                    Estilos en línea (atributo style)
                </h3>

                <h3
                    className="bg-react"
                    style={ myStyles }>
                    Estilos en línea interpolados por objetos
                </h3>

                <h3
                    className="bg-react"
                    style={ myStyles }>
                    Agregando Normalize con:
                    <br />
                    <code>@import-normalize;</code>
                </h3>

                <h3 className={ moduleStyles.error }>Estilos con Módulos</h3>
                <h3 className={ moduleStyles.success }>Estilos con Módulos</h3>

                <h3 className='bg-sass'>Estilos con SASS</h3>
            
            </section>

        </>

    );

}