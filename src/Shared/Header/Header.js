
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
    <Nav className='align-items-center'>
        <Link className="text-decoration-none text-black me-3" to="/">Home</Link>  
        <Link className="text-decoration-none text-black me-3" to="/blog">Blog</Link>          
        <Link className="text-decoration-none text-black me-3" to="/services">Services</Link>         
        <Link className="text-decoration-none text-black me-3" to="/addservices">Add Service</Link>       
      {user?.email ? (
        <>        
        <button onClick={handleLogOut}  className="btn btn-danger me-3">LogOut</button>
        </>
      ) : (
        <Link to='/login' className="text-decoration-none text-black btn btn-primary me-3 text-white">Login</Link>
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
          <Nav className="me-auto">
            </Nav>
            {menuItems}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
