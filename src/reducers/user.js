const initState = {
    isAdmin: false,
    // account: {
    //     email: "",
    //     // password : {type :String, require : true}
    // },
    _id : "",
    profile: {
        name: "",
        gender: "",
        phoneNumber: "",
        dob: "",
        occupation: {
            isWorking: false,
            describe: {} // jobTitle - companyName or school - major
        },
        address: "",
        avatar: "",
    }
}


const user = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_USER":
            // console.log("SAVE_USER")
            return {
                isAdmin: action.user.isAdmin,
                // account: {
                //     email: action.user.account.email ,
                //     // password : {type :String, require : true}
                // },
                profile: action.user.profile,
                _id : action.user._id,
            }
        case 'DELETE_USER':
            // console.log("DELETE_USER");
            return initState
        default:
            return state;
    }
}

export default user;
