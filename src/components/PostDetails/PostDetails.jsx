import { Link, useLoaderData } from "react-router-dom";
const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h1 className="text-xl font-bold m-1">Post Details</h1>
      <div className="m-1">
        <h1 className="text-lg font-semibold">Id: {id} </h1>
        <h2 className="text-xl font-bold">Title: {title}</h2>
        <p>Description: {body}</p>
        <Link to={`/posts`}><button className="px-2 py-1 rounded-md bg-red-500 text-white">← Go Back</button></Link>
      </div>
    </div>
  );
};

export default PostDetails;
