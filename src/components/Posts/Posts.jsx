import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center m-4 bg-slate-100 w-fit mx-auto p-4 rounded-md">
        Total Post: {posts.length}{" "}
      </h2>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-4 md:grid-cols-2">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;
