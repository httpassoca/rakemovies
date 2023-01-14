import axios from "axios";
export default axios.create({
  baseURL: `http://www.omdbapi.com/`,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    "apiKey": import.meta.env.VITE_API_KEY
  }
});