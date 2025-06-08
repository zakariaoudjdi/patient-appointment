import { NavLink } from "react-router-dom";

import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
function NavigationBar({ links = [], isHomePage }) {
  return (
    <header
      className={` ${isHomePage ? "absolute" : ""}  top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 text-white`}
    >
      <div
        className={`${isHomePage ? "text-white" : "text-gray-800"} text-4xl font-bold`}
      >
        Logo
      </div>
      <nav className="space-x-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `${isHomePage ? "text-white" : "text-gray-800"}  font-body text-xl   font-light  py-2 px-4 rounded-sm ${
                isActive
                  ? "bg-fuchsia-500 text-white"
                  : "hover:text-fuchsia-500"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <Button to={"/contact"} type="primary">
        <FaPhoneAlt className="inline-block mr-2" />
        Contact Us
      </Button>
    </header>
  );
}

export default NavigationBar;
