const initState = {
    isAdmin: false,
    account: {
        email: "",
        // password : {type :String, require : true}
    },
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
            return {
                isAdmin: action.payload.isAdmin,
                account: {
                    email: action.payload.account.email ,
                    // password : {type :String, require : true}
                },
                profile: action.payload.profile,
            }
        default:
            return state;
    }
}

export default user;
