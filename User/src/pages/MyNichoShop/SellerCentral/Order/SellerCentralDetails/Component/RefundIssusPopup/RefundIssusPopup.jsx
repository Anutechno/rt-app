import OutsideClickHandler from "react-outside-click-handler";
import { GrClose } from "react-icons/gr";

const RefundIssusPopup = ({ popupHandler }) => {
    return (
        <>
            <div className="ui-refund-popup-box">
                <OutsideClickHandler onOutsideClick={popupHandler}>
                    <div className="ui-refund-popup-content">
                        <div className="ui-rpc-head">
                            <p>Refund issued for order 12345678-123456</p>
                            <button onClick={popupHandler}>
                                <GrClose />
                            </button>
                        </div>
                        <div className="ui-rpc-body">
                            <p>
                                On 22 Sep 2019 12:34 AM you have issued a refund
                                in the amount of US $1,234.56 to buyer_username
                                for the following items:
                            </p>

                            <div className="ui-rpc-info">
                                <ul>
                                    <li>Item:</li>
                                    <li>
                                        <a href="#">
                                            Norton Security Deluxe 2016 -300
                                            Days / 1 Device (Qindows, Mac,
                                            Android or iOS)
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>NSLN:</li>
                                    <li>23456789012</li>
                                </ul>
                                <ul>
                                    <li>Condition:</li>
                                    <li>Used</li>
                                </ul>
                                <ul>
                                    <li>Quantity:</li>
                                    <li>2</li>
                                </ul>
                                <ul>
                                    <li>Item price:</li>
                                    <li>US $ 1,234.56</li>
                                </ul>
                                <ul>
                                    <li>Shipping:</li>
                                    <li>
                                        US $123.45 Express Int’l Delivery (12-15
                                        days)
                                    </li>
                                </ul>
                            </div>
                            <div className="ui-rpc-info">
                                <ul>
                                    <li>Item:</li>
                                    <li>
                                        <a href="#">
                                            Norton Security Deluxe 2016 -300
                                            Days / 1 Device (Qindows, Mac,
                                            Android or iOS)
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>NSLN:</li>
                                    <li>23456789012</li>
                                </ul>
                                <ul>
                                    <li>Condition:</li>
                                    <li>Used</li>
                                </ul>
                                <ul>
                                    <li>Quantity:</li>
                                    <li>2</li>
                                </ul>
                                <ul>
                                    <li>Item price:</li>
                                    <li>US $ 1,234.56</li>
                                </ul>
                                <ul>
                                    <li>Shipping:</li>
                                    <li>
                                        US $123.45 Express Int’l Delivery (12-15
                                        days)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ui-rpc-comment">
                            <p>Your comment:</p>
                            <p>
                                Example of the seller’s comment, example of the
                                seller’s comment, example of the seller’s
                                comment, example of the seller’s comment,
                                example of the seller’s comment, example of the
                                seller’s comment, example of the seller’s
                                comment
                            </p>
                        </div>
                        <div className="ui-rpc-close">
                            <button onClick={popupHandler}>Close</button>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </>
    );
};

export default RefundIssusPopup;
