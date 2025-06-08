import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

function AppLayout() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const Url = window.location.pathname;
    if (Url === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, []);
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
