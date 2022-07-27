import { Link } from "react-router-dom";
import "./../account.css";
import Header from "../../../../components/header/Header";
import Menu from "../../../../components/menu/Menu";

import AccountFooter from "../../../../components/accountfooter/AccountFooter";

function CloseRequest() {
    return (
        <div className="home-page">
            <Header />
            <Menu />
            <div className="cs_section ne_css account-close-pg close-account">
                <div className="container_no">
                    <div className="inner_content no_padd">
                        <div className="inner_content-two close">
                            <h3 className="all_heading">
                                Close my NichoShop account
                            </h3>
                            <hr />
                        </div>
                        <div className="close_inner">
                            <p>
                                Please read the information below and understand
                                how your account will be closed.
                            </p>
                            <p>
                                If you click the button{" "}
                                <b>"Close my account"</b> we'll start processing
                                your request, it takes 7 days. During the
                                process of closing, you'll have access to your
                                account, but you won't be able to buy, sell or
                                change information in your account. When the
                                waiting period is over, you'll receive an email
                                confirming that your account has been closed.
                            </p>
                            <p>
                                Once your account is closed, you'll no longer be
                                able to access any part of NichoShop that
                                requires an account. Also no one will be able to
                                use this username and email address to sign up a
                                new NichoShop account.
                            </p>
                        </div>
                        <div className="inner_close">
                            <div className="form-group">
                                <Link
                                    to="/user/my-account"
                                    className="close close_Cancel"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to="/user/close-requeset-cancel"
                                    className="close close_Continue"
                                >
                                    Close my account
                                </Link>
                            </div>
                        </div>
                        <div className="space_div"></div>
                    </div>
                </div>
            </div>
            <AccountFooter />
        </div>
    );
}

export default CloseRequest;
