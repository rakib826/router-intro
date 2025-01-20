const Header = () => {
    return (
        <div>
            <nav className="text-center p-4">
                <a href="/" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Home</a>
                <a href="/about" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">About</a>
                <a href="/contact" className="py-2 px-4 font-semibold text-white bg-green-500 rounded-lg mx-2">Contact</a>
            </nav>
        </div>
    );
};

export default Header;
