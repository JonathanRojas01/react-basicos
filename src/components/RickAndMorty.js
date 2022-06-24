// React
import React, { useState, useEffect } from 'react';

// Componentes
import Personaje from './personas/Personaje';



export default function RickAndMorty() {


    // Constante de estado global
    // Donde se alamcenan los personajes desde la API
    const [personajes, setPersonajes] = useState([]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


    useEffect( () => {


        // Constante para obtener los personajes
        const getPersonajes = async ( url ) => {

            let res = await fetch( url );
            let json = await res.json();

            console.log( json );

            // Por cada resultado se genera un elemento
            json.results.forEach( async (elemento) => {

                let res = await fetch( elemento.url );
                let json = await res.json();

                let personaje = {
                    id: json.id,
                    name: json.name,
                    avatar: json.image,
                    species: json.species,
                    location: json.location.name
                }

                setPersonajes( (personajes) => [...personajes, personaje] );

            });

        }


        getPersonajes('https://rickandmortyapi.com/api/character/');


    }, []);


    return(

        <>

            <h2>Personajes de Rick and Morty</h2>

            {
                personajes.length === 0
                ?
                <p>Aún no hay personajes disponibles</p>
                :
                ( personajes.map( elemento => 
                    <Personaje 
                        key={ elemento.id }
                        name={ elemento.name }
                        avatar={ elemento.image }
                        species={ elemento.species }
                        location={ elemento.location }
                    />
                ))
            }

        </>

    );


}