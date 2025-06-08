import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";

function MobileSidebar({ isOpen, onClose, links, isHomePage }) {
  if (!isOpen) return null;
  const textColor = isHomePage ? "text-white" : "text-gray-800";
  const logoColor = isHomePage ? "text-white" : "text-gray-800";
  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-full w-56 md:w-64 flex-col justify-between bg-white p-2 transition-transform duration-300 ease-in-out ${
        isHomePage ? "bg-gradient-to-b from-blue-900 to-fuchsia-200" : ""
      }`}
    >
      <div>
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 ${
            isHomePage
              ? "text-white hover:text-fuchsia-200"
              : "text-fuchsia-500 hover:text-fuchsia-600"
          } text-2xl`}
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className={`mb-6 text-2xl font-bold ${logoColor}`}>Logo</div>
        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-md font-light ${
                  isActive
                    ? `${
                        isHomePage
                          ? "bg-fuchsia-600 text-fuchsia-100"
                          : "bg-fuchsia-400 text-white"
                      } rounded-sm p-1`
                    : `${textColor} hover:text-fuchsia-500`
                }`
              }
              onClick={onClose}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Button
        to="/contact"
        type="primary"
        onClick={onClose}
        className={
          isHomePage ? "bg-fuchsia-600 text-white" : "text-fuchsia-500"
        }
      >
        <FaPhoneAlt className="mr-1 inline-block" />
        Contact Us
      </Button>
    </aside>
  );
}

export default MobileSidebar;
