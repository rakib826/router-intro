import { useLoaderData } from "react-router-dom";
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
      </div>
    </div>
  );
};

export default PostDetails;
