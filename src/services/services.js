const ActionUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=35";

export const getAction = async () => {
  const response = await axios.get(`${ActionUrl}`);
  setMovies(response.data.results.slice(0, 10));
  setLoaded(true);
};
