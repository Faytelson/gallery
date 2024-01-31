import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.slingacademy.com/v1/sample-data",
});

export default axiosInstance;