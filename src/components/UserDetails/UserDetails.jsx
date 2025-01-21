import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, address, phone } = user;
  return (
    <div className="p-4 bg-gray-100 mt-2 mx-1 rounded-lg text-center">
      <h1 className="text-2xl font-bold">User Details</h1>
      <div className=" p-4 w-fit mx-auto text-left mt-2  bg-blue-200 rounded-md">
        <h1 className="text-lg font-semibold">Name: {name} </h1>
        <p>
          Address : {address.street}, {address.suite}
        </p>
        <p>Zipcode: {address.zipcode} </p>
        <p>Phone: {phone} </p>
      </div>
    </div>
  );
};
export default UserDetails;
