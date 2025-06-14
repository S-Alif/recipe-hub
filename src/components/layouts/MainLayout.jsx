import {Outlet} from "react-router"; // it is used to pass a component as children from the route itself
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className={"main-layout"}>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout