import { Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import NotFound from "../pages/notFound/NotFound";



export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
