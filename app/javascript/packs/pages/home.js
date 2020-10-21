import React, {useEffect, useContext} from "react";
import Layout from "../components/commons/layout";
import { Context } from "../app";
import {fetchArticles} from "../hooks/article_actions";
import moment from 'moment';

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
      <h1 className="chore">Enjoy reading ...</h1>
      <div className="container">
        <div className="articles-box">
          {articles && articles.map(item => (
            <div className="article-item" key={item.id}>
              <div className="article-item-box">
                <h1 className="article-title">{item.title}</h1>
                <h4 className="published-date">{moment(item.createdAt).format("YYYY-MM-DD")}</h4>
                <div dangerouslySetInnerHTML={{__html: item.body}} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .chore {
          margin-left: 2rem;
        }
        .article-item-box {
          padding: 0 1rem;
          margin-bottom: 1rem;
        }
        .article-title {
          margin-bottom: 0;
        }
        .published-date {
          margin-top: 0;
        }
        .container {
          margin: 0 auto;
          display: flex;
          fix-direction: column;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
