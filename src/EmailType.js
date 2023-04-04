import React from "react";
import { IconButton } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./css/emaillist.css"

function EmailType() {
  return (
    <div className="emailtype">
      <div className="emailtype-options emailtype-options-active">
        <IconButton>
          <InboxIcon />
          <p>Primary</p>
        </IconButton>
      </div>

      <div className="emailtype-options">
        <IconButton>
          <PeopleIcon/>
          <p>Social</p>
        </IconButton>
      </div>

      <div className="emailtype-options">
        <IconButton>
          <LocalOfferIcon />
          <p>Promotions</p>
        </IconButton>
      </div>
    </div>
  );
}

export default EmailType;
