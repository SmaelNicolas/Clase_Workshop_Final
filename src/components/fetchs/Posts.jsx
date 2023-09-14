import { useFetch } from "../../hooks/useFetch";

export const Posts = () => {
	const { data } = useFetch([], "https://jsonplaceholder.typicode.com/posts");
	console.log(data);
	return <div>Posts</div>;
};
