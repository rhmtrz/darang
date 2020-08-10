import React from "react";
import Layout from "../components/commons/layout";

const HomePage = () => {
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
