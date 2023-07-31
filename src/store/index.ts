import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./reducer";
import { rootSaga } from "./sagas";

const isBrowser = typeof window !== "undefined";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: isBrowser ? [sagaMiddleware] : [],
});

if (isBrowser) {
  sagaMiddleware.run(rootSaga);
}

export { store };
