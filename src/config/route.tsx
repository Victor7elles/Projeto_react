import path from "path";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Outlet,
    useParams,
}   from "react-router-dom";
import Login from "../pages/login";
import Salas from "../pages/salas";


const routers = [{
    path: "/login",
    element: <Login />,
} , {
    path: "/salas",
    element: <Salas />,
}]



const router = createBrowserRouter(
    createRoutesFromElements(
        (routers.map((route, index) => {
            return <Route path={route.path} element={route.element} />
        }))
    )
);

export default router

