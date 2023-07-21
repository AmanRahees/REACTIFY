import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const login = async (data) => {
  return await api.post("/login/", data);
};

export const register = async (data) => {
  return await api.post("/register/", data);
};

export const get_users = async (data) => {
  return await api.get("/users/", data);
};
