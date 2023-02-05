import Header from "./components/Header";
import "./styles/index.css";
import { Outlet } from "react-router-dom";

const AppView = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default AppView;
