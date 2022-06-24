import { useState, useEffect } from 'react';



// HOOK PERSONALIZADO del tipo Fetch
// Osea que realiazará consultas a APIS o DB
export const useFetch = ( url ) => {


    // 1° - Datos extraidos de la API
    const [data, setData] = useState(null);

    // 2° - Verificar si esta pendiente la respuesta desde la API
    const [isPending, setIsPending] = useState(true);

    // 3° - Constante de error en caso de ser necesario
    const [error, setError] = useState(null);


    // Se ejecuta cuando se actualiza o cambia la variable 'url'
    useEffect( () => {


        const getData = async ( url ) => {


            // Tratar de hacer la petición
            try {

                // Necesito esperar la respuesta hacia la petición 'fetch'
                let res = await fetch(url);

                // Si la respuesta.ok es false, significa que hubo un error
                // Y se crea un objeto que almacena el error
                if ( !res.ok ) {

                    // Capturar
                    throw {
                        err: true,
                        status: res.status,
                        statusText: !res.statusText ? 'Ocurrió un error' : res.statusText
                    };

                }

                // Si es que no hay error, entonces se convierte la data a 'json'
                let data = await res.json();

                // Y se actualiza el estado de las constantes globales
                setIsPending( false );
                setData( data );
                setError( { err: false } );
                
            } catch ( err ) {
                
                setIsPending( true );
                setError( err );

            }

        }


        getData( url );


    }, [url]);


    // return { data: data, isPending: isPending, error: error}
    return { data, isPending, error }


}