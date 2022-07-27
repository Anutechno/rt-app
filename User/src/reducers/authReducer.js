const init = {
    isAuth: false,
};

const authReducer = (state = init, action) => {
    switch (action.type) {
        case "AUTH":
            console.log(action);
        default:
            return state;
    }
};

export default authReducer;
