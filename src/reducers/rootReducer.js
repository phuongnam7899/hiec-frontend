import { combineReducers } from "redux";
import user from "./user"
import token from "./token"
import notificationBox from "./notificationBox"
const rootReducer = combineReducers({
    user : user,
    token : token,
    notificationBox : notificationBox,
    
})

export default rootReducer;