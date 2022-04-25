import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/home-screen/HomeScreen";
import MoviePage from "./components/movie-page";
import CreateAccount from "./components/create-account";

import "./vendors/bootstrap/blue-SkyTh/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import SearchList from "./components/movie-search";
import NavigationSidebar from "./components/NavigationSideBar";
import reviewReducer from "./components/reducers/review";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ProfileComponent from "./components/profile";
const reducer = combineReducers({
  reviews: reviewReducer,
});
const store = createStore(reducer);

//import "./vendors/jquery/jquery-3.6.0.min"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <NavigationSidebar />
          <Routes>
            <Route path="/">
              <Route path="/" element={<HomeScreen />} />
              <Route path="home" exact={true} element={<HomeScreen />} />
              <Route path="/home/search/:movie_name" element={<SearchList />} />
              <Route
                path="home/moviedetail"
                exact={true}
                element={<MoviePage />}
              />
              <Route
                path="home/createAccount"
                exact={true}
                element={<CreateAccount />}
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
