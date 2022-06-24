import React, { useState } from 'react';



// export default function Formularios() {


//     // Variables de estado
//     const [nombre, setNombre] = useState('');
//     const [sabor, setSabor] = useState('');
//     const [lenguaje, setLenguaje] = useState('');
//     const [terminos, setTerminos] = useState(false);

//     // Esta es la forma correcta de manipular elementos del formulario
//     // como input o textarea con variables de estado vinculadas

//     // La propiedad 'value' no se debe usar por si sola ya que arrojará error
//     // Es necesario usar el metodo 'onChange'.


//     const handleSubmit = (e) => {

//         e.preventDefault();

//         alert('El formulario se ha enviado');

//     }


//     return(

//         <>
        
//             <h2>Formularios</h2>


//             <form onSubmit={ handleSubmit }>





//                 <label htmlFor='nombre'>Nombre</label>
//                 <input
//                     type='text'
//                     id='nombre'
//                     name='nombre'
//                     value={ nombre }
//                     onChange={ (e) => setNombre(e.target.value) }
//                     />






//                 <p>Elige tu sabor JS favorito ( { sabor } )</p>
                
//                 {/* defaultChecked => Importante para el uso también de onChange */}

//                 <input type='radio' id='angular' name='sabor' value='angular' onChange={ (e) => setSabor(e.target.value) }/>
//                 <label forHtml='angular'>Angular</label>

//                 <input defaultChecked type='radio' id='react' name='sabor' value='react' onChange={ (e) => setSabor(e.target.value) }/>
//                 <label forHtml='react'>React</label>

//                 <input type='radio' id='vue' name='sabor' value='vue' onChange={ (e) => setSabor(e.target.value) }/>
//                 <label forHtml='vue'>Vue</label>

//                 <input type='radio' id='svelte' name='sabor' value='svelte' onChange={ (e) => setSabor(e.target.value) }/>
//                 <label forHtml='svelte'>Svelte</label>

//                 <input type='radio' id='vanilla' name='sabor' value='vanilla' onChange={ (e) => setSabor(e.target.value) }/>
//                 <label forHtml='vanilla'>Vanilla</label>






//                 <p>Elige tu lenguaje de programación favorito ( { lenguaje } )</p>
//                 <select defaultValue='' name="lenguaje" onChange={ (e) => setLenguaje(e.target.value) }>
//                     <option value="">-----</option>
//                     <option value="js">Javascript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">GO</option>
//                     <option value="rb">Ruby</option>
//                 </select>
//                 <br />





//                 <label htmlFor='terminos'>Acepto términos y condiciones</label>
//                 <input
//                     onChange={ (e) => setTerminos(e.target.checked) }
//                     type='checkbox'
//                     id='terminos'
//                     name='terminos'/>
//                 <br />




//                 <input type="submit" />





//             </form>

//         </>

//     );


// }





export default function Formularios() {


    // Variables de estado agrupadas en un solo objeto
    // Ahora todos los elementos del formulario se manejaran con una sola variable de estado
    const [form, setForm] = useState({

    });


    // Metodo para manejar todos los 'onChange' de todos los elementos del formulario
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    // Y este otro metodo es para almacenar los valores booleanos como los checks
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    }


    return(

        <>
        
            <h2>Formularios</h2>

            <form onSubmit={ handleSubmit }>


                <label htmlFor='nombre'>Nombre</label>
                <input
                    type='text'
                    id='nombre'
                    name='nombre'
                    value={ form.nombre }
                    onChange={ handleChange }
                    />


                <p>Elige tu sabor JS favorito</p>                
                <input type='radio' id='angular' name='sabor' value='angular' onChange={ handleChange }/>
                <label forHtml='angular'>Angular</label>
                <input defaultChecked type='radio' id='react' name='sabor' value='react' onChange={ handleChange }/>
                <label forHtml='react'>React</label>
                <input type='radio' id='vue' name='sabor' value='vue' onChange={ handleChange }/>
                <label forHtml='vue'>Vue</label>
                <input type='radio' id='svelte' name='sabor' value='svelte' onChange={ handleChange }/>
                <label forHtml='svelte'>Svelte</label>
                <input type='radio' id='vanilla' name='sabor' value='vanilla' onChange={ handleChange }/>
                <label forHtml='vanilla'>Vanilla</label>


                <p>Elige tu lenguaje de programación favorito</p>
                <select defaultValue='' name="lenguaje" onChange={ handleChange }>
                    <option value="">-----</option>
                    <option value="js">Javascript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />


                <label htmlFor='terminos'>Acepto términos y condiciones</label>
                <input
                    onChange={ handleChecked }
                    type='checkbox'
                    id='terminos'
                    name='terminos'/>
                <br />


                <input type="submit" />


            </form>

        </>

    );


}