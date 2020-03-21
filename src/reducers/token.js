const initState = {
    token : "",
};


const token = (state = initState, action) =>{
    switch (action.type) {
        case 'ADD_NEW_TOKEN' :
            // console.log("ADD_NEW_TOKEN")
            return {
                token : action.token
            }
        case 'DELETE_TOKEN' : 
            // console.log("DELETE_TOKEN")
            return initState;
        default :
            return state;
        }
} 

export default token;