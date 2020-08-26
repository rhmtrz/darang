import React, { useState, useEffect, useRef, Fragment } from "react";
import PropTypes from 'prop-types'

import Layout from "../components/commons/layout";
import {postArticles} from "../hooks/article_actions"


const style = {
  width: "50%",
  display: "inline-block",
  overflow: "auto",
  verticalAlign: "top",
};

const EditorPage = (props) => {

  const [editorState, setState] = useState('Hello world');
  const trixInput = useRef(null)


  useEffect(() => {
    trixInput.current.addEventListener("trix-change", event => {
      console.log("trix change event fired", event);
      setState(event.target.innerHTML); //calling custom event
    });
  }, [])

  console.log(editorState)


  return (
    <Layout signOut={() => alert("Not yet")}>
      <div dir="auto" className="container">

        <hr />
        <input
          type="hidden"
          id="trix"
          value={editorState}
        />
        <trix-editor accepts="autofocus" dir="auto" input="trix" ref={trixInput} />
      </div>
      <button onClick={() => postArticles(editorState)}>Submit</button>
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
