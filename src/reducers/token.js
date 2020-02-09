const initState = {
    token : ""
}


const token = (state = initState,action)=>{
    switch(action.type){
        case "ADD_NEW_TOKEN":
            return action.payload.token
        default :
            return state;
        }

} 