import { useEffect, useState } from "react";

import ClaimHeader from "../../../components/Claims/ClaimHeader/index.jsx";
import ClaimClose from "../../../components/Claims/ClaimClose/index.jsx";
import ClaimStatus from "../../../components/Claims/ClaimProgressBar/index.jsx";
import ClaimDetails from "../../../components/Claims/ClaimDetails";
import ClaimInfo from "../../../components/Claims/ClaimInfo/index.jsx";
import ClaimBtnDialogs from "../../../components/Claims/ClaimBtnDialogs";
import ButtonBox from "../../../components/Claims/ButtonBox/index.jsx";

const ClaimClosed = () => {
  const [claimDetails, setClaimDetails] = useState({});

  useEffect(() => {
    setClaimDetails({
      topic: "The claim was closed",
      brief: {
        title:
          "Your claim was closed on 30 Sep 2017 because you received a refund.",
        descr:
          "If you can't sort something out with the seller, you can ask us to help beginning 30 Sep 2017.",
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

  return (
    <div className="claim-open">
      <h2>{claimDetails.topic}</h2>

      <div className="claim-open-content">
        <ClaimHeader brief={claimDetails.brief} />

        <div className="claim-open-detail">
          <div className="item-infor d-lg-flex d-md-block justify-content-between">
            <ClaimInfo claimInfo={claimDetails.claim} />
          </div>
          <ClaimDetails details={claimDetails} />
        </div>
      </div>
    </div>
  );
};

export default ClaimClosed;
