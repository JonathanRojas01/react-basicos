import React from 'react';

// Importar 'styled-components'
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

// css => Usar propiedades css dentro de un componente estilizado
// keyframes => Animaciones tipo css dentro de un componente estilizado
// ThemeProvider => Contenedor de estilos a todos los hijos
// createGlobalStyle => Estilos globales (debe ser renderizado como un componente)


export default function ComponentesEstilizados () {


    // Variables que almacenan valores de las propiedades css y que luego pueden ser interpoladas
    let mainColor = '#db7093';
    let mainAlphaColor80 = '#db709380';























    // Colores de fondo
    let green  = 'green';
    let red    = 'red';
    let yellow = 'yellow';
    let orange = 'orange';
    let black  = 'black';


    const tiempoTransicion = ( time ) => `all ${ time } ease-in-out`;


    const fade = keyframes`
        0% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
        } 
    `;


    const Caja = styled.div`
    
        width: 200px;
        height: 200px;
        background-color: ${ orange };
        border: 2px solid ${ black };
        margin: 30px auto;
        color: ${ yellow };
        transition: ${ tiempoTransicion('.3s') };
        animation: ${ fade } .3s ease-out;
        &:hover {
            background-color: ${ green };
            border: 2px solid ${ red };
            color: ${ black };
        }
    
        ${ ( props ) => props.esCaja2 && css`
            width: 240px;
            height: 240px;
        `}

        ${ ({ esCaja3 }) => esCaja3 && css`
            width: 180px;
            height: 260px;
        `}

    `;


    const EstilosGlobales = createGlobalStyle`
        div {
            border-radius: 10px;
        }
    `;


    const sw = {
        color: '#fff',
        backgroundColor: 'green',
        borderRadius: '100%'
    }


    const CajaInterna = styled.div`
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin: 30px auto;
        color: ${ ({ theme }) => theme.color };
        background-color: ${ ({ theme }) => theme.backgroundColor };
        border-radius: ${ ({ theme }) => theme.borderRadius };
    `;


    const CajaInterna2 = styled(CajaInterna)`
        border: 10px solid #000;
    `;


















    // Metodo para almacenar una transición que puede ser usada en el css mediante styled-components
    const setTransitionTime = ( time ) => `all ${ time } ease-in-out`;


    // Animación con 'keyframes'
    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;


    // Esto genera un componente <MyH3></MyH3> estilizado dentro de la misma logica
    // Y que se le puede pasar código css mediante templates-strings
    // (en este caso este estilo aplica a todos los <h3></h3>)
    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        background-color: ${mainColor};
        transition: ${ setTransitionTime('1s') };
        color: ${ ( props ) => props.color || '#000' };
        animation: ${ fadeIn } 5s ease-out;

        ${ ({ isButton }) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

        &:hover {
            background-color: ${ mainAlphaColor80 };
        }
    `;


    // Objeto que almacena las propiedades de un tema light (puede ser cualquier otra cosa)
    const light = {
        color: '#222',
        bgColor: '#DDD'
    }

    const dark = {
        color: '#DDD',
        bgColor: '#222'
    }


    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${ ({ theme }) => theme.color };
        background-color: ${ ({ theme }) => theme.bgColor };
    `;


    // Este componente esta heredando las propiedades de 'Box'
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;


    // Estilos gloabales (debe ser renderizado como un componente)
    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `;


    return (
        
        <>
            
            <h2>Styled Components</h2>

            <GlobalStyle/>
            <EstilosGlobales/>

            <MyH3>Hola soy un H3 estilizado con styled-components</MyH3>
            <MyH3 color='#61dafb'>Hola soy un H3 estilizado con styled-components</MyH3>
            <MyH3 isButton>Soy un H3 estilizado como botón</MyH3>
            
            {/* ThemeProvider genera un contenedor de variables y pide un objeto como parametro  */}
            <ThemeProvider theme={ light }>
              <Box>Soy una caja Light</Box>
            </ThemeProvider>

            <ThemeProvider theme={ light }>
              <BoxRounded>Soy una caja redondeada Light</BoxRounded>
            </ThemeProvider>

            <ThemeProvider theme={ dark }>
              <Box>Soy una caja Dark</Box>
            </ThemeProvider>

            <ThemeProvider theme={ dark }>
              <BoxRounded>Soy una caja redondeada Dark</BoxRounded>
            </ThemeProvider>

            <Caja>Caja 1</Caja>
            <Caja esCaja2>Caja 2</Caja>
            <Caja esCaja3>Caja 3</Caja>

            <ThemeProvider theme={ sw }>
              <CajaInterna>Soy una caja SW</CajaInterna>
              <CajaInterna2>Soy una caja SW 2</CajaInterna2>
            </ThemeProvider>

        </>
    
    );


}