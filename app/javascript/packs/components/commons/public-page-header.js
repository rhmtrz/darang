import React from "react";
import PropTypes from "prop-types";
import { VERSION } from "../../constants";

const PublicPageHeader = (props) => {
  const { pageName } = props;
  return (
    <div className="header-box">
      <h1>DARANG {VERSION}</h1>
      <p className="f20">{pageName}</p>
      <style jsx>{`
        .header-box {
          text-align: center;
          margin: 3rem 0;
        }
      `}</style>
    </div>
  );
};

PublicPageHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PublicPageHeader;
