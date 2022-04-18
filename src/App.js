import './App.css';

import MoviePage from "./components/movie-page";
import "./vendors/bootstrap/css/bootstrap.css"
import "./vendors/bootswatch/bootstrap.min.css"
import "./vendors/fontawesome/css/all.css"

function App() {
  return (
      <div className="container">
        <MoviePage/>
      </div>
  );
}

export default App;
