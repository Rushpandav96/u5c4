import { combineReducers, legacy_createStore } from "redux";
import { reducer} from "./reducer"

export const store = legacy_createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );