import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavigationBar
        links={[
          { name: "Home", path: "/" },
          { name: "Appointment", path: "/appointment" },
          { name: "Blogs", path: "/blogs" },
          { name: "Contacts", path: "/contacts" },
        ]}
        isHomePage={isHomePage}
      />
      <Outlet />
    </>
  );
}
export default AppLayout;
