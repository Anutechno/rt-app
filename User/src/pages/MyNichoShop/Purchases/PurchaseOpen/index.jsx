import { useState } from "react";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import ClaimOpen from "./ClaimOpen";
// import ClaimOpen from "./ClaimOpen";
// import SellerAdded from "./SellerAdded";
// import RecieveItem from "./RecieveItem";
// import RecieveRefund from "./RecieveRefund";
// import SellerSent from "./SellerSent";
// import ClaimClosed from "./ClaimClosed";
// import NoReceivedItem from "./NoReceivedItem";

import "./open.scss";
import ClaimClose from "./RecieveItem";
import SellerAdded from "./SellerAdded";
// import UnderReview from "./UnderReview";
// import SendUs from "./SendUs";

const PurchaseOpen = () => {
    return (
        <div className="purchase-claim-open">
            <Menu />
            <ClaimOpen />
            <SellerAdded />
            <ClaimClose />
            {/* <RecieveRefund /> */}
            {/* <SellerSent /> */}
            {/* <ClaimClosed /> */}
            {/* <NoReceivedItem /> */}
            {/* <UnderReview /> */}
            {/* <SendUs /> */}
            <Footer />
        </div>
    );
};

export default PurchaseOpen;
