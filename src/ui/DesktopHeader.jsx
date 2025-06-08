import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";

function DesktopHeader({ links = [], isHomePage }) {
  return (
    <header
      className={` ${isHomePage ? "absolute" : "mx-auto max-w-7xl"} left-0 right-0 top-0 z-10 hidden items-center justify-between px-8 py-6 text-white md:flex`}
    >
      <div
        className={`${isHomePage ? "text-white" : "text-gray-800"} text-2xl font-bold`}
      >
        Logo
      </div>
      <nav className="space-x-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `${isHomePage ? "text-white" : "text-gray-800"} font-body rounded-sm px-4 py-2 text-md font-medium md:text-lg ${
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
        <FaPhoneAlt className="mr-2 inline-block md:hidden" />
        Contact Us
      </Button>
    </header>
  );
}

export default DesktopHeader;
