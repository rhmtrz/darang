import React from "react";
import Colors from "./color";

const GlobalStyles = () => {
  return (
    <style jsx global="true">{`
      body {
        font-family: sans-serif;
      }
      .g-button {
        border: 1px solid;
        padding: 0.4rem 1rem;
        font-size: 1.2rem;
      }
      button {
        cursor: pointer;
        padding: 0.4rem 1rem;
      }
      button:hover {
        font-weight: bold;
      }
      .g-sub-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid;
      }

      .g-public-container {
        max-width: 25rem;
        margin: 0 auto;
      }
      .g-gray-button {
        cursor: pointer;
        padding: 0.4rem 1rem;
        background: ${Colors.gray200};
        border: none;
        font-size: 1rem;
      }
      .g-label {
        margin-bottom: 0.6rem;
      }
      .g-input {
        border-radius: 0.3rem;
        border: 1px solid ${Colors.gray200};
        padding: 0.4rem 1rem;
        margin: 0.5rem 0;
        font-size: 1rem;
        width: 100%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      .f14 {
        font-size: 0.85rem;
      }
      .f16 {
        font-size: 1rem;
      }
      .f18 {
        font-size: 1.2rem;
      }

      .w14 {
        width: 0.85rem;
        cursor: pointer;
      }
      .w16 {
        width: 1rem;
        cursor: pointer;
      }
      .w18 {
        width: 1.2rem;
        cursor: pointer;
      }
      .w20 {
        width: 1.4rem;
        cursor: pointer;
      }
      .g-model-content {
        padding: 2rem 0;
        display: flex;
        justify-content: space-around;
      }
      .g-modal-footer {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-top: 1px solid;
      }

      .g-page-container {
        width: 80%;
        margin: 0 auto;
      }
      .g-primary-button {
        cursor: pointer;
        background: ${Colors.gray200};
        border: none;
        font-size: 1rem;
        width: 100%;
        margin: 2rem 0;
        padding: 1rem 0;
      }
    `}</style>
  );
};

export default GlobalStyles;
