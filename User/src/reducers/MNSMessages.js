const initialState = {
    public_curInfoPage : 0,
    messages_data : []
}
const MNSMessages = (state = initialState, action) => {
    switch (action.type) {
        case "SETPUBLICPAGE":
            return {...state, public_curInfoPage : action.payload};
        case "SETMESSAGESDATA":
            // state.public_curInfoPage = 1;
            return {...state, messages_data : action.payload}
        default:
            return state;
    }
};
  
export default MNSMessages;