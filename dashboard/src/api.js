
import axios from "axios";

const API = axios.create({
      baseURL:"htttp://localhost:30002",
      withCredentials:true,
})
export default API;