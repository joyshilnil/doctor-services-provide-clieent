
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
          alert('Logout Succesfull');
        })
        .catch(error => console.error(error))
      }
    
  const menuItems = (
    <Nav>
        <Link className="text-decoration-none text-black" to="/">Home</Link>  
        <Link className="text-decoration-none text-black" to="/blog">Blog</Link>  
      {user?.email ? (
        <>
        <Link className="text-decoration-none text-black" to="/services">Services</Link>
        <button onClick={handleLogOut}  className="btn btn-danger">LogOut</button>
        </>
      ) : (
        <Link to='/login' className="text-decoration-none text-black">Login</Link>
      )}
    </Nav>
  );
  return (
    <div className="nav-ber">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Link to='/'>
                <img src={logo} style={{ width: '50px' }} alt='logo'></img>
                <Navbar.Brand className="text-decoration-none">Docotor</Navbar.Brand>                
            </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {menuItems}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
