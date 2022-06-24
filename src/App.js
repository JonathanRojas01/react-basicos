import logo from './logo.svg';
import './App.css';

// Componentes
// import Componente 				from './components/Componente';
// import Boton 					from './components/Boton';
// import Propiedades 				from './components/Propiedades';
// import Estado 					from './components/Estado';
// import RenderizadoCondicional 	from './components/RenderizadoCondicional';
// import RenderizadoElementos 		from './components/RenderizadoElementos';
// import { EventosES6 } 			from './components/Eventos';
// import { EventosES7 } 			from './components/Eventos';
// import { EventosES6 } 			from './components/Eventos';
// import Padre 					from './components/ComunicacionComponentes';
// import CicloVida 				from './components/CicloVida';
// import AjaxApis					from './components/AjaxApis';
// import ContadorHooks 			from './components/ContadorHooks';
// import ScrollHooks 				from './components/ScrollHooks';
// import RelojHooks 				from './components/RelojHooks';
// import AjaxHooks 				from './components/AjaxHooks';
// import RickAndMorty 				from './components/RickAndMorty'
// import HooksPersonalizados 		from './components/HooksPersonalizados'
// import Referencias 				from './components/referencias';
// import ReferenciasPracticas 		from './components/ReferenciasPracticas';
// import Formularios 				from './components/Formularios';
// import Estilos 					from './components/Estilos';
// import ComponentesEstilizados 	from './components/ComponentesEstilisados';


// Función principal (main component)
function App() {
  	
	return (
    	
		/* 	Todo lo que se crea dentro del 'return', debe estar envuelto
			en un contenedor general (<div></div>) para que sea retornado
		*/
		<div className="App">
      		

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
      		</header>


			<section>
				
				{/* <Componente msg="Hola, soy el componente"/> */}
				
				{/* <Boton txt="Puedes " className="btn-react"/> */}
				
				{/* <Propiedades
					cadena="Esto es texto"
					numero={1892}
					booleano={true}
					arreglo={(1,2,3)}
					objeto={{ nombre: 'Jonathan', correo: 'jonathansw01' }}
					function={(num) => num * num}
					elementoReact={<i>Esto es un elemento React</i>}
					componenteReact={<Componente msg="Soy un componente pasado como props"/>} /> */}
				
				{/* <Estado/> */}

				{/* <RenderizadoCondicional/> */}
				
				{/* <RenderizadoElementos/> */}

				{/* <EventosES6/> */}

				{/* <EventosES7/> */}

				{/* <MasSobreEventos/> */}

				{/* <Padre/> */}

				{/* <CicloVida/> */}
			
				{/* <AjaxApis/> */}

				{/* Las propiedades por defecto pueden ser modificadas también desde el componente */}
				{/* <ContadorHooks nombreComponente='Contador de Clicks'/> */}

				{/* <ScrollHooks/> */}

				{/* <RelojHooks/> */}

				{/* <AjaxHooks/> */}

				{/* <RickAndMorty/> */}

				{/* <HooksPersonalizados/> */}

				{/* <Referencias/> */}

				{/* <ReferenciasPracticas/> */}

				{/* <Formularios/> */}

				{/* <Estilos/> */}

				{/* <ComponentesEstilizados/> */}

			</section>


    	</div>

  	);

}



export default App;
