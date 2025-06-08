import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/appointment",
    element: <AppointmentPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
