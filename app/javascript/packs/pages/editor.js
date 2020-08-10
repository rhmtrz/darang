import React, { useState } from "react";
import Dante from "Dante2";
import { convertFromRaw } from "draft-js";
import Layout from "../components/commons/layout";

const style = {
  width: "50%",
  display: "inline-block",
  overflow: "auto",
  verticalAlign: "top",
};

const EditorPage = () => {
  const [content, saveContent] = useState({});

  const save_handler = (editorContext, cont) => {
    console.log("cont", cont);

    saveContent(cont);
  };

  let danteProps = {
    data_storage: {
      url: "xxx",
      save_handler: save_handler,
    },
  };

  let contentState = {};
  try {
    contentState = convertFromRaw(content);
  } catch (e) {
    console.log(e);
  }

  console.log("state", content);
  return (
    <Layout signOut={() => alert("Not yet")}>
      <div className="container">
        <Dante {...danteProps} />
        <hr />
        <div className="states">
          <div style={style}>
            <p>Raw State</p>
            <pre>{JSON.stringify(content, null, 2)}</pre>
          </div>
          <div style={style}>
            <p>Content State</p>
            <pre>{JSON.stringify(contentState, null, 2)}</pre>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 2rem 5rem;
        }
        .states {
          margin-top: 3rem;
        }
      `}</style>
    </Layout>
  );
};

export default EditorPage;
