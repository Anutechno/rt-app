import authReducer from "./authReducer";
import hideSearchBarReducer from "./hideSearchBar";
import showNotifReducer from "./showNotif";
import MNSPurchases from "./MNSPurchases";
import MNSMessages from "./MNSMessages";
import MNSClaim from "./MNSClaim";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  // user: authReducer,
  hideSearchBar: hideSearchBarReducer,
  showNotif: showNotifReducer,
  purchases: MNSPurchases,
  messages: MNSMessages,
  // auth reducer
  auth: authReducer,
  // user-claim reducer
  claim: MNSClaim,
});

export default allReducers;
