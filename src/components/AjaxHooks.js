import React, { useState, useEffect } from 'react';



// Componente Pokemon
function Pokemon( {avatar, name} ) {

    return(

        <figure>
            <img src={ avatar } alt={ name }/>
            <figcaption>{ name }</figcaption>
        </figure>

    );

}



export default function AjaxHooks() {


    const [pokemons, setPokemons] = useState([]);
    

    // useEffect(() => {

    //     let url = 'https://pokeapi.co/api/v2/pokemon/';
        
    //     fetch(url)
    //         .then( res => res.json())
    //         .then( json => {
                
    //             console.log( json );

    //             json.results.forEach( el => {
                    
    //                 fetch( el.url )
    //                     .then( (res) => res.json())
    //                     .then( (json) => {
                            
    //                         console.log(json);

    //                         let pokemon = {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default,
    //                         }
                            
    //                         setPokemons((pokemons) => [...pokemons, pokemon]);

    //                     })

    //             });

    //         })

    // }, []);



    // Nunca se debe hacer asincrona (async, await) una función 'useEffect'
    
    useEffect(() => {


        // Para el asincronismo se debe hacer dentro pero en otra función
        const getPokemons = async ( url ) => {

            // 'res' esta esperando recibir la 'url' para almacenarla
            let res = await fetch(url);

            // Cuando 'res' tenga ya su contenido, en ese momento 'json' almacena
            // el resutado y lo guarda en formato json
            let json = await res.json();


            console.log( json );

            
            // Por cada respuesta en el 'json' se genera un elemento 'el'
            json.results.forEach( async (el) => {
                
                let res = await fetch( el.url );
                let json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                }
                    
                setPokemons((pokemons) => [...pokemons, pokemon]);

            });


        }


        // Esta 'url' es mandada a 'getPokemons' de modo asincrono
        getPokemons('https://pokeapi.co/api/v2/pokemon/');

        
    }, []);



    return(
        <>
            
            <h2>Peticiones asincronas en Hooks</h2>
            
            { 
                pokemons.length === 0
                ? ( <h3>Cargando...</h3> )
                : ( pokemons.map( el => <Pokemon key={ el.id } name={ el.name } avatar={ el.avatar }/>) 
            )}

        </>
    );

 
}