import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const queryClient = new QueryClient();

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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </QueryClientProvider>
  );
}

export default App;
