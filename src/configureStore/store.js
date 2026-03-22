import {createStore} from "redux";
import {primeReducer} from "../reducer/primeReducer.js";

export const store = createStore(primeReducer);