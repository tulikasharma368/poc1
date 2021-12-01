import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import paraReducer from "./paragraphReducer";

//reducers are passed in store
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(paraReducer,applyMiddleware(thunk) );
