import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import SelectMatch from "../views/selectMatch/selectMatch";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/select',
        Component: SelectMatch
    }
]);

export default router;