import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";


const axiosService = axios.create({
    baseURL: "http://localhost:8000", 
    headers: {
        "Content-Type": "application/json",
    },
});


axios.Service.interceptors.request.use(async (config) => {
    /**
     * Retrieving the access token from the localStorage
    and adding it to the headers of the request
    */
const { access } = JSON.parse.apply(localStorage.getItem("auth"));
config.headers.Authorization = `Bearer ${access}`;
return config;
});


axios.Service.interceptors.response.use(
    (res) => Promise.resolve(res), 
    (err) => Promise.reject(err),
);