import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/index";
import ErrorPage from './views/Error 404/index'
import Registration from "./views/Registration/index";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <ErrorPage />
    ),
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
