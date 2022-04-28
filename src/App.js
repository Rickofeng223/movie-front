import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/home-screen/HomeScreen";
import MoviePage from "./components/movie-page";

import "./vendors/bootstrap/css/bootstrap.min.css"



import "./vendors/fontawesome/css/all.min.css";
import "./vendors/bootswatch/bootstrap.min.css";

import SearchList from "./components/movie-search";
import NavigationSidebar from "./components/NavigationSideBar";
import reviewReducer from "./components/reducers/review";

import ratingsReducer from "./components/reducers/ratingsReducer";
import searchReducer from "./components/reducers/searchReducers";

import { applyMiddleware, combineReducers, createStore } from "redux";


import UserReducer from './reducers/userReducer'


import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ProfileComponent from "./components/profile";
import Login from "./components/login";
import CreateAccount from "./components/create-account";
import AdminPage from "./components/admin-page";
import ratingsReducer from "./components/reducers/ratingsReducer";
const reducer = combineReducers({
  reviews: reviewReducer,
  ratings: ratingsReducer,
  searchMovies: searchReducer,
  currentUser:UserReducer,

});
const store = createStore(reducer, applyMiddleware(thunk));

//import "./vendors/jquery/jquery-3.6.0.min"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <NavigationSidebar />
          <Routes>
             <Route
                 path="/login"
                 exact={true}
                 element={<Login/>}
             />
             <Route
                 path="/signup"
                 exact={true}
                 element={<CreateAccount/>}
             />
              <Route
                  path="/admin"
                  exact={true}
                  element={<AdminPage/>}
              />
            <Route path="/">
              <Route path="/" element={<HomeScreen />} />
              <Route path="home" exact={true} element={<HomeScreen />} />
              <Route path="/home/search/:movie_name" element={<SearchList />} />
              <Route
                path="home/moviedetail"
                exact={true}
                element={<MoviePage /> }
              />

              <Route
                path="home/profile"
                exact={true}
                element={<ProfileComponent />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
