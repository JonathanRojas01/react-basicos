import React from 'react';



export default function Personaje( { avatar, name, species, location } ) {

    
    return(

        <div>

            <figure>
                <img src={ avatar } alt={ name } />
                <h5>{ name }</h5>
                <h6>{ species }</h6>
                <p>{ location }</p>
            </figure>

        </div>

    );


}
