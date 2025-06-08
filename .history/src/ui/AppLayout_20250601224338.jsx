import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function AppLayout() {
  const Url = window.location.href;
  const isHomePage = Url.endsWith("/");
  const isAppointmentPage = Url.includes("/appointment");

  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
export default AppLayout;
