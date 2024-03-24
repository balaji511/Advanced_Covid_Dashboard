const baseUrl = "https://apis.ccbp.in";
const loginUrl = "/login";

export const verifyUser = async (reqBody: any) => {
  const loginBaseUrl = baseUrl + loginUrl;
  const params = {
    method: "POST",
    body: JSON.stringify(reqBody),
  };

  const loginResponse = await fetch(loginBaseUrl, params);
  const loginData = await loginResponse.json();
  if (loginResponse.ok) {
    return { loginData, success: true };
  } else {
    return undefined;
  }
};
