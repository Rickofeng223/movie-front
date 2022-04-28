import axios from "axios";
export const url = "http://localhost:4000/api";

export const getUsers = (id = "") => axios.get(`${url}/users/${id}`);
export const putUsers = (id, data) => axios.put(`${url}/users/${id}`, data);
export const deleteUsers = (id) => axios.delete(`${url}/users/${id}`);
export const getRatings = (id = "") => axios.get(`${url}/ratings/${id}`);
export const putRatings = (id, data) => axios.put(`${url}/ratings/${id}`, data);
export const postRatings = (data) => axios.post(`${url}/ratings`, data);
export const deleteRatings = (id) => axios.delete(`${url}/ratings/${id}`);
export const getReviews = (id = "") => axios.get(`${url}/reviews/${id}`);
export const putReviews = (id, data) => axios.put(`${url}/reviews/${id}`, data);
export const postReviews = (data) => axios.post(`${url}/reviews`, data);
export const deleteReviews = (id) => axios.delete(`${url}/reviews/${id}`);
export const getMovies = (id = "") => axios.get(`${url}/movies/${id}`);
export const postSignup = (data) => axios.post(`${url}/auth/signup`, data);
export const postLogin = (data) => axios.post(`${url}/auth/login`, data);
export const postLogout = (data) => axios.post(`'${url}/auth/logout`, data);
