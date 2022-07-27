import React, { useState } from "react";
import "./MyNichoShop.css";
import Menu from "../../components/menu/Menu";
import Card from "../../components/MyNichoShop/card/Card";
import Footer from "../../components/MyNichoShop/footer/Footer";

import Bidding from "../../assets/my-nicho-shop/Bidding.png";
import Purchases from "../../assets/my-nicho-shop/Purchases.png";
import SellerCentral from "../../assets/my-nicho-shop/SellerCentral.png";
import Messages from "../../assets/my-nicho-shop/Messages.png";
import WatchList from "../../assets/my-nicho-shop/WatchList.png";
import Account from "../../assets/my-nicho-shop/Account.png";
import Addresses from "../../assets/my-nicho-shop/Addresses.png";
import PaymentMethods from "../../assets/my-nicho-shop/PaymentMethods.png";
import EmailPreferences from "../../assets/my-nicho-shop/EmailPreferences.png";
import Help from "../../assets/my-nicho-shop/Help.png";
import Notification from "../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

function MyNichoShop({ props }) {
    const [curPage, SetCurPage] = useState("none");
    // let history = useHistory();

    const fn_changePage = (path) => {
        // history.push(path);
    };

    const showNotif = useSelector((state) => state.showNotif);
    return (
        <div className="my-nicho-shop">
            <Menu />
            {showNotif ? (
                <Notification
                    color="green"
                    title="aaaaa"
                    description="adadadadad"
                />
            ) : null}
            <div className="my-nicho-shop-container container-ns">
                <h2 className="title">My NichoShop</h2>
                <div className="my-nicho-shop-items">
                    <Card
                        image={Bidding}
                        alt="Bidding icon"
                        title="Bidding"
                        description="View your bids, increase your max. bids, and see your winning bids."
                    />
                    <Card
                        image={Purchases}
                        alt="Purchases icon"
                        title="Purchases"
                        description="View and track your purchases mange your cancellations claims and returns."
                        m_page={fn_changePage}
                    />
                    <Card
                        image={SellerCentral}
                        alt="Seller Central icon"
                        title="Seller Central"
                        description="View your sales, manage cancellations, claims and returns."
                    />
                    <Card
                        image={Messages}
                        alt="Messages icon"
                        title="Messages"
                        description="View your bids, increase your max. bids, and see your winning bids."
                        m_page={fn_changePage}
                    />
                    <Card
                        image={WatchList}
                        alt="Watch list icon"
                        title="Watch list"
                        description="View the items you have added to your watch list."
                    />
                    <Card
                        image={Account}
                        alt="Account icon"
                        title="Account"
                        description="Edit your email address, mobile number, password, registration address and business information."
                    />
                    <Card
                        image={Addresses}
                        alt="Addresses icon"
                        title="Addresses list"
                        description="Edit your shipping addresses, your shiop from addresses and return addresses."
                    />

                    <Card
                        image={PaymentMethods}
                        alt="Payment methods icon"
                        title="Payment methods"
                        description="View your bids, increase your max. bids, and see your winning bids."
                    />
                    <Card
                        image={EmailPreferences}
                        alt="Email preferences icon"
                        title="Email preferences"
                        description="Choose how emails look and whitch messages you want to receive."
                    />
                    <Card
                        image={Help}
                        alt="Help icon"
                        title="Help"
                        description="Browse available help topics"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyNichoShop;
