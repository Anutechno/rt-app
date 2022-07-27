const showNotifReducer = (state = false, action) => {
    switch (action.type) {
        case "SETSHOWNOTIF":
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default showNotifReducer;
