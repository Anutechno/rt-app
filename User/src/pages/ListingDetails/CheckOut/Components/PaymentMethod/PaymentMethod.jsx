import "./paymentmethod.scss";
import CardImg1 from "./../../../../../assets/payment-img/card-1.png";
import CardImg2 from "./../../../../../assets/payment-img/card-2.png";
import CardImg3 from "./../../../../../assets/payment-img/card-3.png";
import CardImg4 from "./../../../../../assets/payment-img/card-4.png";
import { Col, Form, Row } from "react-bootstrap";
import {
    Button,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    FormControl,
} from "@material-ui/core";
import { MdEdit, MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import SelectOption from "react-select";

const PaymentMethod = ({ paymentOptionCencel }) => {
    const { register, handleSubmit } = useForm();

    const [getCountryCode, setCountryCode] = useState("");

    /**
     * @description: select billing address
     */
    const [getSelectedBillingAddress, setSelectedBillingAddress] =
        useState(false);

    const [getAddAddressClicked, setAddAddressClicked] = useState(false);
    return (
        <>
            <div className="ui-payment-method-add-box">
                <div className="ui-pm-db-head">
                    <h4>Credit or Debit Cards</h4>
                    <p>NichoShop accepts all major credit and debit cards.</p>
                    <div className="ui-pm-db-img">
                        <img src={CardImg1} alt="card" />
                        <img src={CardImg2} alt="card" />
                        <img src={CardImg3} alt="card" />
                        <img src={CardImg4} alt="card" />
                    </div>
                </div>
                <div className="ui-pm-add-card">
                    <h4>Add a card</h4>
                    <div className="ui-pm-card-alert">
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
                            Looks like something wasn’t correct. Please enter
                            the payment details again.
                        </p>
                    </div>
                    <Form>
                        <Form.Group>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Card number"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Cardholder’s name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <TextField
                                            id="outlined-basic"
                                            label="Expiration date"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            defaultValue="MM/YY"
                                        />
                                    </div>
                                </Col>
                                <Col
                                    lg={6}
                                    className="d-flex align-items-center gap-2 mb-3"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-basic"
                                            label="Expiration date"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            defaultValue="3 or 4 digits"
                                        />
                                    </div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11.75 1.5C6.08908 1.5 1.5 6.08908 1.5 11.75C1.5 17.4109 6.08908 22 11.75 22C17.4109 22 22 17.4109 22 11.75C22 6.08908 17.4109 1.5 11.75 1.5ZM0 11.75C0 5.26065 5.26065 0 11.75 0C18.2393 0 23.5 5.26065 23.5 11.75C23.5 18.2393 18.2393 23.5 11.75 23.5C5.26065 23.5 0 18.2393 0 11.75ZM11.75 6.6C12.1642 6.6 12.5 6.93579 12.5 7.35V11.75C12.5 12.1642 12.1642 12.5 11.75 12.5C11.3358 12.5 11 12.1642 11 11.75V7.35C11 6.93579 11.3358 6.6 11.75 6.6ZM11 16.15C11 15.7358 11.3358 15.4 11.75 15.4H11.761C12.1752 15.4 12.511 15.7358 12.511 16.15C12.511 16.5642 12.1752 16.9 11.761 16.9H11.75C11.3358 16.9 11 16.5642 11 16.15Z"
                                            fill="#616161"
                                        />
                                    </svg>
                                </Col>
                            </Row>
                        </Form.Group>
                        <div className="ui-pm-add-checkbox">
                            <Form.Check
                                type="checkbox"
                                id="custom-radio-1"
                                label="Save this card for future orders"
                            />
                        </div>
                    </Form>
                </div>
                {/* billing selected address */}

                <div className="ui-pm-billing-address mt-3">
                    <h4>Billing address</h4>
                    {!getSelectedBillingAddress && (
                        <>
                            <ul>
                                <li>Name Surname</li>
                                <li>2 Savoy Road</li>
                                <li>Reading, BerkshireRB3 7LU</li>
                                <li>United Kingdom</li>
                            </ul>
                            <button
                                onClick={() => {
                                    setSelectedBillingAddress(true);
                                }}
                            >
                                <MdEdit />
                                Change
                            </button>
                        </>
                    )}
                </div>
                {/* billing address select */}
                {!getAddAddressClicked && (
                    <>
                        {getSelectedBillingAddress && (
                            <>
                                <div className="ui-pm-bd-select">
                                    <Form.Check
                                        type="radio"
                                        name="select_address"
                                    />
                                    <ul>
                                        <li>Name Surname</li>
                                        <li>2 Savoy Road</li>
                                        <li>Reading, BerkshireRB3 7LU</li>
                                        <li>United Kingdom</li>
                                    </ul>
                                </div>
                                <div className="ui-pm-bd-select">
                                    <Form.Check
                                        type="radio"
                                        name="select_address"
                                    />
                                    <ul>
                                        <li>Name Surname</li>
                                        <li>2 Savoy Road</li>
                                        <li>Reading, BerkshireRB3 7LU</li>
                                        <li>United Kingdom</li>
                                    </ul>
                                </div>
                                {/* add new address button */}
                                <div className="ui-csh-add-new-card mb-3">
                                    <button
                                        onClick={() => {
                                            setAddAddressClicked(true);
                                        }}
                                    >
                                        <MdOutlineAddCircleOutline /> Add a new
                                        address
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                )}
                {getAddAddressClicked && (
                    <div className="ui-pm-billing-form">
                        <Form>
                            <div className="ui-csh-form">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <div className="mb-3">
                                        <SelectOption
                                            options={[
                                                {
                                                    label: "United Kingdom",
                                                    value: "UK",
                                                },
                                                {
                                                    label: "United States",
                                                    value: "US",
                                                },
                                            ]}
                                            placeholder="Country"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Full name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Street address"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Apartment"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Town/City"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Postcode"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="ui-phone-no mb-3">
                                        <FormControl
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        >
                                            <InputLabel htmlFor="my-input">
                                                Mobile phone number
                                            </InputLabel>
                                            <OutlinedInput
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="number"
                                                endAdornment={
                                                    <InputAdornment position="start">
                                                        <div className="ui-country-code">
                                                            <PhoneInput
                                                                international
                                                                placeholder="Enter phone number"
                                                                value={
                                                                    getCountryCode
                                                                }
                                                                onChange={
                                                                    setCountryCode
                                                                }
                                                            />
                                                        </div>
                                                    </InputAdornment>
                                                }
                                                label="Mobile phone number"
                                            />
                                        </FormControl>
                                    </div>
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                )}
                <div className="ui-pm-billing-btn">
                    <Button variant="contained">Add</Button>
                    <Button onClick={paymentOptionCencel} variant="outlined">
                        Cencel
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
