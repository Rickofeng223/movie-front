import React, { useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchForMovies, seartStartForMovies } from "../actions/searcActions";
import MovieSearchList from "../movie-search/MovieSearch";
import {logout} from "../../actions/userActions";
//import { useLocation } from "react-router-dom";

import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";

const NavigationSidebar = () => {
  // console.log(window.location.href); // window location for url example: http://localhost:3000/tuiter/home
  const user = useSelector(e=>e.currentUser)

  const location = useLocation(); // get the current location
  // console.log(location.pathname); // /tuiter/home
  const locationArray = location.pathname.split("/");
  // console.log(locationArray);
  // console.log(locationArray[locationArray.length - 1]);
  const currentPart = locationArray[locationArray.length - 1];
  const pathParams = window.location.pathname.split("/");

  const dispatch = useDispatch();


  const [inputMovie, setInputMovie] = useState("");

  //const searchRef = useRef();

  const handleSearch = () => {
    dispatch(seartStartForMovies());
    dispatch(searchForMovies(inputMovie));
  };

  return (

      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Movie Group Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              {user && user.role==="ADMIN" &&
                  <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
              { (user) &&
                  <Nav.Link as={Link} to={`/profile/${user._id}`}>Profile</Nav.Link>}

              {user ?
                    <Nav.Link as={Link} to={'/'} onClick={() => logout({dispatch})}>Logout</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              {(!user) &&
                  <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
              }
            </Nav>
            <Form className="d-flex">
              <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search Movies"
                  onChange={(x) => setInputMovie(x.target.value)}
                  value={inputMovie}
              />
              <Link to={`/home/search/${inputMovie}`}>
                <Button variant="outline-success rounded-pill"
                        type="submit"
                        className="btn btn-secondary"
                        onClick={handleSearch}>
                  Search
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



  );
};
export default NavigationSidebar;
