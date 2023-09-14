export const ProductsFiltered = ({
	products,
	filterState,
	handleFilterChange,
}) => (
	<div
		style={{
			display: "flex",
			flexDirection: "column",
		}}>
		<div style={{ display: "flex", flexDirection: "column" }}>
			<label>Ingrese el producto que quiere buscar</label>
			<input
				type="text"
				value={filterState}
				onChange={handleFilterChange}
			/>
		</div>
		{filterState === ""
			? products.map((product) => (
					<h1 key={product.id}>{product.name}</h1>
			  ))
			: products
					.filter((product) =>
						product.name
							.toLowerCase()
							.includes(filterState.toLowerCase())
					)
					.map((product) => <h1 key={product.id}>{product.name}</h1>)}
	</div>
);
