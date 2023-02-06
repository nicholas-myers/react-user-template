import { Button, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between p-3">
      <h1>Site Name</h1>
      <Nav className="w-50 justify-content-around">
        <NavItem>
          <Link to="signup">
            <Button>Signup</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="login">
            <Button>Login</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">
            <Button>Logout</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="profile">
            <Button>Profile</Button>
          </Link>
        </NavItem>
      </Nav>
    </header>
  );
};

export default Header;
