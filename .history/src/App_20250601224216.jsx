import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AppLayout from "./ui/AppLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/appointment",
        element: <AppointmentPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
