import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DefaultLayout(){
    return (
        <>
            <Navbar/>
            <main className="w-full min-h-screen bg-brand-main">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}