import React from "react";
import Colors from "../../styles/color";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <p className="f20" onClick={() => alert("Not yet")}>
        list List
      </p>
      <p className="f20" onClick={() => alert("Not yet")}>
        list List
      </p>
      <p className="f20" onClick={() => alert("Not yet")}>
        list List
      </p>
      <style jsx>{`
        .side-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 40%;
          bottom: 0;
          background: ${Colors.white};
          z-index: 4;
          padding: 2rem 1rem;
        }
        .submenu p {
          margin: 0;
          padding: 1.2rem 5rem;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SideMenu;
