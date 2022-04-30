import "./App.css";
import React, {useEffect} from "react";
import {BrowserRouter, Outlet, Route, Routes, useSearchParams} from "react-router-dom";
import HomeScreen from "./components/home-screen/HomeScreen";
import MoviePage from "./components/movie-page";
import "./vendors/bootstrap/css/bootstrap.min.css"
import "./vendors/fontawesome/css/all.min.css";
import "./vendors/bootswatch/bootstrap.min.css";
import SearchList from "./components/movie-search";

import reviewReducer from "./components/reducers/review";

import ratingsReducer from "./components/reducers/ratingsReducer";
import searchReducer from "./components/reducers/searchReducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import UserReducer from './reducers/userReducer'
import {Provider, useDispatch, useSelector} from "react-redux";
import thunk from "redux-thunk";
import ProfileComponent from "./components/profile";
import EditProfileComponent from "./components/edit-profile/index";
import Login from "./components/login";
import CreateAccount from "./components/create-account";
import AdminPage from "./components/admin-page";
import UsersReducer from "./reducers/admin-users-reducer";
import NavigationSidebar from "./components/NavigationSideBar";
import {getUserState} from "./actions/userActions";


const reducer = combineReducers({
    reviews: reviewReducer,
    ratings: ratingsReducer,
    searchMovies: searchReducer,
    currentUser: UserReducer,
    users: UsersReducer
});
const store = createStore(reducer, applyMiddleware(thunk));


function OutletStateComponent() {
    const user = useSelector(e => e.currentUser)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(() => {
        let queryied = user? user._id :query.get("uid")
        console.log('queried: '+queryied)
        if (user&& user._id) {
            setQuery({uid: user._id})
            console.log('set: '+user._id)
        } else if (queryied) {
            getUserState(query.get("uid"),  dispatch )
            console.log('set: '+query.get("uid"))
        }

    }, [dispatch])
    return <>
    <NavigationSidebar/>
    <Outlet/>
        </>;
}

function App() {
    return (
        <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<OutletStateComponent/>}>
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
