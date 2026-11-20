import {
    createBrowserRouter,
    createContext,
    isRouteErrorResponse,
    redirect,
    RouterProvider,
    useRouteError,
} from "react-router";
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
import { getUserData, verifyUserCredential } from "./lib/util";
import { UserContext } from "./lib/contexts";
import { useState } from "react";
import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage";

async function authMiddleware({ context }, next) {
    if (!verifyUserCredential()) {
        throw redirect("/");
    }
    return await next();
}

function RootErrorBoundary() {
    let error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return <ErrorPage error={error} />;
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        ErrorBoundary: RootErrorBoundary,
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
                element: <ReportingPage />,
                middleware: [authMiddleware],
            },
            {
                path: "/reporting/receipt",
                element: <ReportingReceiptPage />,
                middleware: [authMiddleware],
            },
            {
                path: "/notification",
                element: <UserNotificationPage />,
                middleware: [authMiddleware],
            },
            {
                path: "/user",
                element: <UserFlowPage />,
                middleware: [authMiddleware],
            },
            {
                path: "/track/detail/:id",
                element: <DetailReportPage />,
            },
        ],
    },
]);

export default function App() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (verifyUserCredential()) {
            setUserData(getUserData());
        }
    }, []);
    return (
        <UserContext.Provider value={[userData, setUserData]}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}
