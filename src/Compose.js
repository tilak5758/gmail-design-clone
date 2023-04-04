import React, { useState } from "react";
import "./css/compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";





function Compose() {

  const [to,setTo] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

  const dispatch = useDispatch("");

  const formSubmit = (e) =>{
    e.preventDefault();
    if(to === ""){
        return alert("To is required")
    }
    if(subject === ""){
        return alert("subject is required")
    }
    if(message === ""){
        return alert("message is required")
    }
    
  }

  return (
    <div className="compose">
      <div className="compose-header">
        <div className="compose-header-left">
          <span>New Message</span>
        </div>
        <div className="compose-header-right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={formSubmit}>
        <div className="compose-body">
          <div className="compose-bodyform">
            <input type="email" placeholder="recipients" value={to} onChange={(e) => setTo(e.target.value)}/>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
            <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
          </div>
        </div>

        <div className="compose-footer">
          <div className="compose-footer-left">
            <button type="submit">
              Send <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose-footer-right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>

    </div>
  );
}

export default Compose;
