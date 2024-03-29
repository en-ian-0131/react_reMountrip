const LoginFetchCookie = (str: "sid") => {
  const LoginFetchCookie = document.cookie
    .split(";")
    .find((i) => i.includes(str))
    ?.split("=")[1];
  return document.cookie.length === 0 ? "" : LoginFetchCookie;
};
export default LoginFetchCookie;
