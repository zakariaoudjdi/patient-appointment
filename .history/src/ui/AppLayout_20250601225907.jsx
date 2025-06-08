import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar";

function AppLayout() {
  return (
    <>
      <NavigationBar
        links={[
          { name: "Home", path: "/" },
          { name: "Appointment", path: "/appointment" },
          { name: "Blog", path: "/blog" },
          { name: "Contacts", path: "/contacts" },
        ]}
      />
      <Outlet />
    </>
  );
}
export default AppLayout;
