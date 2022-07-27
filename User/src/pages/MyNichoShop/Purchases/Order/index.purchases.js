import React from "react";
import "./../mynichoshop.css";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import Main from "./Main.purchases";
import Detail from "./Detail.purchases";
import Notification from "../../../components/notification/Notification";
import { useSelector } from "react-redux";
import Contact from "./Contact.purchases";
import MessageSuccess from "./MessageSuccess.purchases";
import Feedback from "./Feedback.purchases";
import FeedbackSuccess from "./FeedbackSuccess.purchases";
import SubCategory from "./SubCategory.purchases";

function MNSPurchases({ props }) {
    const public_info = useSelector((state) => state.purchases);
    const showNotif = useSelector((state) => state.showNotif);
    return (
        <div className="my-nicho-shop">
            {console.log(public_info)}
            <Menu />
            {showNotif ? (
                <Notification
                    color="green"
                    title="aaaaa"
                    description="adadadadad"
                />
            ) : null}
            {public_info.public_curInfoPage == 0 ? <Main /> : null}
            {public_info.public_curInfoPage == 1 ? <Detail /> : null}
            {public_info.public_curInfoPage == 2 ? <Contact /> : null}
            {public_info.public_curInfoPage == 3 ? <MessageSuccess /> : null}
            {public_info.public_curInfoPage == 4 ? <Feedback /> : null}
            {public_info.public_curInfoPage == 5 ? (
                <FeedbackSuccess message="Thank you for leaving feedback!" />
            ) : null}
            {public_info.public_curInfoPage == 6 ? <SubCategory /> : null}
            <Footer />
        </div>
    );
}

export default MNSPurchases;
