import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const ItemCountOriginal = ( stock = 15 ) => {
export const ItemCountOriginal = ({ stock = 15 }) => {
	const [count, setCount] = useState(1);

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const addToCart = () => {
		toast(`Added ${count} products to cart`);
		setCount(1);
	};

	return (
		<>
			<div className="count--container">
				<button onClick={decrement}>-</button>
				<span>{count}</span>
				<button onClick={increment}>+</button>
			</div>
			<button onClick={addToCart}>Add to 🛒</button>
			{/* //
            //
            //
            //
            //
            //
            // */}
			{/* TOAST */}
			<ToastContainer
				position="top-right"
				autoClose={1000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="light"
			/>
		</>
	);
};
