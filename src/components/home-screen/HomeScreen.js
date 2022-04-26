import React from "react";
import Movies from "./movies/index";
import movieCategories from "../data/movieCategories.json"


const HomeScreen = () => {
  // const [movieList, setMovieList] = React.useState([]);

  // React.useEffect(() => {
  //   axios.get("").then((response) => {
  //     setMovieList(response.data);
  //   });
  // }, []);

  return (
    <div>
      {movieCategories.map((val, key) => {
        return <Movies key={key} movieType={val.title} dataUrl={val.dataUrl} />;
      })}
    </div>
  );
};
export default HomeScreen;
