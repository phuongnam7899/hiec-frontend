const initState = {
    visible : false,
    success : false,
};


const notificationBox = (state = initState, action) =>{
    switch (action.type) {
        case "SET_VISIBLE_AND_SUCCESS":
            console.log("SET_VISIBLE_AND_SUCCESS")
            return{
            visible : true,
            success : true,
        }
        case "SET_VISIBLE_AND_NOT_SUCCESS": 
            console.log("SET_VISIBLE_AND_NOT_SUCCESS")
            return{
            visible : true,
            success : false,
        }  
        case "SET_NOT_VISIBLE":
            console.log("SET_NOT_VISIBLE")
            return{
            visible : false,
            success : false,
        } 
        default :
            return state;
        }
} 

export default notificationBox;