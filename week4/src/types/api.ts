export type UserDataType = {
  authenticationId: number;
  password: string;
  nickname: string;
  phone: string;
};

export type ChangePwdType = {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
};
