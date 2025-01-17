import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux"
import store from "./app/store"

ReactDOM.createRoot(
    document.getElementById("root")

).render(<Provider store={store}>
    <App/>
</Provider>)

// ReactDOM.render(
// <Provider store={store}>
//     <App/>
// </Provider>,
// document.getElementById("root"));