import { Outlet, useLocation } from "react-router-dom";

import NavigationBar from "./NavigationBar";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <NavigationBar
        links={[
          { name: "Home", path: "/" },
          { name: "Appointment", path: "/appointment" },
          { name: "Blog", path: "/blog" },
          { name: "Contacts", path: "/contacts" },
        ]}
        isHomePage={isHomePage}
      />
      <Outlet />
    </div>
  );
}
export default AppLayout;
