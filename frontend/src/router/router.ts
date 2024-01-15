import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import SelectMatch from "../views/selectMatch/selectMatch";
import Autonomous from "../views/autonomous/autonomous";
import Teleop from "../views/teleop/teleop";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/select',
        Component: SelectMatch
    },
    {
        path: '/autonomous',
        Component: Autonomous
    },
    {
        path: '/teleop',
        Component: Teleop
    }
]);

export default router;