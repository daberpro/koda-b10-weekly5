import { createBrowserRouter, RouterProvider } from "react-router";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
]);

export default function App(){
  return (
    <RouterProvider router={router} />
  );
}