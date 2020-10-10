import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // routing define
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import loginReducer from "./store/reducers/loginReducer";
import LoadingView from "./components/loading/loadingComponent";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";

import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  loginReducer: loginReducer,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["loginReducer"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// const middleware = applyMiddleware(thunk, logger);
const persistor = persistStore(store);
const app = (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Router>
        <Suspense fallback={<LoadingView />}>
          <App />
        </Suspense>
      </Router>
    </PersistGate>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
