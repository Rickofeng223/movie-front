import React from "react";
import ActMovies from "./Action/index";
import NavigationSidebar from "../NavigationSideBar";

import homeReducer from "../reducers/home-reducers";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import Horror from "./Horror";
import UpcomingMovies from "./UpComing";

//fetch()
// https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
///zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg
// api_key=f48cf3e24ec9e89cc63cc40d1d8975c1

const reducer = combineReducers({
  home: homeReducer
});

const store = createStore(reducer);

const HomeScreen = () => {
  return (
    <Provider store={store}>
      <div>
        <NavigationSidebar />
        <h1>New Release</h1>
        <UpcomingMovies/>
        <h1>Action</h1>
        <ActMovies />
        <h1>Horror</h1>
        <Horror/>
        
       
      </div>
    </Provider>
  );
};
export default HomeScreen;
