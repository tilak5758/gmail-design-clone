import React from 'react'
import "./css/emaillist.css"
import EmailBody from './EmailBody'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'

function EmailList() {
  return (
    <div className='emaillist'>
      <EmailListSetting/>
      <EmailType/>
      <EmailBody  name="xyz" subject="This is subject" message="We are learing react js"  time="2:30 PM"/>
    </div>
  )
}

export default EmailList