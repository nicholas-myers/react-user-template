import { useRouteError } from "react-router-dom";
import Header from "./components/Header";

const ErrorView = () => {
  const error: any = useRouteError();
  console.log(error);
  return (
    <div id="error-page">
      <Header />
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Error:
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorView;
