import * as axios from "axios";
import * as tokenService from "../js/services/TokenService";

const api = () => {
  debugger;
  const token = tokenService.isTokenPresent()
    ? "" + tokenService.getToken()
    : "";
  const codepAxios = axios.create({
    timeout: 10000,
    baseURL: "http://localhost:8080/api/1.0",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Authorization": token,
    },
  });

  codepAxios.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return request;
  });

  codepAxios.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
  });
  return codepAxios;
};

export default api;
