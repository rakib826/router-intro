import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="text-center p-4 flex flex-row items-center justify-end bg-green-900">
                <NavLink to="/" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Home</NavLink>
                <NavLink to="/about" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">About</NavLink>
                <NavLink to="/contact" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Contact</NavLink>
                <NavLink to="/users" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Users</NavLink>
                <NavLink to="/posts" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;
