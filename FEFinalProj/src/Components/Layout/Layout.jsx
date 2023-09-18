import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <div className="App">
            <Nav/>
            <div className="page">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}