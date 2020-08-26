import {
  httpStatus,
  setCredential,
} from "../helper";
import actionTypes from "./action-type";

export const fetchArticles = async (dispatch) => {
  const url = window.origin + "/api/articles";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (res.status === httpStatus.OK) {
    const data = await res.json();
    console.log('****', data)
    dispatch({
      type: actionTypes.FETCH_ARTICLES,
      articles: data.articles
    });
    alert("Fetch articles success");
  } else {
    alert("Fetch articles failed");
  }
};


export const postArticles = async (content) => {
  const url = window.origin + "/api/articles";
  const body = JSON.stringify({
    content
  });
  console.log('___', body, content)

  const res = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (res.status === httpStatus.SUCCEED) {
    alert("Create articles success");
  } else {
    alert("Create articles failed");
  }
};
