import { useEffect, useState } from "react";

import ClaimHeader from "../../../components/Claims/ClaimHeader/index.jsx";
import ClaimClose from "../../../components/Claims/ClaimClose/index.jsx";
import ClaimInfo from "../../../components/Claims/ClaimInfo";
import ClaimStatus from "../../../components/Claims/ClaimProgressBar/index.jsx";
import ClaimDetails from "../../../components/Claims/ClaimDetails";
import ClaimBtnDialogs from "../../../components/Claims/ClaimBtnDialogs";
import { useDispatch } from "react-redux";
import { hasButton } from "../Action/actions.js";

const SendUs = () => {
  const [claimDetails, setClaimDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      hasButton({
        msgSend: false,
        closeClaim: false,
        documentSend: true,
        askUs: false,
      })
    );
  }, []);

  useEffect(() => {
    setClaimDetails({
      topic: "Send us documentation",
      brief: {
        title:
          "NichoShop Customer Support requested additional documentation from you",
        descr: "Provide us with the documentation by 22 Sep 2019",
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
          claimItem: "2 of 3",
        },
      ],
      history: [
        {
          date: "28 Sep 2017",
          topic:
            "NichoShop Customer Support requested additional documentation from you",
        },
        {
          date: "28 Sep 2017",
          topic: "You asked us to help",
          reason: "The seller hasn't responded yet",
          comment: "Example of the buyer's comment",
        },
        {
          date: "28 Sep 2017",
          topic: "You hav eopened a claim for not received item",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
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
      <h2> {claimDetails.topic} </h2>

      <ClaimBtnDialogs />

      <div className="claim-open-content">
        <ClaimHeader brief={claimDetails.brief} />

        <ClaimClose />

        <ClaimStatus position={"in"} />

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

export default SendUs;
