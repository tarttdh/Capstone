import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import{
    BrowserRouter as Router, 
    Switch, 
    Route,
    Link
} from 'react-router-dom';
import Homefeed from "./Homefeed";
import Login from "./Register/Login";
import Signup from "./Register/Signup";
import Category1 from "./Categories/Category1";
import Category2 from "./Categories/Category2";
import Category3 from "./Categories/Category3";
import AllCategories from "./Categories/AllCategories";
import About from "./About";
import Profile from "./Profile";


function NavComp() {
  return (
    <Router>
    <div>
    <Navbar bg="dark" variant= {"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Supply Chain Agregator</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to={"/homefeed"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/Profile"}>Profile</Nav.Link>
            <NavDropdown  title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/Category1"}>Category1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Category2"}>Category2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Category3"}>Category3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/AllCategories"}>
                All Categories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/Signup"}>Signup</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    <div>
        <Switch>
        <Route path="/homefeed">
            <Homefeed />
        </Route>
        <Route path="/Category1">
            <Category1 />
        </Route>
        <Route path="/Category2">
            <Category2 />
        </Route>
        <Route path="/Category3">
            <Category3 />
        </Route>
        <Route path="/AllCategories">
            <AllCategories />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/Signup">
            <Signup />
        </Route>
        <Route path="/About">
            <About />
        </Route>
        <Route path="/Profile">
            <Profile/>
        </Route>
        </Switch>
    </div>
    </Router>
    

  );
}

export default NavComp;
