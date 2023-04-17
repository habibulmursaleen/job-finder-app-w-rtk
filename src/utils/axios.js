import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://job-finder-json-server-pxdz.onrender.com",
});

export default axiosInstance;
