import React, {useContext, useState, useEffect} from 'react';
import {ContentState, convertToRaw, EditorState} from "draft-js";
// import {Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import createImagePlugin from '@draft-js-plugins/image';
import Editor from '@draft-js-plugins/editor';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {postArticles} from "../hooks/article_actions";
import {Context} from "../app";
import Layout from "../components/commons/layout";
import {fetchCurrentUser} from "../hooks/user-action";


const imagePlugin = createImagePlugin();

const EditorContainer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const { dispatch, authUser } = useContext(Context);

  console.log("Dranft js", authUser)

  const onEditorStateChange = (editorState) => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setEditorState(editorState)
  };

  const onAddImage = (e) => {
    e.preventDefault();
    const editorState = this.state.editorState;
    const urlValue = window.prompt('Paste Image Link')
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
        const url = window.origin + "/api/articles";
        xhr.open('POST', url);
        // xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          console.log(response)
          resolve(response);d
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
          onChange={setEditorState}
          plugins={[imagePlugin]}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
          }}
        />
        <button onClick={() => postArticles(editorState, authUser.id)}>Submit</button>
      </div>

    </Layout>
  )
}

export default EditorContainer
