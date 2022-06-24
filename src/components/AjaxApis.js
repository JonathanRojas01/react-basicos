import React, { Component } from 'react';



function Pokemon( props ) {

    return(

        <figure>
            <img src={ props.avatar } alt={ props.name }/>
            <figcaption>{ props.name }</figcaption>
        </figure>

    );

}




export default class AjaxApis extends Component {


    // Estado global (arreglo de pokemones)
    state = {
        pokemones: []
    }


    componentDidMount() {

        let url = 'https://pokeapi.co/api/v2/pokemon/';
        
        // Recibe la url como parametro y como funciona en base a promesas
        // entonces usa el metodo 'then' para continuar con el codigo
        fetch(url)
            .then( res => res.json())
            .then( json => {
                
                console.log( json );

                json.results.forEach( el => {
                    
                    // El json resultande trae un 'url' con el pokemon
                    // Así que se crea una nueva petición fetch a esa url
                    fetch( el.url )
                        .then( (res) => res.json())
                        .then( (json) => {
                            
                            console.log(json);

                            // Creo un objeto 'pokemon' por cada elemento resultante en el ultimo fetch
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }
                            
                            // Creo una variable que almacenará una copia del arreglo de pokemones del estado global
                            // pero agregandole los pokemones que vienen en el objeto 'pokemon'
                            // Gracias al 'spread' se rompe la relación entre ambos arreglos
                            let pokemones = [...this.state.pokemones, pokemon]
                        
                            this.setState({
                                // El 1° es el del estado, el 2° es el crea recientemente
                                pokemones: pokemones
                            });

                        })

                });

            })
    
    }


    render() {

        return(
            <>
                
                <h2>Peticiones asincronas en Componentes de Clase</h2>
                
                { 
                    this.state.pokemones.length === 0 // Si el arreglo de pokemones es igual a 0
                    ? ( <h3>Cargando...</h3> )        // entonces crea un 'cargando', de lo contrario muestra el componente 'Pokemon'
                    : ( this.state.pokemones.map( el => <Pokemon key={ el.id } name={ el.name } avatar={ el.avatar }/>) 
                )}

            </>
        );

    }

}