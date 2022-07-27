import { Link } from "react-router-dom";
import "./../account.css";
import Header from "../../../../components/header/Header";
import Menu from "../../../../components/menu/Menu";

import AccountFooter from "../../../../components/accountfooter/AccountFooter";

function RequestCancel() {
    return (
        <div className="home-page">
            <Header />
            <Menu />
            <div className="cs_section ne_css account-close-pg close-account req-cancel">
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
                                Sorry but right now you cannot close your
                                NichoShop account, because you have one or more
                                recently sold items and you should wait to
                                expiry the return policy that you specify in
                                your listings (i.e. the time during which buyers
                                can return their purchases).
                            </p>
                            <p>
                                Go back after 25 days and you'll be able to
                                close your account.
                            </p>
                            <p>
                                Sorry but right now you cannot close your
                                NichoShop account, because you have one or more
                                recently purchased items and you should wait 30
                                days after your last purchase before you can
                                close your account.
                            </p>
                            <p>
                                Go back after 25 days and you'll be able to
                                close your account.
                            </p>
                            <p>
                                Sorry but right now you cannot close your
                                NichoShop account, because you have open one or
                                more requests (2 return requests, 1 cancellation
                                request, 3 not received items).
                            </p>
                        </div>
                        <div className="inner_close">
                            <Link to="/" className="close close_Continue">
                                Go to NichShop
                            </Link>
                        </div>
                        <div className="space_div"></div>
                    </div>
                </div>
            </div>
            <AccountFooter />
        </div>
    );
}

export default RequestCancel;
