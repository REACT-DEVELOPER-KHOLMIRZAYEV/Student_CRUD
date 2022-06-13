import axios from "axios";

const authApiInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASEURL ,
  headers: {
    Accept: "*/*",
    // 'accept': '*/*',
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000
});

export default authApiInstance;