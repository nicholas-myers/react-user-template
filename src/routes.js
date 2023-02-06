import App from "./App";
import ErrorView from "./views/ErrorView";
import LoginView from "./views/users/LoginView";
import ProfileView from "./views/users/ProfileView";
import ProtectedRoute from "./views/users/ProtectedRoute";
import SignupView from "./views/users/SignupView";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "",
        element: <ProtectedRoute />,
        children: [{ path: "profile", element: <ProfileView /> }],
      },
      { path: "signup", element: <SignupView /> },
      { path: "login", element: <LoginView /> },
    ],
  },
];
