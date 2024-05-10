import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "./axiosInstance";
import { ChangePwdType, UserDataType } from "@/types/api";

export const postSignUp = async (formData: UserDataType) => {
  const { data } = await axiosInstance.post<UserDataType>(
    END_POINTS.SIGN_UP,
    formData
  );

  return data;
};

export const getMemberInfo = async () => {
  const { data } = await axiosInstance.get(END_POINTS.USER_INFO);

  return data;
};

type PostLoginType = Omit<UserDataType, "nickname" | "phone">;

export const postLogin = async (formData: PostLoginType) => {
  const { data, headers } = await axiosInstance.post<PostLoginType>(
    END_POINTS.LOGIN,
    formData
  );

  return { data, headers };
};

export const patchPassword = async (formData: ChangePwdType) => {
  const { data } = await axiosInstance.patch(END_POINTS.CHANGE_PWD, formData);

  return data;
};
