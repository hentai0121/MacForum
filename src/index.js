import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Auth0Provider } from "@auth0/auth0-react";

 
ReactDOM.render(
	<Auth0Provider
	    domain="dev-e9nmf43c.us.auth0.com"
	    clientId="dz2IXEpRA2nOBrfH6kpmfLjeM5cpwn9Z"
	    redirectUri={window.location.origin}
	  >
  		<Main/>
  	</Auth0Provider>, 
  document.getElementById("root")
);