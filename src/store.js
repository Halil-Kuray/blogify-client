import {applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))

export default store;