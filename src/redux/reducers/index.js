import { combineReducers } from "redux";
import auth from "./auth";
import studentIdReducer from "./studentIdReducer";
import allData from "./allData"

const rootReducers = combineReducers({ auth, studentIdReducer,  allData })

export default rootReducers;