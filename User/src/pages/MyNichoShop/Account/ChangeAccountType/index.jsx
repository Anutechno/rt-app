import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./changeaccounttype.scss";

const ChangeAccountType = () => {
    return (
        <>
            <Menu />
            <div className="ui-change-account-type-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ui-change-account-type-head">
                                <h4>Change account type</h4>
                            </div>
                            <div className="ui-change-account-type-head-content">
                                <p>
                                    E-commerce is strictly regulated and
                                    governed by laws that clearly define the
                                    obligations of sellers and the right of
                                    buyers. These laws apply to all online
                                    commerce, including NichoShop's business,
                                    but the details depend on whether the seller
                                    is operating as an individual or as
                                    a business.
                                </p>
                                <p>Change your current account type:</p>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="account-type"
                                        id="pat"
                                    />
                                    <label class="form-check-label" for="pat">
                                        <p>Personal account</p>
                                        <p>
                                            A personal account is the best
                                            option if you plan to buy things for
                                            personal use or sell your own items.
                                        </p>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="account-type"
                                        id="bat"
                                    />
                                    <label class="form-check-label" for="bat">
                                        <p>Business account </p>
                                        <p>
                                            Choose a business account if you
                                            plan to sell large quantities, if
                                            you have purchased items for resale,
                                            if you have items that you make
                                            yourself and sell with the intention
                                            of making a profit, if you are a
                                            treading assistant, or if you are
                                            buying things for your business.
                                        </p>
                                    </label>
                                </div>
                                <div className="ui-change-account-type-btn">
                                    <button className="btn">Cancel</button>
                                    <button className="btn">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChangeAccountType;
