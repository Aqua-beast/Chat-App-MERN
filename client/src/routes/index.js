import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckEmail from "../pages/CheckEmail";
import CheckPassword from "../pages/CheckPassword";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout/index";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <AuthLayouts><RegisterPage /></AuthLayouts>,
      },
      {
        path: "email",
        element: <AuthLayouts><CheckEmail /></AuthLayouts>,
      },
      {
        path: "password",
        element: <AuthLayouts><CheckPassword /></AuthLayouts>,
      },
      {
        path: "forgot-password",
        element: <AuthLayouts><ForgotPassword /></AuthLayouts>,
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ':userId',
            element: <MessagePage />,
          }
        ]
      }
    ],
  },
]);

export default router;
