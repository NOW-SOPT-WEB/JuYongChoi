import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home/Home";
import LoginPage from "@pages/Login/Login";
import SignUpPage from "@pages/Signup/Signup";
import MyPage from "@pages/MyPage/MyPage";

import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { element: <LoginPage />, index: true },
      { path: ":authenticationId", element: <Home /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "mypage/:authenticationId", element: <MyPage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
