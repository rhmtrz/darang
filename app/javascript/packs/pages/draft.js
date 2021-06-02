import React, {useContext, useState} from 'react';
import {ContentState, convertToRaw, EditorState} from "draft-js";
import {Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {postArticles} from "../hooks/article_actions";
import {Context} from "../app";
import Layout from "../components/commons/layout";


const EditorContainer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const { dispatch, authUser } = useContext(Context);

  const onEditorStateChange = (editorState) => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setEditorState(editorState)
  };

  const onAddImage = (e) => {
    e.preventDefault();
    const editorState = this.state.editorState;
    const url = window.origin + "/rails/active_storage/direct_uploads";

    const urlValue = window.prompt(url)
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {src: urlValue});
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity}, 'create-entity');
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }





  const  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // const url = window.origin + "/api/articles";
        var HOST = "https://d13txem1unpe48.cloudfront.net/"
        xhr.open('POST', HOST);
        // xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
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
    <Layout signOut={() => alert("Not Yet")}>
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

    </Layout>
  )
}

export default EditorContainer
