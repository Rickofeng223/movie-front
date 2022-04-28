import axios from "axios";

// export const url = "http://localhost:4000/api";

// export const getUsers = (id = "") => axios.get(`${url}/users/${id}`);
// export const putUsers = (id, data) => axios.put(`${url}/users/${id}`, data);
// export const deleteUsers = (id) => axios.delete(`${url}/users/${id}`);
// export const getRatings = (id = "") => axios.get(`${url}/ratings/${id}`);
// export const putRatings = (id, data) => axios.put(`${url}/ratings/${id}`, data);
// export const postRatings = (data) => axios.post(`${url}/ratings`, data);
// export const deleteRatings = (id) => axios.delete(`${url}/ratings/${id}`);
// export const getReviews = (id = "") => axios.get(`${url}/reviews/${id}`);
// export const putReviews = (id, data) => axios.put(`${url}/reviews/${id}`, data);
// export const postReviews = (data) => axios.post(`${url}/reviews`, data);
// export const deleteReviews = (id) => axios.delete(`${url}/reviews/${id}`);
// export const getMovies = (id = "") => axios.get(`${url}/movies/${id}`);
// export const postSignup = (data) => axios.post(`${url}/auth/signup`, data);
// export const postLogin = (data) => axios.post(`${url}/auth/login`, data);
// export const postLogout = (data) => axios.post(`'${url}/auth/logout`, data);


const url = "http://localhost:4000";

const getUsers = (id = "") => axios.get(`${url}/api/users/${id}`);
const putUsers = (id, data) => axios.put(`${url}/api/users/${id}`, data);
const deleteUsers = (id) => axios.delete(`${url}/api/users/${id}`);
const getRatings = (id = "") => axios.get(`${url}/api/ratings/${id}`);
const putRatings = (id, data) => axios.put(`${url}/api/ratings/${id}`, data);
const postRatings = (data) => axios.post(`${url}/api/ratings`, data);
const deleteRatings = (id) => axios.delete(`${url}/api/ratings/${id}`);
const getReviews = (id = "") => axios.get(`${url}/api/reviews/${id}`);
const putReviews = (id, data) => axios.put(`${url}/api/reviews/${id}`, data);
const postReviews = (data) => axios.post(`${url}/api/reviews`, data);
const deleteReviews = (id) => axios.delete(`${url}/api/reviews/${id}`);
const getMovies = (id = "") => axios.get(`${url}/api/movies/${id}`);
const postSignup = (data) => axios.post(`${url}/api/auth/signup`, data);
const postLogin = (data) => axios.post(`${url}/api/auth/login`, data);
const postLogout = (data) => axios.post(`'${url}/api/auth/logout`, data);

