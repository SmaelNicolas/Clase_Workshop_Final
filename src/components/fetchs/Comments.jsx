import { useFetch } from "../../hooks/useFetch";

export const Comments = () => {
	const { data } = useFetch(
		[],
		"https://jsonplaceholder.typicode.com/comments"
	);
	console.log(data);
	return (
		<>
			<h1>Comments</h1>
			<div className="app--section">
				{data?.map(({ id, email, name, body }) => (
					<div className="comment-container" key={id}>
						<div className="comment-email">{email}</div>
						<div className="comment-name">{name}</div>
						<div className="comment-body">{body}</div>
					</div>
				))}
			</div>
		</>
	);
};
