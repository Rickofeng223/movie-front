import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/home-screen/HomeScreen';


import "./vendors/bootstrap/blue-SkyTh/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css"
import SearchList from './components/movie-search';

//import "./vendors/jquery/jquery-3.6.0.min"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/" element={<HomeScreen />} />
            <Route path="home" exact={true} element={<HomeScreen />} />
            <Route path="/home/search" element={<SearchList/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
