import React, { useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchForMovies, seartStartForMovies } from "../actions/searcActions";
import MovieSearchList from "../movie-search/MovieSearch";
//import { useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  // console.log(window.location.href); // window location for url example: http://localhost:3000/tuiter/home

  const user = useSelector((x) => x.currentUser)

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
    <nav className={`navbar navbar-expand-lg navbar-dark bg-primary`}>
      <div className={`container-fluid`}>
        <Link className={`navbar-brand`} to={"/home"}>
          Movie Group Project
        </Link>
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
              <Link className={`nav-link`} to="/home/profile">
                Profile
              </Link>
            </li>
            {(!user) && <li className={`nav-item`}>
              <Link className={`nav-link`} to="/login">
                Login
              </Link>
            </li>}
          </ul>
          <form className={`d-flex`}>
            <input
              className={`form-control me-sm-2`}
              type="text"
              placeholder="Search Movies"
              //ref={searchRef}
              onChange={(x) => setInputMovie(x.target.value)}
              value={inputMovie}
            />
            <Link to={`/home/search/${inputMovie}`}>
              <button
                className={`btn btn-secondary my-2 my-sm-0`}
                type="submit"
                onClick={handleSearch}
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
