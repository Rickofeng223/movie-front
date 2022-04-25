import './App.css';

import MoviePage from "./components/movie-page";
import "./vendors/bootstrap/css/bootstrap.css"
import "./vendors/bootswatch/bootstrap.min.css"
import "./vendors/fontawesome/css/all.css"

import reviewReducer from "./components/reducers/review";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileComponent from "./components/profile";
const reducer = combineReducers({
    reviews: reviewReducer
});
const store = createStore(reducer);

function App() {
  return (

      <Provider store={store}>
          <div className="container">
              <ProfileComponent/>
          </div>
      </Provider>

  );
}

export default App;
