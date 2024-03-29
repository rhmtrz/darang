import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { VERSION } from "../../constants";
import Colors from "../../styles/color";
import { useMediaQuery } from "react-responsive";

import { MAX_DISPLAY_WIDTH } from "../../constants";

import profileIcon from "../../images/icons/profile.png";
import burgerMenuIcon from "../../images/icons/burger-menu.png";
import SideMenu from "./side-menu";
import {history} from "../../app";
import {logoutUser} from "../../hooks/user-action";

const Layout = ({ children }) => {
  const [isShowProfileMenu, toggleProfileMenu] = useState(false);
  const [isShowSideMenu, toggleSideMenu] = useState(false);
  const credential = localStorage.getItem("__cred");

  const isMobile = useMediaQuery({ maxWidth: MAX_DISPLAY_WIDTH });
  return (
    <div>
      <div className="nav-bar">
        {isMobile && (
          <img
            className="burger-menu"
            src={burgerMenuIcon}
            onClick={() => toggleSideMenu(!isShowProfileMenu)}
          />
        )}
        <h1 className="app-name">DARANG {VERSION}</h1>
        <ul className="editor-list">
          <li onClick={() => history.push("/")}>Home</li>
        </ul>
        {credential !== null && !isMobile &&
          <ul className="editor-list">
            <li onClick={() => history.push("/draft")}>Draft Editor</li>
            <li onClick={() => history.push("/trix")}>Trix Editor</li>
          </ul>
        }
        <div className="profile-box">
          <img
            className="profile-img"
            src={profileIcon}
            onClick={() => toggleProfileMenu(!isShowProfileMenu)}
          />
          {isShowProfileMenu && (
            <div className="submenu">
              {credential !== null ?
              (<p className="logout" onClick={() => logoutUser()}>
                Logout
              </p> ): (
                <p className="logout" onClick={() => history.push("/login")}>
                  Login
                </p>
                )
              }
            </div>
          )}
          {isShowProfileMenu && (
            <div
              onClick={() => toggleProfileMenu(false)}
              className="modal-bg"
            />
          )}
        </div>
        {isShowSideMenu && <SideMenu />}
        {isShowSideMenu && (
          <div
            onClick={() => toggleSideMenu(false)}
            className="modal-bg bg-color"
          />
        )}
      </div>
      <div>{children}</div>
      <style jsx>{`
        .nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid;
        }
        h1 {
          text-align: center;
        }
        .submenu {
          position: absolute;
          top: 5rem;
          right: 3rem;
          background: ${Colors.white};
          border: 1px solid ${Colors.gray300};
          z-index: 4;
        }
        .submenu p {
          margin: 0;
          padding: 1.2rem 5rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .modal-bg {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
        }
        .bg-color {
          background: ${Colors.gray300};
          opacity: 30%;
        }
        .logout {
          border-top: 1px solid ${Colors.gray200};
        }
        .profile-img {
          width: 2.2rem;
          border-radius: 3rem;
          border: 1px solid ${Colors.black};
          cursor: pointer;
        }
        .editor-list {
          list-style: none;
          display: flex;
          padding: 0;
          margin: 0;
        }
        .editor-list li {
          padding: 1rem;
          cursor: pointer;
        }
        .editor-list li:hover {
          background: yellow;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
