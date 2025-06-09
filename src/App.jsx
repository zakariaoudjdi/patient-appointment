import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import AllBlogs from "./ui/AllBlogs.jsx";

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
      {
        path: "/blogs",
        element: <BlogPage />,
        children: [
          {
            index: true,
            element: <AllBlogs />,
          },
          { path: ":blogId", element: <BlogPost /> },
        ],
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
