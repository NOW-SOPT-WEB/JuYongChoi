import axios from "axios";
import { checkMemberId } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: "http://34.64.233.12:8080",
});

axiosInstance.interceptors.request.use(checkMemberId);
