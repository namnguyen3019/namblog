import { combineReducers } from "redux";
import authReducer from './authReducer';
import projectReducer from "./projectReducer";

const reducer = combineReducers({
    auth: authReducer,
    projects: projectReducer
});

export default reducer;