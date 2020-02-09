import { combineReducers } from "redux";
import user from "./user"
import token from "./token"
const rootReducer = combineReducers({
    user : user,
    token : token,
})

export default rootReducer;