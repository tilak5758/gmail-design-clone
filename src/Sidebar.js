import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import "./css/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose-btn" onClick={() => dispatch(openSendMessage())}>
        Compose
      </Button>

      <SidebarOptions Icon={InboxIcon} title="Inbox" number="224"  isactive={true}/>

      <SidebarOptions Icon={StarIcon} title="Starred" number="224" />

      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number="224" />

      <SidebarOptions Icon={LabelIcon} title="Important" number="224" />

      <SidebarOptions Icon={SendIcon} title="sent" number="224" />

      <SidebarOptions Icon={DraftsIcon} title="Drafts" number="224" />

      <SidebarOptions Icon={LabelIcon} title="Category" number="224" />

      <SidebarOptions Icon={DeleteIcon} title="[Map]/Trash" number="224" />
       
      <SidebarOptions Icon={FindInPageIcon} title="Documents" number="224" />

      <SidebarOptions Icon={ExpandMoreIcon} title="More" number="224" />

      <h3 className="sidebarOptions--heading">
        Meet
      </h3>
      <SidebarOptions Icon={VideocamIcon} title="New Meeting" number="224" />

      <SidebarOptions Icon={KeyboardIcon} title="Join a Meeting" number="224" />
    </div>
  );
}

export default Sidebar;
