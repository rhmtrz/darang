import {
  httpStatus,
  setCredential,
} from "../helper";
import { history } from "../app";


export const loginUser = async (email, password) => {
  const url = window.origin + "/users/sign_in";
  const body = JSON.stringify({
    email,
    password
  });

  const res = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (res.status === httpStatus.OK) {
    alert("Login success");
    setCredential(res.headers);
    history.push("/");
  } else if (res.status === httpStatus.CONFLICT) {
    const data = await res.json();
    alert(data.message);
  } else {
    alert("Failed login user");
  }
};


export const signUpUser = async (dispatch, data) => {
  const url = window.origin + "/users";
  const { email, password, passwordConfirmation, nickname } = data;
  const body = JSON.stringify({
    email,
    nickname,
    password,
    password_confirmation: passwordConfirmation
  });

  const res = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });
console.log(res.status)
  if (res.status === httpStatus.OK) {
    alert("sign up success");
  } else if (res.status === httpStatus.CONFLICT) {
    const data = await res.json();
    alert(data.message);
  } else {
    alert("Failed");
  }
};

