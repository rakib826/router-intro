import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div className="p-4 bg-gray-100 mt-2 mx-1 rounded-lg">
      <h1>User Details Below</h1>
      <h1>Name: {name} </h1>
    </div>
  );
};
export default UserDetails;