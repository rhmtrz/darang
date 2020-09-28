import React from "react";
import PublicPageHeader from "../components/commons/public-page-header";
import { history } from "../app";

const EmailConfirmedPage = () => {
  return (
    <div className="g-public-container">
      <PublicPageHeader pageName="Email confirmed" />

      <button
        className="g-primary-button"
        onClick={() => history.push("/login")}
      >
        Login
      </button>
      <style jsx>{`
        .container {
          max-width: 30rem;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default EmailConfirmedPage;
