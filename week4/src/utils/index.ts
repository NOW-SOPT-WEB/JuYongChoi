export const checkPasswordValidation = (password: string) => {
  const regexp = /[a-z0-9]{7,}/;
  const specialCharRegexp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/;

  return regexp.test(password) && specialCharRegexp.test(password);
};
