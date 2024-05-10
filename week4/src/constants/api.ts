export const END_POINTS = {
  SIGN_UP: "/member/join",
  USER_INFO: "/member/info",
  LOGIN: "/member/login",
  CHANGE_PWD: "/member/password",
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;
