
import React, { useRef, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import MovieSearchList from "../movie-search/MovieSearch";
//import { useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  console.log(window.location.href); // window location for url example: http://localhost:3000/tuiter/home
  const location = useLocation(); // get the current location
  console.log(location.pathname); // /tuiter/home
  const locationArray = location.pathname.split("/");
  console.log(locationArray);
  console.log(locationArray[locationArray.length - 1]);
  const currentPart = locationArray[locationArray.length - 1];

  const [inputMovie,setInputMovie] = useState("");

  const searchRef = useRef();
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-primary`}>
      <div className={`container-fluid`}>
        <a className={`navbar-brand`} href="#">
          Movie Group Project
        </a>
        <button
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon`}></span>
        </button>

        <div className={`collapse navbar-collapse`} id="navbarColor01">
          <ul className={`navbar-nav me-auto`}>
            <li className={`nav-item `}>
              <Link to={"/home"} className={`nav-link `}>
                Home
              </Link>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href="#">
                Top List
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href="#">
                Movie
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href="#">
                Profile
              </a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href="#">
                Login
              </a>
            </li>
            <li className={`nav-item dropdown`}>
              <a
                className={`nav-link dropdown-toggle`}
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className={`dropdown-menu`}>
                <a className={`dropdown-item`} href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className={`d-flex`}>
            <input
              className={`form-control me-sm-2`}
              type="text"
              placeholder="Search Movies"
              //ref={searchRef}
              onChange={(x)=> setInputMovie(x.target.value)}
              value = {inputMovie}
            />
            <Link to={"/home/search"}>
              <button
                className={`btn btn-secondary my-2 my-sm-0`}
                type="submit"
                onClick={MovieSearchList.searchByTitle}
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationSidebar;
