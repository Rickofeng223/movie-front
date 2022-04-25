import React from "react";
import Movies from "./movies/index";

const movieCategories = [
  {
    title: "New Release",
    dataUrl:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&language=en-US&page=1",
  },
  {
    title: "Action",
    dataUrl:
      "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=28",
  },
  {
    title: "Horror",
    dataUrl:
      "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=27",
  },
];

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
