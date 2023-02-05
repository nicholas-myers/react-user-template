import App from "./App";
import ErrorView from "./views/ErrorView";
import ProfileView from "./views/ProfileView";
import SignupView from "./views/SignupView";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      { path: "profile", element: <ProfileView /> },
      { path: "signup", element: <SignupView /> },
    ],
  },
];
