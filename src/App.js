import './App.css';
import React from 'react';
import MoviePage from "./components/movie-page";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/home-screen/HomeScreen';


import "./vendors/bootstrap/blue-SkyTh/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css"
//import "./vendors/jquery/jquery-3.6.0.min"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/" element={<HomeScreen />} />
            <Route path="home" exact={true} element={<HomeScreen />} />
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
