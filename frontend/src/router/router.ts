import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    }
]);

export default router;