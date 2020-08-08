import React, {useState} from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


const EditorPage = () => {
  const [editorState, setEditorState] = useState(null)
  const onEditorStateChange  = (state) => {
    setEditorState(state)
  };
  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  )
}

export default EditorPage