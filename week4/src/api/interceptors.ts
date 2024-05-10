import { InternalAxiosRequestConfig } from "axios";

export const checkMemberId = (config: InternalAxiosRequestConfig) => {
  const memberId = localStorage.getItem("memberId");

  if (!memberId) return config;

  if (config.method === "get" || config.method === "patch") {
    config.headers.memberId = memberId;
  }

  return config;
};
