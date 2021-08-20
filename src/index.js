import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MessengerCustomerChat from 'react-messenger-customer-chat';
// CSS
import "./index.css";
// Components
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
    <MessengerCustomerChat
      pageId="103028534704752"
      appId="430631041567206"
    />
  </BrowserRouter>,
  document.getElementById("root")
);


