const ActionUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=35";

export const getAction = async () => {
  const response = await axios.get(`${ActionUrl}`);
  setMovies(response.data.results.slice(0, 10));
  setLoaded(true);
};

import axios from "axios";
export const url = "http://localhost:4000/api";
export const getMovieByTID = (id) => axios.get(`${url}/movies/tid/${id}`);
export const getMovies = getMovieByID,
  getMovieByID = (id = "") => axios.get(`${url}/movies/${id}`);
export const createReview = (body) => axios.post(`${url}/reviews`, body);
export const getReviewByID = getReview,
  getReview = (id = "") => axios.get(`${url}/reviews/${id}`);
export const updateReview = (id, body) =>
  axios.put(`${url}/reviews/${id}`, body);
export const deleteReview = (id = "") => axios.delete(`${url}/reviews/${id}`);

export const createRating = (id, body) => axios.post(`${url}/ratings`, body);
export const getRating = getRatingByID,
  getRatingByID = (id = "") => axios.get(`${url}/ratings/${id}`);
export const updateRating = (id, body) =>
  axios.put(`${url}/ratings/${id}`, body);
export const deleteRating = (id) => axios.delete(`${url}/ratings/${id}`);

export const getUsers = axios.get(`${url}/users`);
export const getUserByID = axios.get(`${url}/users/${id}`);
export const updateUser = (id, body) => axios.put(`${url}/users/${id}`, body);
export const deleteUser = (id) => axios.delete(`${url}/users/${id}`);
export const criticsGet = (id = "") => axios.get(`${url}/critics/${id}`);
export const criticsPut = (id, body) => axios.put(`${url}/critics/${id}`, body);
export const setSessionVariable = (key, val) =>
  axios.get(`${url}/session/set/${key}/${val}`);
export const getSessionVariable = axios.get(`${url}/session/get/${key}`);
export const getSession = axios.get(`${url}/session/get`);
export const resetSession = axios.get(`${url}/session/reset`);
export const signup = (body) => axios.post(`${url}/auth/signup`, body);
export const login = (body) => axios.post(`${url}/auth/login`, body);
export const logout = () => axios.post(`${url}/auth/logout`);
