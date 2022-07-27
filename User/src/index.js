import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Popper from "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";

/*import "bootstrap/dist/css/bootstrap.min.css";*/
import "bootstrap-icons/font/bootstrap-icons.css";

import "./custom.scss";
import App from "./App";

import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
