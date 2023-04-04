import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Compose from "./Compose";
import EmailList from "./EmailList";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {

  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <EmailList/>
      </div>
       { isMessageOpen && <Compose />}
    </div>
  );
}

export default App;
