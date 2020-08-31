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
    fetchArticles(dispatch)
  }, [])
  // if (!articles) return null

  console.log(articles)

  return (
    <Layout>
      <h1>Welcome to home page 1</h1>
      <div>
        {articles && articles.map(item => (
          <div key={item.id}>{item.title}
            {/*<div>{item.body}</div>*/}
            {/*{new HtmlString(item.body)}*/}
            {/*<p>{JSON.parse(item.body)}</p>*/}
            <div dangerouslySetInnerHTML={{__html: item.body}} />
          </div>
        ))}
      </div>

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
