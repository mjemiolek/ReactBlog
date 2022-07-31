import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://reactblogxd.herokuapp.com/api/"
})