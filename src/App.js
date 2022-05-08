import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/movie_page_home/home_screen/HomeScreen";
import MoviePage from "./components/movie_details";
import "./vendors/bootstrap/css/bootstrap.min.css"
import "./vendors/fontawesome/css/all.min.css";
import "./vendors/bootswatch/bootstrap.min.css";
import SearchList from "./components/movie-search";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ProfileComponent from "./components/profile/profile";
import EditProfileComponent from "./components/profile/edit-profile/index";
import Login from "./components/auth/login";
import CreateAccount from "./components/auth/create-account";
import AdminPage from "./components/auth/admin-page";
import NavigationSidebar from "./components/NavigationSideBar";
import {ratingsReducer, reviewReducer, searchReducer, userReducer, usersReducer} from "./reducers";

;


const reducer = combineReducers({
    reviews: reviewReducer,
    ratings: ratingsReducer,
    searchMovies: searchReducer,
    currentUser: userReducer,
    users: usersReducer
});
const store = createStore(reducer, applyMiddleware(thunk));



function App() {
    return (
        <Provider store={store}>
      <BrowserRouter>
        <div className="container">
                <NavigationSidebar/>

          <Routes>
            <Route path="/" >
             <Route
                 path="login"
                 exact={true}
                 element={<Login/>}
             />
             <Route
                 path="signup"
                 exact={true}
                 element={<CreateAccount/>}
             />
              <Route
                  path="admin"
                  exact={true}
                  element={<AdminPage/>}
              />

              <Route index element={<HomeScreen/>}/>
              <Route path="home" exact={true} element={<HomeScreen/>}/>
              <Route path="home/search/:movie_name" element={<SearchList/>}/>
              <Route
                  path={"home/moviedetail"}
                  exact={true}
                  element={<MoviePage/>}
              />

              <Route

                  path="profile"
                  exact={true}
                  element={<ProfileComponent/>}

              />

                <Route
                    path="profile/edit"
                    exact={true}
                    element={<EditProfileComponent/>}
                />

             </Route>

          </Routes>

        </div>
      </BrowserRouter>
    </Provider>
    );
}

export default App;
