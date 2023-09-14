import Filter from "./Filter";
import { ProductsFiltered } from "./productsFiltered";

const ItemList = ({ products }) => {
	return <Filter products={products}>{ProductsFiltered}</Filter>;
};

export default ItemList;
