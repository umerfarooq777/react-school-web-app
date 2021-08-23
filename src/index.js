import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ScrollToTop from "./components/ScrollToTop";
import MessengerCustomerChat from 'react-messenger-customer-chat';
// CSS
import "./index.css";
// Components
import App from "./App";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri='https://react-school-web-app.vercel.app/teacher-portal'
  >
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <MessengerCustomerChat
        pageId="103028534704752"
        appId="430631041567206"
      />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);


