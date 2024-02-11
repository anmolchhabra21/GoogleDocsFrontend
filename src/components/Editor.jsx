import { useEffect, useState } from "react";
import React from "react";
import { Box } from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SideBar from './Sidebar.jsx'

import { io } from "socket.io-client";

const Component = styled.div`
  background: #f9fbfd;
`;

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const Editor = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const { id } = useParams();
  const [name, setName] = useState("DocName");
  const fNewName = (dname)=>{
    setName(dname);
  }

  useEffect(() => {
    const quillserver = new Quill("#cont", {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
    quillserver.disable();
    quillserver.setText("Loading Document...");
    setQuill(quillserver);

    const socketServer = io("http://localhost:9000");
    setSocket(socketServer);
    return () => {
      socketServer.disconnect();
    };
  }, []);

  const handleSChange = (delta, oldData, source) => {
    if (source !== "user") return;
    console.log("send", delta);
    socket && socket.emit("send-changes", delta);
  };

  const handleCChange = (delta) => {
    console.log("delta", delta)
    // delta = JSON.parse(delta);
    quill.updateContents(delta);
  };

  useEffect(() => {
    console.log("useEffect");
    if (socket == null || quill == null) {
      return;
    }
    
    quill && quill.on("text-change", handleSChange);
    socket && socket.on("receive-changes", handleCChange);

    return ()=>{
      quill && quill.off("text-change", handleSChange);
      socket && socket.off("receive-changes", handleCChange);
    }
  }, [quill, socket]);

  useEffect(() => {
    if (quill === null || socket === null) return;

    socket &&
      socket.once("load-document", (document) => {
        console.log("enabled", document);
        quill && quill.setContents(document);
        quill && quill.enable();
      });
      socket && socket.emit("get-document", id);
  }, [quill, socket, id]);

  // useEffect(()=>{
  //   if(socket === null || quill===null) return;

  //   const interval = setInterval(() => {
  //       socket && socket.emit('save-document', quill.getContents(),name)
  //   }, 20000);

  //   socket && socket.emit('anmol', name);

  //   return ()=>{
  //       clearInterval(interval);
  //   }
  // },[socket, quill, name]);

  return (
    <Component>
      <Header hname={name} fname={fNewName}/>
      <Box className="boxCont" id="cont"></Box>
      <SideBar/>
    </Component>
  );
};

export default Editor;
