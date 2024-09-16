import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {

  return (
    <header className="text-white body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src={logo}
            alt=""
            className="w-12 h-12 object-cover object-center rounded-full mr-4"
          />
          <span className="ml-2 font-aprilla text-2xl">ZAHU GEMS</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-bronze	flex flex-wrap items-center text-xl justify-center">
          <Link to="/home" className="mr-7 font-aprilla hover:text-secondary">
            Home
          </Link>
          <Link to="/collections" className="mr-7 font-aprilla hover:text-secondary">
            Collections
          </Link>
          <Link to="/promotions" className="mr-7 font-aprilla hover:text-secondary">
            Promos
          </Link>
          <Link to="/about" className="mr-7 font-aprilla hover:text-secondary">
            About us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
