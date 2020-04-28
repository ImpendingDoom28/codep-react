import * as axios from "axios";
import * as tokenService from "../js/services/TokenService";

const api = axios.create({
  timeout: 10000,
  baseURL: "http://localhost:8080/api/1.0",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: tokenService.isTokenPresent()
      ? "" + tokenService.getToken()
      : "",
  },
});

api.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

api.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export default api;
