import React, { useEffect, useState } from "react";
import "../MyNichoShop.css";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import Notification from "../../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import Main from "./main.messages";

function Messages({ props }) {
    const public_info = useSelector((state) => state.messages);
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
            <Main />
            <Footer />
        </div>
    );
}

export default Messages;
