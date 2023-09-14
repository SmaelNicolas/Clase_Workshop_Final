export const modificarProducto = (ProductoRecibido) => {
	return function changePrice({ nombre, precio }) {
		let nuevoPrecio = precio + 500;
		return <ProductoRecibido precio={nuevoPrecio} nombre={nombre} />;
	};
};
