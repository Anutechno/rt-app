const initialState = {
    public_curInfoPage : 0
}
const MNSPurchases = (state = initialState, action) => {
    switch (action.type) {
        case "SETPUBLICPAGE":
            return {...state, public_curInfoPage : action.payload};
        case "SETDETAILITEM":
            state.public_curInfoPage = 1;
            return {...state, detailItem : action.payload}
        default:
            return state;
    }
};
  
export default MNSPurchases;
  