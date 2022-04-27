import axios from "axios";
const url = "http://localhost:4000";

export const getUsers = (id = "") => axios.get(`${url}/api/users/${id}`);
export const putUsers = (id, data) => axios.put(`${url}/api/users/${id}`, data);
export const deleteUsers = (id) => axios.delete(`${url}/api/users/${id}`);
export const getRatings = (id = "") => axios.get(`${url}/api/ratings/${id}`);
export const putRatings = (id, data) => axios.put(`${url}/api/ratings/${id}`, data);
export const postRatings = (data) => axios.post(`${url}/api/ratings`, data);
export const deleteRatings = (id) => axios.delete(`${url}/api/ratings/${id}`);
export const getReviews = (id = "") => axios.get(`${url}/api/reviews/${id}`);
export const putReviews = (id, data) => axios.put(`${url}/api/reviews/${id}`, data);
export const postReviews = (data) => axios.post(`${url}/api/reviews`, data);
export const deleteReviews = (id) => axios.delete(`${url}/api/reviews/${id}`);
export const getMovies = (id = "") => axios.get(`${url}/api/movies/${id}`);
export const postSignup = (data) => axios.post(`${url}/api/auth/signup`, data);
export const postLogin = (data) => axios.post(`${url}/api/auth/login`, data);
export const postLogout = (data) => axios.post(`'${url}/api/auth/logout`, data);
