import React, {useEffect, useContext} from "react";
import Layout from "../components/commons/layout";
import { Context } from "../app";
import {fetchArticles} from "../hooks/article_actions";
const HomePage = () => {
  const {
    articles,
    dispatch
  } = useContext(Context);
  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Layout>
      <h1>Welcome to home page</h1>
      <style jsx>{`
        .container {
          max-width: 30rem;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
