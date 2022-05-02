import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {searchForMovies, seartStartForMovies, START_SEARCH_FOR_MOVIE} from "../actions/searcActions";
import {logout} from "../../actions/userActions";
//import { useLocation } from "react-router-dom";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const NavigationSidebar = () => {

    // console.log(window.location.href); // window location for url example: http://localhost:3000/tuiter/home
    const user = useSelector(e => e.currentUser)

    const location = useLocation(); // get the current location
    const locationArray = location.pathname.split("/");
    const navigate = useNavigate()
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    const [inputMovie, setInputMovie] = useState("");

    const oc_nav = (pathname) => {
        const search = `?uid=${user._id || query.get("uid")}`
        console.log(search)
        navigate({pathname, search})
    }
    const handleSearch = () => {
        dispatch({
            type: START_SEARCH_FOR_MOVIE,
        });
        dispatch(searchForMovies(inputMovie));
    };
    const _navigate = (pathname) => () => navigate({pathname, search: `?uid=${user ? user._id : query.get("uid")}`})
    return (

        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={{
              pathname: '/home',
              search: (user || query.uid) ? `?uid=${user ? user._id : query.get("uid")}` : ''
          }}>Movie Group Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                {user && user.role === "ADMIN" &&
                <Nav.Link as={Link} to={{pathname: '/admin', search: `?uid=${user ? user._id : query.get("uid")}`}}>
                  Admin                </Nav.Link>
                }

                {user &&
                <Nav.Link as={Link}
                          to={
                              {pathname: '/profile', search: `?uid=${user ? user._id :  query.get("uid")}`}
                          }>
                  Profile
                </Nav.Link>}

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
              <Link to={{
                  pathname: `/home/search/${inputMovie}`, search: `?${
                      user ? 'uid=' + user._id + '&' : ''
                  }search=${inputMovie}`
              }}>
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

function LoggedInComponent({user, predicate, InnerComponent}) {
    return <Nav.Item>  {predicate(user) && <InnerComponent/>} </Nav.Item>
}
