import { combineReducers } from "redux";
import user from "./user"
import token from "./token"
import notificationBox from "./notificationBox"
import { loadingBarReducer } from 'react-redux-loading-bar'
const rootReducer = combineReducers({
    user : user,
    token : token,
    notificationBox : notificationBox,
    loadingBar: loadingBarReducer,
})

export default rootReducer;