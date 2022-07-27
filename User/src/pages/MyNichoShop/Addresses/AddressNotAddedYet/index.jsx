import { useNavigate } from "react-router";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./addressnotaddedyet.scss";

const AddressNotAddedYet = () => {
    const navigate = useNavigate();

    const addYourAddressHandler = () => {
        return navigate("/addresses/add-your-address", { replace: true });
    };
    return (
        <>
            <Menu />
            <div className="ui-address-not-added-yet-box">
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <div class="ui-bread-crumb">
                                <a href="/">My NichoShop</a>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                </svg>
                                <span>Addresses</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ui-andy-content">
                                <h4>You haven’t add your address yet.</h4>
                                <p>
                                    Address is needed to buy, sell, communicate
                                    with other users, etc.
                                </p>
                                <button
                                    onClick={addYourAddressHandler}
                                    className="btn"
                                >
                                    Add your address
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddressNotAddedYet;
