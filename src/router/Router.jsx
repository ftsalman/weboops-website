import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { HomePage } from "../pages/HomePage";
import { TemplatesPage } from "../pages/TemplatesPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/template",
        element: <TemplatesPage />,
      },
    ],
  },
]);
