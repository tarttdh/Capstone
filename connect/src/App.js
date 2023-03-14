import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import { AllCategories } from "./AllCategories";
import Nav from "react-bootstrap/Nav";
import Profile from "./components/Profile";
import ArticleDetails from "./ArticleDetails";
import { useAuth0 } from '@auth0/auth0-react';
import Button from "react-bootstrap/esm/Button";

//changes were made
function App() {
  const { user, isLoading, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <Router>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <h1 href="#">Supply Chain Aggregator </h1>
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
              </ul>

              {/* diplays userprofile is logged in  */}
              <div className="text-center">
                  {isAuthenticated && (
                  <div>
                    <img className="round-img" style={{width: "40px", height: "40px", borderRadius: "25px"}} src={user.picture} alt={user.name} />
                    <p  style={{ fontSize: "10px", marginRight: "15px" }} >Welcome {user.name}!</p>
                   </div>
                  )}
              </div>



              <div className="text-end">
                
                <Button className="btn btn-outline-light me-2" onClick={() => loginWithRedirect()}>
                  Login
                </Button>
                <Button className="btn btn-outline-light me-2" onClick={() => logout()}>
                  logout
                </Button>
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
          <Route path="/" element={<AllCategories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/details" element={<ArticleDetails />} />


        </Routes>
    </Router>
  );
}

export default App;
