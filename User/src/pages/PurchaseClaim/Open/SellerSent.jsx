import { useEffect, useState } from "react";

import ClaimHeader from "../../../components/Claims/ClaimHeader/index.jsx";
import ClaimInfo from "../../../components/Claims/ClaimInfo";
import ClaimBtnDialogs from "../../../components/Claims/ClaimBtnDialogs";

import ClaimStatus from "../../../components/Claims/ClaimProgressBar/index.jsx";
import ClaimDetails from "../../../components/Claims/ClaimDetails";
import ButtonBox from "../../../components/Claims/ButtonBox/index.jsx";

const SellerSent = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [isCloseClaim, setIsCloseClaim] = useState(false);
  const [isAskUs, setIsAskUs] = useState(false);
  const [claimDetails, setClaimDetails] = useState({});

  useEffect(() => {
    setClaimDetails({
      topic: "The seller sent a message",
      brief: {
        title: "You sent a message to the seller",
        descr:
          "If you can't sort something out with the seller, you can ask use to help beginning 30 Sep 2017.",
      },
      claim: {
        status: "Not recieved item",
        orderId: "12345678-123456",
        seller: "seller_username",
      },
      item: [
        {
          info: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 forcalls, everything in one package",
          condition: "New",
          color: "Blue",
          size: "XL",
          material: "Cotton",
          claimItem: "2 of 3",
        },
        {
          info: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 forcalls, everything in one package",
          condition: "New",
          color: "Blue",
          size: "XL",
          material: "Cotton",
          claimItem: "2 of 3",
        },
      ],
      history: [
        {
          date: "28 Sep 2017",
          topic: "You closed this claim",
          comment: "Example of the buyer's comment.",
        },
        {
          date: "28 Sep 2017",
          topic: "The seller added shipping details",
          carrier: "USPS",
          trackingNumber: "GB12345678901234567890",
        },
        {
          date: "28 Sep 2017",
          topic: "You have opened a claim for not received item",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
        },
        {
          date: "28 Sep 2017",
          topic: "You have opened a claim for not received item",
          claimID: "1234567890",
          claimAmount: "US $1,234.56",
        },
        {
          date: "24 Sep 2017",
          topic: "The seller marked this order as shipped",
        },
        {
          date: "22 Sep 2017",
          topic: "You paid for this order",
          orderDetails: "US $1,234.56(12345678-123456)",
        },
      ],
    });
  }, []);

  const messageClick = () => {
    setIsMessage(true);
    setIsCloseClaim(false);
    setIsAskUs(false);
  };

  const claimClick = () => {
    setIsMessage(false);
    setIsCloseClaim(true);
    setIsAskUs(false);
  };

  const askClick = () => {
    setIsMessage(false);
    setIsCloseClaim(false);
    setIsAskUs(true);
  };

  return (
    <div className="claim-open">
      <h2>{claimDetails.topic}</h2>

      <ClaimBtnDialogs />

      <div className="claim-open-content">
        <ClaimHeader brief={claimDetails.brief} />

        <ClaimStatus position={"accepted"} />

        <div className="claim-open-detail">
          <div className="item-infor d-lg-flex d-md-block justify-content-between">
            <ClaimInfo claimInfo={claimDetails.claim} />

            <ButtonBox btnBox={[true, true, true]} />
          </div>

          <ClaimDetails details={claimDetails} />
        </div>
      </div>
    </div>
  );
};

export default SellerSent;
