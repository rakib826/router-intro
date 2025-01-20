import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center rounded-lg mt-4">
        <h1 className="text-center text-5xl font-bold bg-green-900 flex items-center rounded-lg py-6 px-4 text-white">Welcome to Home Component</h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default Home;