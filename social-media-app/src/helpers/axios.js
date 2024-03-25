import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";


const axiousService = axios.create({
    baseURL: "http://localhost:8000", 
    headers: {
        "Content-Type": "application/json",
    },
});