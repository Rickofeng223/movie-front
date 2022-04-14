import './App.css';

import MoviePage from "./components/movie-page";
import "./vendors/bootstrap/css/bootstrap.css"
import "./vendors/fontawesome/css/all.css"
import {useState} from "react";

function App() {
  return (
      <div className="container">
        <MoviePage/>
      </div>
  );
}

export default App;
