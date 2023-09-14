import { useFetch } from "../../hooks/useFetch";

export const Users = () => {
	const { data } = useFetch([], "https://jsonplaceholder.typicode.com/users");
	console.log(data);
	return <div>users</div>;
};
