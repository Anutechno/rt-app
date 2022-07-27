import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import MessageSend from "../../../../components/Claims/ClaimBtnDialogs/MessageSend";
import CloseClaim from "../../../../components/Claims/ClaimBtnDialogs/CloseClaim";
import ClaimStatus from "../../../../components/Claims/ClaimProgressBar/index.jsx";
import ClaimDetails from "../../../../components/Claims/ClaimDetails";

const ClaimClose = () => {
    const [isMessage, setIsMessage] = useState(false);
    const [isCloseClaim, setIsCloseClaim] = useState(false);
    const [claimDetils, setClaimDetails] = useState({});

    useEffect(() => {
        setClaimDetails({
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

    const messageClick = () => {
        setIsMessage(true);
        setIsCloseClaim(false);
    };

    const claimClick = () => {
        setIsMessage(false);
        setIsCloseClaim(true);
    };

    return (
        <div className="claim-open">
            <h2>The claim was closed</h2>

            {isMessage ? <MessageSend isOpen={setIsMessage} /> : ""}
            {isCloseClaim ? <CloseClaim isOpen={setIsCloseClaim} /> : ""}

            <div className="claim-open-content">
                <div className="claim-open-header">
                    <h3>
                        You closed your claim on 30 Sep 2017 becuase you
                        received the item.
                    </h3>
                </div>

                <ClaimStatus position={"delivered"} />

                <div className="claim-open-detail">
                    <div className="item-infor d-lg-flex d-md-block justify-content-between">
                        <div>
                            <h3>Not recieved item</h3>
                            <p>
                                Order ID:{" "}
                                <span className="order-id">
                                    12345678-123456
                                </span>
                            </p>
                            <p>
                                Seller: <span>seller_username</span>
                            </p>
                        </div>
                        <div className="claim-buttons">
                            {isMessage ? (
                                ""
                            ) : (
                                <Button
                                    className="message-button"
                                    onClick={messageClick}
                                >
                                    Send a message
                                </Button>
                            )}
                            {isCloseClaim ? (
                                ""
                            ) : (
                                <Button
                                    className="claim-button"
                                    onClick={claimClick}
                                >
                                    Close the claim
                                </Button>
                            )}
                        </div>
                    </div>
                    <ClaimDetails details={claimDetils} />
                </div>
            </div>
        </div>
    );
};

export default ClaimClose;
