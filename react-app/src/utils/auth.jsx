import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const setAuthTokens = (refresh, access) => {
  localStorage.setItem("refreshToken", refresh);
  localStorage.setItem("accessToken", access);
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const isAuthenticated = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};

export function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }, []);
}
