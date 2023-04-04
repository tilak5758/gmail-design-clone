import React from 'react';
import "./css/emaillist.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

function EmailBody({name,subject, message,time}) {
  return (
    <div className='emailbody'>
        <div className="emailbody-left">
            <CheckBoxOutlineBlankIcon/>
            <StarBorderIcon/>
            <LabelOutlinedIcon/>
            <h4>{name}</h4>
        </div>

        <div className="emailbody-middle">
            <div className="emailbody-middle-msg">
                <p><b>{subject}</b> {message}</p>
            </div>
        </div>
        <div className="emailbody-right">
        <p>{time}</p>
        </div>
    </div>
  )
}

export default EmailBody