import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl font-extrabold p-4 bg-sky-100 text center">
        Users: {users.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {
          users.map((user) => (
            <User user={user} key={user.id} />
          ))
        }
      </div>
      <p className=" px-6 py-4 bg-gray-50 font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro et
        vel deleniti nulla fuga excepturi, explicabo, voluptatem a sequi nobis
        ipsam suscipit enim consequatur magnam minus ipsum molestias quibusdam
        maxime. Voluptas unde ratione totam quod quia, temporibus eius aliquam
        recusandae rerum. Necessitatibus minima beatae impedit quam eum
        dignissimos qui.
      </p>
    </div>
  );
};
export default Users;
