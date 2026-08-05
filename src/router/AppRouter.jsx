import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import Login from '../pages/login/Login';
import { PrivateRouter } from './PrivateRouter';
import NotFound from '../pages/notFound/NotFound';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRouter />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details/:id" element={<Details />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};
export default AppRouter;