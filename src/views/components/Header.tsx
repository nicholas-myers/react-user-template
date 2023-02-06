import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../state/userActions";
import { Button, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className="d-flex justify-content-between p-3">
      <h1>Site Name</h1>
      <Nav className="w-50 justify-content-around">
        {isLoggedIn === false && (
          <>
            <NavItem>
              <Link to="signup">
                <Button>Signup</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="login">
                <Button onClick={() => login(dispatch)}>Login</Button>
              </Link>
            </NavItem>
          </>
        )}
        {isLoggedIn === true && (
          <>
            <NavItem>
              <Link to="/">
                <Button onClick={() => logout(dispatch)}>Logout</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="profile">
                <Button>Profile</Button>
              </Link>
            </NavItem>
          </>
        )}
      </Nav>
    </header>
  );
};

export default Header;
