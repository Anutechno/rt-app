import action_type from "../pages/PurchaseClaim/Action/action.type";

const initialState = {
    toggleMessageDialog: {
        msgSend: false,
        closeClaim: false,
        documentSend: false,
        askUs: false,
    },
};
const MNSClaim = (state = initialState, action) => {
    switch (action.type) {
        case action_type.HAS_MESSAGE_BUTTON_GROUP:
            return { ...state, toggleMessageDialog: action.payload };
        default:
            return state;
    }
};

export default MNSClaim;
