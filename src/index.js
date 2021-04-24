import ReactDOM from "react-dom";
import App from "ui/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { storeManager } from "@data-provider/core";

import "./ui/config";

const DATA_PROVIDER_STORE = "data";
const store = createStore(
  combineReducers({
    [DATA_PROVIDER_STORE]: storeManager.reducer,
  }),
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storeManager.setStore(store, DATA_PROVIDER_STORE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
