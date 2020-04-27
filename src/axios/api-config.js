import * as axios from "axios";

const api = axios.create({
  timeout: 500000,
  baseURL: "http://localhost:8080/api/1.0",
  headers: { "Access-Control-Allow-Origin": "*" },
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
