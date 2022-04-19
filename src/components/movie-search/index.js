import React from "react";
import NavigationSidebar from "../NavigationSideBar";
import MovieSearchList from "./MovieSearch";

const SearchList = () => {
  const [searchQuery, serSearchQuery] = React.useState("");

  const pathParams = window.location.pathname.split("/");

  console.log("paths", pathParams);

  const handleSearch = (value) => {
    serSearchQuery(value);
  };

  React.useEffect(() => {
    if (pathParams.length >= 4) {
      serSearchQuery(pathParams[3]);
    }
  }, []);

  return (
    <div>
      <NavigationSidebar handleSearch={handleSearch} />
      <MovieSearchList searchQuery={searchQuery} />
    </div>
  );
};

export default SearchList;
