import './App.css';
import "./vendors/bootstrap/css/bootstrap.css"
import "./vendors/bootswatch/bootstrap.min.css"
import "./vendors/fontawesome/css/all.css"

import MoviePage from "./components/movie-page";
import Login from "./components/login";
import CreateAccount from "./components/create-account";

function App() {
  return (
      <div className="container">
        <CreateAccount/>
      </div>
  );
}

export default App;
