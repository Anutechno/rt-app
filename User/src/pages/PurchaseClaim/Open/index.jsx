import { useState } from "react";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/Footer";
import ClaimOpen from "./ClaimOpen";
import SellerAdded from "./SellerAdded";
import RecieveItem from "./RecieveItem";
import RecieveRefund from "./RecieveRefund";
import SellerSent from "./SellerSent";
import ClaimClosed from "./ClaimClosed";
import NoReceivedItem from "./NoReceivedItem";
import UnderReview from "./UnderReview";
import SendUs from "./SendUs";

import "./open.scss";

const PurchaseClaimOpen = () => {
  return (
    <div className="purchase-claim-open">
      <Menu />
      {/* <ClaimOpen /> */}
      {/* <SellerAdded /> */}
      {/* <RecieveItem /> */}
      {/* <RecieveRefund /> */}
      {/* <SellerSent /> */}
      {/* <ClaimClosed /> */}
      <NoReceivedItem />
      {/* <UnderReview /> */}
      {/* <SendUs /> */}
      <Footer />
    </div>
  );
};

export default PurchaseClaimOpen;
