import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


export const PrivateRouter = () => {
    const user = localStorage.getItem('user');
    return user ? (
        <>
            <Navbar />
            <Outlet />
        </>
    ) :
        (<Navigate to='/login' />)
}