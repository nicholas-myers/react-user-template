import { Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <h1>Site Name</h1>
      <Nav>
        <NavItem>Login</NavItem>
        <NavItem>Logout</NavItem>
        <NavItem>Profile</NavItem>
      </Nav>
    </header>
  );
};

export default Header;
