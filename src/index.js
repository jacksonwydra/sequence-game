import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./styles/main.scss";

ReactDOM.hydrate(<App />, document.getElementById("mountNode"));
