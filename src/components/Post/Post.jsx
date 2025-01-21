import { Link } from "react-router-dom";

const Post = ({post}) => {
  const { id, title, body } = post;
  return (
    <div className="gap-4 p-4 bg-green-100 rounded-lg min-h-96 flex flex-col">
      <h3 className="text-2xl font-bold text-green-900 bg-green-500 p-4 rounded-md">{title}</h3>
      <p className="text-lg text-green-700 p-2 flex-grow">{body}</p>
      <Link to={`/post/${id}`} className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2 w-fit">Read More</Link>
    </div>
  );
};
export default Post;