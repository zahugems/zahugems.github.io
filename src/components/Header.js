import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="text-white body-font bg-primary">
      <div className="container mx-auto flex p-2 md:p-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-cover object-center rounded-full mr-2"
          />
          <span className="ml-2 font-aprilla text-lg sm:text-2xl">ZAHU GEMS</span>
        </Link>
        <nav className="flex space-x-4 sm:space-x-7 font-aprilla text-sm sm:text-lg">
          <Link to="/home" className="hover:text-secondary">
            Home
          </Link>
          <Link to="/collections" className="hover:text-secondary">
            Collections
          </Link>
          <Link to="/promotions" className="hover:text-secondary">
            Promos
          </Link>
          <Link to="/about" className="hover:text-secondary">
            About us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
