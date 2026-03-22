import {combineReducers} from "redux";
import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";

export const primeReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
});