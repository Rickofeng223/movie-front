import React, { useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchForMovies, seartStartForMovies } from "../actions/searcActions";
import MovieSearchList from "../movie-search/MovieSearch";
import {logout} from "../../actions/userActions";
//import { useLocation } from "react-router-dom";

import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";

const NavigationSidebar = () => {
 
  const user = useSelector(e=>e.currentUser)

  const location = useLocation(); 
  
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




// import React, { useRef, useState } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { searchForMovies, seartStartForMovies } from "../actions/searcActions";
// import MovieSearchList from "../movie-search/MovieSearch";
// import {logout} from "../../actions/userActions";
// //import { useLocation } from "react-router-dom";

// import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";

// const NavigationSidebar = () => {
//   // console.log(window.location.href); // window location for url example: http://localhost:3000/tuiter/home
//   const user = useSelector(e=>e.currentUser)

//   const location = useLocation(); // get the current location
//   // console.log(location.pathname); // /tuiter/home
//   const locationArray = location.pathname.split("/");
//   // console.log(locationArray);
//   // console.log(locationArray[locationArray.length - 1]);
//   const currentPart = locationArray[locationArray.length - 1];
//   const pathParams = window.location.pathname.split("/");

//   const dispatch = useDispatch();


//   const [inputMovie, setInputMovie] = useState("");

//   //const searchRef = useRef();

//   const handleSearch = () => {
//     dispatch(seartStartForMovies());
//     dispatch(searchForMovies(inputMovie));
//   };

//   return (
// <<<<<<< HEAD
//     <nav className={`navbar navbar-expand-lg navbar-dark bg-primary`}>
//       <div className={`container-fluid`}>
//         <Link className={`navbar-brand animate-charcter`} to={"/home"}>
//           Movie Group Project
//         </Link>
//         <button
//           className={`navbar-toggler`}
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarColor01"
//           aria-controls="navbarColor01"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className={`navbar-toggler-icon`}></span>
//         </button>
// =======
// >>>>>>> main

//       <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
//         <Container>
//           <Navbar.Brand href="/home">Movie Group Project</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/home">Home</Nav.Link>
//               {user && user.role==="ADMIN" &&
//                   <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
//               { (user) &&
//                   <Nav.Link as={Link} to={`/profile/${user._id}`}>Profile</Nav.Link>}

//               {user ?
//                     <Nav.Link as={Link} to={'/'} onClick={() => logout({dispatch})}>Logout</Nav.Link>
//                     :
//                     <Nav.Link as={Link} to="/login">Login</Nav.Link>
//               }
//               {(!user) &&
//                   <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
//               }
//             </Nav>
//             <Form className="d-flex">
//               <FormControl
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search Movies"
//                   onChange={(x) => setInputMovie(x.target.value)}
//                   value={inputMovie}
//               />
//               <Link to={`/home/search/${inputMovie}`}>
//                 <Button variant="outline-success rounded-pill"
//                         type="submit"
//                         className="btn btn-secondary"
//                         onClick={handleSearch}>
//                   Search
//                 </Button>
//               </Link>
// <<<<<<< HEAD
//             </li>
//             <li className={`nav-item`}>
//               <a className={`nav-link`} href="#">
//                 Top List
//               </a>
//             </li>
//             <li className={`nav-item`}>
//               <a className={`nav-link`} href="#">
//                 Movie
//               </a>
//             </li>
//             <li className={`nav-item`}>
//               <Link className={`nav-link`} to="/home/profile">
//                 Profile
//               </Link>
//             </li>
//             {!user && (
//               <li className={`nav-item`}>
//                 <Link className={`nav-link`} to="/login">
//                   Login
//                 </Link>
//               </li>
//             )}
//             <li className={`nav-item dropdown`}>
//               <a
//                 className={`nav-link dropdown-toggle`}
//                 data-bs-toggle="dropdown"
//                 href="#"
//                 role="button"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <div className={`dropdown-menu`}>
//                 <a className={`dropdown-item`} href="#">
//                   Something else here
//                 </a>
//               </div>
//             </li>
//           </ul>
//           <form className={`d-flex`}>
//             <input
//               className={`form-control me-sm-2`}
//               type="text"
//               placeholder="Search Movies"
//               //ref={searchRef}
//               onChange={(x) => setInputMovie(x.target.value)}
//               value={inputMovie}
//             />
//             <Link to={`/home/search/${inputMovie}`}>
//               <button
//                 className={`btn btn-secondary my-2 my-sm-0`}
//                 type="submit"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </nav>
// =======
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>



// >>>>>>> main
//   );
// };
// export default NavigationSidebar;
