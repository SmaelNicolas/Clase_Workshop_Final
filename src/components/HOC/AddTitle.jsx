export const mensajeConTitulo = (ComponenteRecibido) => {
	return function title() {
		return (
			<>
				<h2> Agregado en un HoC </h2>
				<ComponenteRecibido />
			</>
		);
	};
};
