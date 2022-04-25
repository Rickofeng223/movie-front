import React from "react";
import MovieSearchList from "./MovieSearch";

const SearchList = () => {
  const [searchQuery, serSearchQuery] = React.useState("");

  const pathParams = window.location.pathname.split("/");

  React.useEffect(() => {
    if (pathParams.length >= 4) {
      serSearchQuery(pathParams[3]);
    }
  }, [pathParams]);

  return (
    <div>
      <MovieSearchList searchQuery={searchQuery} />
    </div>
  );
};

export default SearchList;
