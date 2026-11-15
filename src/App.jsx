import { createBrowserRouter, RouterProvider } from "react-router";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import LiveFeedPage from "./pages/LiveFeedPage";
import TrackPage from "./pages/TrackPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ReportingPage from "./pages/ReportingPage";
import ReportingReceiptPage from "./pages/ReportingReceiptPage";
import UserNotificationPage from "./pages/UserNotificationPage";
import UserFlowPage from "./pages/UserFlowPage";
import DetailReportPage from "./pages/DetailReportPage";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/live-feed",
                element: <LiveFeedPage />,
            },
            {
                path: "/track",
                element: <TrackPage />,
            },
            {
                path: "/how-it-works",
                element: <HowItWorksPage />,
            },
            {
                path: "/reporting",
                element: <ReportingPage />
            },
            {
                path: "/reporting/receipt",
                element: <ReportingReceiptPage/>
            },
            {
                path: "/user/notification",
                element: <UserNotificationPage/>
            },
            {
                path: "/user",
                element: <UserFlowPage/>
            },
            {
                path: "/track/detail",
                element: <DetailReportPage/>
            }
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
