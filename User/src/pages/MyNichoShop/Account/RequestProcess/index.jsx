import "./../account.css";
import Header from "../../../../components/header/Header";
import Menu from "../../../../components/menu/Menu";

import AccountFooter from "../../../../components/accountfooter/AccountFooter";

function RequestProcess() {
    return (
        <div className="home-page">
            <Header />
            <Menu />
            <div className="cs_section ne_css account-close-pg close-account">
                <div className="container_no">
                    <div className="inner_content no_padd">
                        {/* <div className="inner_content-two close">
                            <h3 className="all_heading">
                                Close my NichoShop account
                            </h3>
                            <hr />
                        </div> */}
                        <div className="close_inner">
                            <h4 className="mb-3">Okay, Name</h4>
                            <p>
                                You're started a process of closing your
                                NichoShop account, it will take 7 days. When
                                this 7-day period expires, you'll receive an
                                email confirming that your account has been
                                closed.
                            </p>
                            <p>
                                We'll be happy if in future you again sign up
                                and be part of NichoShop community.
                            </p>
                        </div>
                    </div>
                    <div className="space_div"></div>
                </div>
            </div>
            <AccountFooter />
        </div>
    );
}

export default RequestProcess;
