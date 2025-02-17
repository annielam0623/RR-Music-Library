"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var App_1 = require("./src/App");
var reportWebVitals_1 = require("./src/reportWebVitals");
ReactDOM.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)(console.log);
