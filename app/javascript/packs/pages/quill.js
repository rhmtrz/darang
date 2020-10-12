import React, {useContext, useState} from 'react';
import {ContentState, convertToRaw, EditorState} from "draft-js";
import {Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {postArticles} from "../hooks/article_actions";
import {Context} from "../app";


const EditorContainer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const { dispatch, authUser } = useContext(Context);

  const onEditorStateChange = (editorState) => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setEditorState(editorState)
  };



  const  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          console.log(response)
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          console.log(error)
          reject(error);
        });
      }
    );
  }
  return (
    <div className='editor'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
      <button onClick={() => postArticles(editorState, authUser)}>Submit</button>
    </div>
  )
}

export default EditorContainer
