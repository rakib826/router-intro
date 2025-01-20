const User = ({ user }) => {
  return (
    <div key={user.id} className="p-4 bg-gray-100 mt-2 mx-1 rounded-lg">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="italic font-light">{user.email}</p>
    </div>
  );
};
export default User;