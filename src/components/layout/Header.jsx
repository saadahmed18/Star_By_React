import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="py-5 sticky top-0 bg-[#74c69d] text-white">
        <div className="container m-auto px-4 flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex items-center gap-5 text-3xl">
              <img className="w-[50px]" src="/icons/logo.webp" alt="Logo Icon" />
              Start
            </Link>
          </div>
          <nav>
            <button className=" md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img className="hover:cursor-pointer" src="/icons/menu.webp" alt="Menu Icon" />
            </button>
            <ul className={`${isMenuOpen ? "absolute right-0 top-20 w-[250px] rounded-md bg-[#74c69d] p-3" : "hidden"} md:flex gap-5 items-center`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
