import { FaBars } from "react-icons/fa";

function MobileHeader({ isHomePage, onOpenMenu }) {
  return (
    <header
      className={`flex items-center justify-between px-2 py-4 md:hidden ${isHomePage ? "absolute left-0 right-0 top-0 z-10 text-white" : ""}`}
    >
      <div
        className={`text-2xl font-bold ${isHomePage ? "text-white" : "text-gray-800"}`}
      >
        Logo
      </div>
      <button
        onClick={onOpenMenu}
        className={`${isHomePage ? "text-white" : "text-gray-800"} text-2xl`}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default MobileHeader;
