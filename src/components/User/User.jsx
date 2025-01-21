import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div key={user.id} className="p-4 bg-gray-100 mt-2 mx-1 rounded-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="italic font-light">{email}</p>
      <Link to={`/user/${id}`} className="text-blue-500 underline">
        <button className="px-2 py-1 bg-green-600 text-white mt-2 rounded-md" >Show Details</button>
      </Link>
    </div>
  );
};
export default User;