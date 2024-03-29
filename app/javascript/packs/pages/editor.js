import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from 'prop-types'

import Layout from "../components/commons/layout";
import {postArticles} from "../hooks/article_actions"
import {fetchCurrentUser} from "../hooks/user-action";
import { Context } from "../app";
import {generateHeader} from "../helper";


const style = {
  width: "50%",
  display: "inline-block",
  overflow: "auto",
  verticalAlign: "top",
};

const EditorPage = (props) => {

  const [editorState, setState] = useState('Hello world');
  const trixInput = useRef(null)
  const { dispatch, authUser } = useContext(Context);

  useEffect(() => {

    fetchCurrentUser(dispatch)
  }, [])

  useEffect(() => {
    trixInput.current.addEventListener("trix-change", event => {
      console.log("trix change event fired", event);
      setState(event.target.innerHTML); //calling custom event
    });

    const setProgress = (progress) => {
      attachment.setUploadProgress(progress)
    }

    const setAttributes = (attributes) => {
      attachment.setAttributes(attributes)
    }

    trixInput.current.addEventListener("trix-attachment-add", event => {
      let attachment = event.attachment;
      if (attachment.file) {
        uploadFile(attachment, setProgress, setAttributes);
      }

    });

    // deletes image from server when attachment is removed
    // trixInput.current.addEventListener("trix-attachment-remove", event => {
    //   if (event.attachment && event.attachment.file && event.attachment.file.name) {
    //     const path = event.attachment.file.name;
    //     // deletes image at path
    //     axios.delete(`/images/${path}`)
    //       .then((data) => {
    //         if (data.data.success) {
    //           console.log("Successfully deleted image at " + path + ".");
    //         }
    //       })
    //       .catch(() => {
    //         console.log("Error while deleting image.");
    //       });
    //   }
    // });

  }, [])

  const  uploadFile = async (file, progressCallback, successCallback) => {
    const HOST = window.location.origin
    const key = createStorageKey(file)
    const formData = createFormData(key, file)
    const xhr = new XMLHttpRequest()

    xhr.open("POST", HOST, true)

    xhr.upload.addEventListener("progress", function(event) {
      const progress = event.loaded / event.total * 100
      progressCallback(progress)
    })

    xhr.addEventListener("load", function(event) {
      if (xhr.status == 204) {
        const attributes = {
          url: HOST + key,
          href: HOST + key + "?content-disposition=attachment"
        }
        successCallback(attributes)
      }
    })

    xhr.setRequestHeader('Authorization', generateHeader());

    xhr.send(formData)
  }

  const createStorageKey = (file) => {
    const date = new Date()
    const day = date.toISOString().slice(0,10)
    const name = date.getTime() + "-" + file.name
    return [ "tmp", day, name ].join("/")
  }

  const createFormData = (key, file) => {
    const data = new FormData()
    data.append("key", key)
    data.append("Content-Type", file.type)
    data.append("file", file)
    return data
  }


  return (
    <Layout signOut={() => alert("Not yet")}>
      <div dir="auto" className="container editor">
        <hr />
        <input
          type="hidden"
          id="trix"
          value={editorState}
        />
        <trix-editor
          data-direct-upload-url="/rails/active_storage/direct_uploads"
          data-blob-url-template="/rails/active_storage/blobs/:signed_id/*filename"
          accepts="autofocus" dir="auto" input="trix" ref={trixInput} />
      </div>
      <button onClick={() => postArticles(editorState, authUser)}>Submit</button>
      <style jsx>{`
        .states {
          margin-top: 3rem;
        }
      `}</style>
    </Layout>
  );
};


export default EditorPage;
