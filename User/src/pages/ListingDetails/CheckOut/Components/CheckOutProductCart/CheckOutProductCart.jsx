import "./checkoutproductcart.scss";
import ProductImg from "./../../../../../assets/product-img/product.png";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { GrClose } from "react-icons/gr";

const CheckOutProductCart = () => {
    return (
        <>
            <div className="ui-sc-alert">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.11532 0.330444C6.3269 0.118864 6.61386 0 6.91308 0H15.0869C15.3861 0 15.6731 0.118864 15.8847 0.330444L21.6696 6.11532C21.8811 6.3269 22 6.61386 22 6.91308V15.0869C22 15.3861 21.8811 15.6731 21.6696 15.8847L15.8847 21.6696C15.6731 21.8811 15.3861 22 15.0869 22H6.91308C6.61386 22 6.3269 21.8811 6.11532 21.6696L0.330444 15.8847C0.118864 15.6731 0 15.3861 0 15.0869V6.91308C0 6.61386 0.118864 6.3269 0.330444 6.11532L6.11532 0.330444ZM7.38039 2.25641L2.25641 7.38039V14.6196L7.3804 19.7436H14.6196L19.7436 14.6196V7.3804L14.6196 2.25641H7.38039ZM11 5.92308C11.6231 5.92308 12.1282 6.42819 12.1282 7.05128V11C12.1282 11.6231 11.6231 12.1282 11 12.1282C10.3769 12.1282 9.8718 11.6231 9.8718 11V7.05128C9.8718 6.42819 10.3769 5.92308 11 5.92308ZM9.8718 14.9487C9.8718 14.3256 10.3769 13.8205 11 13.8205H11.0099C11.633 13.8205 12.1381 14.3256 12.1381 14.9487C12.1381 15.5718 11.633 16.0769 11.0099 16.0769H11C10.3769 16.0769 9.8718 15.5718 9.8718 14.9487Z"
                        fill="#EB5454"
                    />
                </svg>
                <p>
                    Please change your shipping address or remove the items to
                    continue
                </p>
            </div>
            <div className="ui-sc-product-box">
                <img src={ProductImg} alt="product" />
                <div className="ui-scpr-content">
                    <div className="ui-scpr-left">
                        <a href="#">
                            ICE ORBITAL floating bluetooth ISP3S speaker -
                            White/Blue
                        </a>
                        <ul>
                            <li>
                                <span>Condition:</span> New without tags
                            </li>
                            <li>
                                <span>Size:</span> L
                            </li>
                            <li>
                                <span>Color:</span> Blue
                            </li>
                            <li>
                                <span>Q-ty:</span>{" "}
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Select>
                            </li>
                        </ul>
                    </div>
                    <div className="ui-scpr-right">
                        <div className="ui-copc-cross">
                            <button>
                                <GrClose />
                            </button>
                        </div>
                        <h4>US $ 12,345.67</h4>
                        <Select
                            options={[
                                {
                                    value: "1",
                                    label: (
                                        <div>
                                            <p>
                                                Express International Tracked
                                                Delivery: US $ 123.45
                                            </p>
                                        </div>
                                    ),
                                },
                                {
                                    value: "2",
                                    label: (
                                        <div>
                                            <p>
                                                Express International Tracked
                                                Delivery: US $ 123.45
                                            </p>
                                        </div>
                                    ),
                                },
                                {
                                    value: "3",
                                    label: (
                                        <div>
                                            <p>
                                                Express International Tracked
                                                Delivery: US $ 123.45
                                            </p>
                                        </div>
                                    ),
                                },
                            ]}
                            defaultValue={{
                                value: "1",
                                label: (
                                    <div>
                                        <p>
                                            Express International Tracked
                                            Delivery: US $ 123.45
                                        </p>
                                    </div>
                                ),
                            }}
                        />
                        <p>
                            <span>Delivery:</span> US $ 12,345.67
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutProductCart;
