import { createBrowserRouter, RouterProvider } from "react-router";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import LiveFeedPage from "./pages/LiveFeedPage";
import TrackPage from "./pages/TrackPage";
import HowItWorksPage from "./pages/HowItWorksPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/live-feed",
        element: <LiveFeedPage/>
      },
      {
        path: "/track",
        element: <TrackPage/>
      },
      {
        path: "/how-it-works",
        element: <HowItWorksPage/>
      }
    ]
  }
]);

export default function App(){
  return (
    <RouterProvider router={router} />
  );
}