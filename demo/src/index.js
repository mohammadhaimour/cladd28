import React from "react";
import ReactDOM from "react-dom";
import App from "./componnents/App";
const rootEl = document.getElementById("root");
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<App />, rootEl);