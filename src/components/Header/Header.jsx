import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="text-center p-4">
                <Link to="/" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Home</Link>
                <Link to="/about" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">About</Link>
                <Link to="/contact" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;
