import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DefaultLayout(){
    return (
        <>
            <Navbar/>
            <main className="flex flex-col justify-center items-center w-full bg-brand-main py-12">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}
