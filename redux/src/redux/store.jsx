import rootReducer from "./reducers/rootReducer";
import { createStore } from "@reduxjs/toolkit";
const store=createStore(rootReducer)
export default store;