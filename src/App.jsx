import {
    createBrowserRouter,
    isRouteErrorResponse,
    redirect,
    RouterProvider,
    useRouteError,
} from "react-router";

import HomePage from "./pages/HomePage";
import LiveFeedPage from "./pages/LiveFeedPage";
import TrackPage from "./pages/TrackPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ReportingPage from "./pages/ReportingPage";
import ReportingReceiptPage from "./pages/ReportingReceiptPage";
import UserNotificationPage from "./pages/UserNotificationPage";
import UserFlowPage from "./pages/UserFlowPage";
import DetailReportPage from "./pages/DetailReportPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./pages/admin/AdminLayout";

import { verifyUserCredential } from "./lib/util";

import DefaultLayout from "./components/DefaultLayout";

import TopicContent from "./components/user/reporting/TopicContent";
import LocationContent from "./components/user/reporting/LocationContent";
import ProofContent from "./components/user/reporting/ProofContent";
import RiviewAndSendContent from "./components/user/reporting/RiviewAndSendContent";
import ComplainContent from "./components/user/flow/ComplainContent";
import NotificationsContent from "./components/user/flow/NotificationsContent";
import PrivacyAndDataContent from "./components/user/flow/PrivacyAndDataContent";
import ProfileContent from "./components/user/flow/ProfileContent";
import SecurityContent from "./components/user/flow/SecurityContent";
import EscalationDesk from "./components/admin/EscalationDesk";
import SLABenchmark from "./components/admin/SLABenchmark";
import Categories from "./components/admin/Categories";
import Agencies from "./components/admin/Agencies";
import ModerationBanner from "./components/admin/ModerationBanner";
import OfficerAccounts from "./components/admin/OfficerAccounts";
import store, { persistor } from "./redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "./redux/slices/users.slice";
import { categoriesActions } from "./redux/slices/categories.slice";

function rehydrateStore() {
    return new Promise((res) => {
        const ps = persistor.getState();
        if (ps?.bootstrapped) res();
        const unsubscribe = persistor.subscribe(() => {
            if (persistor.getState().bootstrapped) {
                unsubscribe();
                res();
            }
        });
    });
}

async function authMiddleware(arg, next) {
    await rehydrateStore();
    if (!verifyUserCredential(store.getState().users.users)) {
        throw redirect("/");
    }
    return await next();
}

async function authAdminMiddleware(arg, next) {
    await rehydrateStore();
    if (!(store.getState().user.currentLoginUser.role == "admin")) {
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
                children: [
                    {
                        index: true,
                        element: <TopicContent />,
                    },
                    {
                        path: "topic",
                        element: <TopicContent />,
                    },
                    {
                        path: "location",
                        element: <LocationContent />,
                    },
                    {
                        path: "proof",
                        element: <ProofContent />,
                    },
                    {
                        path: "riview-and-send",
                        element: <RiviewAndSendContent />,
                    },
                ],
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
                path: "/admin",
                element: <AdminLayout />,
                middleware: [authMiddleware,authAdminMiddleware],
                children: [
                    {
                        index: true,
                        element: <EscalationDesk />,
                    },
                    {
                        path: "escalation",
                        element: <EscalationDesk />,
                    },
                    {
                        path: "sla",
                        element: <SLABenchmark />,
                    },
                    {
                        path: "categories",
                        element: <Categories />,
                    },
                    {
                        path: "agencies",
                        element: <Agencies />,
                    },
                    {
                        path: "officer-accounts",
                        element: <OfficerAccounts />,
                    },
                    {
                        path: "moderation",
                        element: <ModerationBanner />,
                    },
                ],
            },
            {
                path: "/user",
                element: <UserFlowPage />,
                middleware: [authMiddleware],
                children: [
                    {
                        index: true,
                        element: <ComplainContent />,
                    },
                    {
                        path: "complaints",
                        element: <ComplainContent />,
                    },
                    {
                        path: "notifications",
                        element: <NotificationsContent />,
                    },
                    {
                        path: "privacy-data",
                        element: <PrivacyAndDataContent />,
                    },
                    {
                        path: "profile",
                        element: <ProfileContent />,
                    },
                    {
                        path: "security",
                        element: <SecurityContent />,
                    },
                ],
            },
            {
                path: "/track/detail/:id",
                element: <DetailReportPage />,
            },
        ],
    },
]);

export default function App() {

    const reduxDispatch = useDispatch();

    useEffect(() => {
        reduxDispatch(usersActions.fetchUserThunk(store.getState().users));
        reduxDispatch(categoriesActions.fetchCategoriesThunk());
    },[reduxDispatch]);

    return <RouterProvider router={router} />;
}
