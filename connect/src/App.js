import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { About } from "./About";
import { AllCategories } from "./AllCategories";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import {PrivateRoute} from "./utils/PrivateRoute";
import Profile from "./components/Profile";
//changes were made 
function App() {
    return (
    <Router>
    <AuthProvider>
      <header className="p-3 bg-dark text-white">
        <div className="container">
            <h1 href="#">Supply Chain Agregator</h1>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

              <li>
                <Link to="/" className="nav-link px-2 text-white">
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
              <NavDropdown className="px-2 text-white" title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/Category1"}>
                  Category1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Category2"}>
                  Category2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Category3"}>
                  Category3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/AllCategories"}>
                  All Categories
                </NavDropdown.Item>
              </NavDropdown>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllCategories" element={<AllCategories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
