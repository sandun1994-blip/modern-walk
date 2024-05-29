import Axios from "axios";

const baseURL = '/api/products';
const axios = Axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
