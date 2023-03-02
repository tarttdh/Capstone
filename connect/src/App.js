import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { About } from "./About";
import { AllCategories } from "./AllCategories";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import { PrivateRoute } from "./utils/PrivateRoute";
import Profile from "./components/Profile";
import ArticleDetails from "./ArticleDetails";
//changes were made
function App() {
  return (
    <Router>
       
      <AuthProvider>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <h1 href="#">Supply Chain Aggregator</h1>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/Home" className="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="nav-link px-2 text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className="nav-link px-2 text-white">
                    Profile
                  </Link>
                </li>
              </ul>
              <div className="text-end">
                <Link to="/login" className="btn btn-outline-light me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-outline-light me-2">
                  Register
                </Link>

              </div>
            </div>
          </div>
          </header>
          <Nav bg="primary" variant="dark">
            <Nav.Link as={Link} to={"/Category1"}>Category1</Nav.Link>
            <Nav.Link as={Link} to={"/Category2"}>Category2</Nav.Link>
            <Nav.Link as={Link} to={"/Category3"}>Category3</Nav.Link>
            <Nav.Link as={Link} to={"/Category4"}>Category4</Nav.Link>
            <Nav.Link as={Link} to={"/Category5"}>Category5</Nav.Link>
            <Nav.Link as={Link} to={"/Category6"}>Category6</Nav.Link>
            <Nav.Link as={Link} to={"/Category7"}>Category7</Nav.Link>
          </Nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<AllCategories />} />
          <Route path="/About" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Home/details" element={<ArticleDetails />} />

          
          {/* <Route path= "/Home/details" element={<ArticleDetails />} /> */}


        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
