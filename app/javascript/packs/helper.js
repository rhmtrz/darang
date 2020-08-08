export const applicationVersion = "3.4.0";

export const httpStatus = {
  OK: 200,
  CREATED: 201,
  SUCCEED: 204,
  FAILED: 422,
  CONFLICT: 409,
  UNAUTHORIZED: 401
};

export const setCredential = headers => {
  const credential = {
    token: headers.get("access-token"),
    client: headers.get("client"),
    uid: headers.get("uid")
  };

  localStorage.setItem("__cred", JSON.stringify(credential));
};

export const generateHeader = () => {
  const credential = JSON.parse(localStorage.getItem("__cred"));

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Token": credential.token,
    Client: credential.client,
    Uid: credential.uid
  };
};

export const uploadImageHeader = () => {
  const credential = JSON.parse(localStorage.getItem("__cred"));
  return {
    Accept: "application/json",
    "Access-Token": credential.token,
    Client: credential.client,
    Uid: credential.uid
  };
};
