import "./App.css";
import ItemList from "./components/Filter/ItemList";
import Formulario from "./components/Forms/Formulario";
import { mensajeConTitulo } from "./components/HOC/AddTitle";
import Mensaje from "./components/HOC/Mensaje";
import { ItemCount } from "./components/ItemCount";
import { ItemCountOriginal } from "./components/ItemCountOriginal";
import { modificarProducto } from "./components/RENDERPROP/ChangeProps";
import { Producto } from "./components/RENDERPROP/Producto";
import { Comments } from "./components/fetchs/Comments";
import { Posts } from "./components/fetchs/Posts";
import { Users } from "./components/fetchs/Users";

function App() {
	{
		/* HOC Y RENDER PROPS */
	}
	// const NuevoComponente = mensajeConTitulo(Mensaje);
	const ProductoModificado = modificarProducto(Producto);

	const ComponenteModificado = mensajeConTitulo(Mensaje);

	const products = [
		// simulamos una respuesta de una API
		{
			id: 1,
			name: "Producto 1",
			price: 1000,
			stock: 500,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			imageUrl:
				"https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg",
		},
		{
			id: 2,
			name: "Producto 2",
			price: 2000,
			stock: 52,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			imageUrl:
				"https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg",
		},
		{
			id: 3,
			name: "Producto 3",
			price: 3000,
			stock: 15,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			imageUrl:
				"https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg",
		},
		{
			id: 4,
			name: "Producto 4",
			price: 4000,
			stock: 51,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			imageUrl:
				"https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg",
		},
		{
			id: 5,
			name: "Producto 5",
			price: 5000,
			stock: 35,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			imageUrl:
				"https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg",
		},
	];

	return (
		<div className="app--container">
			<h2>CUSTOM HOOKS</h2>
			{/* <ItemCountOriginal /> */}
			{/* <ItemCount /> */}
			{/* <Users /> */}
			{/* <Comments /> */}
			{/* <Posts /> */}

			{/* HOC Y RENDER PROPS */}
			{/* <h1>High Order Componentes </h1> */}
			{/* <Mensaje /> */}
			{/* <ComponenteModificado /> */}
			{/* <NuevoComponente /> */}
			{/* <h1> Render Props</h1> */}
			{/* <Producto /> */}
			{/* <ProductoModificado nombre="carne" precio={1000} /> */}

			{/* <Formulario /> */}
			<ItemList products={products} />
		</div>
	);
}

export default App;
