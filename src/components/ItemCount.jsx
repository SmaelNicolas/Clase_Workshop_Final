import { useCount } from "../hooks/useCount";
import "./itemCount.css";

export const ItemCount = () => {
	const { count, decrement, increment, reset } = useCount(1, 15);

	return (
		<>
			<div className="count--container">
				<button onClick={decrement}>-</button>
				<span>{count}</span>
				<button onClick={increment}>+</button>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	);
};
