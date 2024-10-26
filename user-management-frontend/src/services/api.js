import axios from 'axios';

const API_URL = 'http://localhost:5000/api';


export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getUsers = (token) =>
  axios.get(`${API_URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
export const updateUser = (id, userData, token) =>
  axios.put(`${API_URL}/users/${id}`, userData, { headers: { Authorization: `Bearer ${token}` } });
export const deleteUser = (id, token) =>
  axios.delete(`${API_URL}/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });

