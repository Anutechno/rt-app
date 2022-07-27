import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import "./checkout.scss";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import {
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    FormControl,
} from "@material-ui/core";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";
import ReEnterCard from "./Components/ReEnterCard/ReEnterCard";
import CartSummary from "../ShopingCart/Components/CartSummary/CartSummary";
import ProductCard from "../ShopingCart/Components/ProductCard/ProductCard";
import CheckOutProductCart from "./Components/CheckOutProductCart/CheckOutProductCart";

const CheckOut = () => {
    /**
     * @description: this state for is shipping address edit
     */
    const { register, handleSubmit } = useForm();

    const [getCountryCode, setCountryCode] = useState("");
    const [getPhoneNumber, setPhoneNumber] = useState("");

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    };

    const [getShippingAddressInfo, setShippingAddressInfo] = useState({
        apartment: "chittagong",
        country: "Bangladesh",
        countryCode: "+880",
        fullName: "Md Haider",
        phoneNumber: "1882939599",
        postCode: "123",
        streetAddress: "noakhali chittagong",
        townCity: "chittagong",
    });

    const [isShippingAddressEdit, setIsShippingAddressEdit] = useState(false);
    const shippingAddressHandler = (data) => {
        setShippingAddressInfo({
            ...data,
            countryCode: getCountryCode,
        });
        setIsShippingAddressEdit(false);
    };

    /**
     * @description: payment method button is toggled
     */

    const [getIsDetailsToggel, setIsDetailsToggel] = useState(false);

    /**
     * @description: add new payment method with address
     */

    const [isAddNewPayment, setIsAddNewPayment] = useState(false);

    /**
     * @description: payment method close
     */

    const paymentOptionCencel = () => {
        setIsAddNewPayment(false);
    };

    /**
     * @description: billing address edit
     */

    const [getIsBillingAddressEdit, setIsBillingAddressEdit] = useState(false);

    return (
        <>
            <Menu />
            <div className="ui-checkout">
                <Container>
                    <Row>
                        <Col lg={9}>
                            <div className="ui-checkout-shipping-head">
                                <Card>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="ui-csh-title">
                                                <h4>Shipping address</h4>
                                            </div>
                                            {/* display user address & info */}
                                            {!isShippingAddressEdit && (
                                                <div className="ui-csh-details">
                                                    {Boolean(
                                                        getShippingAddressInfo
                                                    ) && (
                                                        <ul>
                                                            <li>
                                                                {
                                                                    getShippingAddressInfo.fullName
                                                                }
                                                            </li>
                                                            <li>
                                                                {
                                                                    getShippingAddressInfo.country
                                                                }
                                                            </li>
                                                            <li>
                                                                {
                                                                    getShippingAddressInfo.streetAddress
                                                                }
                                                            </li>
                                                            <li>
                                                                {
                                                                    getShippingAddressInfo.townCity
                                                                }
                                                            </li>
                                                            <li>
                                                                {
                                                                    getShippingAddressInfo.postCode
                                                                }
                                                            </li>
                                                            <li>
                                                                {getShippingAddressInfo.countryCode +
                                                                    getShippingAddressInfo.phoneNumber}
                                                            </li>
                                                        </ul>
                                                    )}

                                                    <button
                                                        onClick={() => {
                                                            setIsShippingAddressEdit(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        <MdEdit /> Change
                                                    </button>
                                                </div>
                                            )}
                                            {/* add user address & info */}
                                            {isShippingAddressEdit && (
                                                <div className="ui-csh-form">
                                                    <Form
                                                        onSubmit={handleSubmit(
                                                            shippingAddressHandler
                                                        )}
                                                    >
                                                        <Form.Group
                                                            className="mb-3"
                                                            controlId="formBasicEmail"
                                                        >
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Country"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "country",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Full name"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "fullName",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Street address"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "streetAddress",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Apartment"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "apartment",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Town/City :"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "townCity",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="Postcode"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                    {...register(
                                                                        "postCode",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className="ui-phone-no">
                                                                <FormControl
                                                                    variant="outlined"
                                                                    size="small"
                                                                    fullWidth
                                                                >
                                                                    <InputLabel htmlFor="my-input">
                                                                        Mobile
                                                                        phone
                                                                        number
                                                                    </InputLabel>
                                                                    <OutlinedInput
                                                                        id="phoneNumber"
                                                                        name="phoneNumber"
                                                                        type="number"
                                                                        value={
                                                                            getPhoneNumber
                                                                        }
                                                                        {...register(
                                                                            "phoneNumber",
                                                                            {
                                                                                required: true,
                                                                            }
                                                                        )}
                                                                        onChange={
                                                                            phoneNumberHandler
                                                                        }
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
                                                        <div className="ui-csh-form-btn">
                                                            <Button
                                                                onClick={() => {
                                                                    setIsShippingAddressEdit(
                                                                        false
                                                                    );
                                                                }}
                                                                variant="outlined"
                                                            >
                                                                Cencel
                                                            </Button>
                                                            <Button
                                                                type="submit"
                                                                variant="contained"
                                                            >
                                                                Save
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            )}
                                        </Col>
                                        <Col lg={6}>
                                            <div className="ui-csh-payment-card">
                                                <h4>Payment method</h4>
                                            </div>
                                            {/* payment methid  with address */}
                                            {!isAddNewPayment && (
                                                <>
                                                    <div className="ui-csh-payment-card-details">
                                                        <div className="ui-csh-payment-card-box">
                                                            <div className="ui-csh-pc">
                                                                <svg
                                                                    width="36"
                                                                    height="11"
                                                                    viewBox="0 0 36 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12.9688 10.4163L14.7655 0.335938H17.5729L15.8323 10.4163H12.9688Z"
                                                                        fill="#3C58BF"
                                                                    />
                                                                    <path
                                                                        d="M12.9688 10.4163L15.2708 0.335938H17.5729L15.8323 10.4163H12.9688Z"
                                                                        fill="#293688"
                                                                    />
                                                                    <path
                                                                        d="M25.9969 0.448018C25.4354 0.224009 24.537 0 23.4141 0C20.6067 0 18.5854 1.40005 18.5854 3.41613C18.5854 4.92819 19.9891 5.71222 21.112 6.21624C22.235 6.72026 22.5719 7.05627 22.5719 7.50429C22.5719 8.17631 21.6735 8.51232 20.8874 8.51232C19.7645 8.51232 19.1468 8.34432 18.1923 7.9523L17.7993 7.7843L17.4062 10.0804C18.08 10.3604 19.3153 10.6404 20.6067 10.6404C23.5825 10.6404 25.5477 9.24035 25.5477 7.11227C25.5477 5.93623 24.8178 5.04019 23.1333 4.31216C22.1227 3.80815 21.5051 3.52813 21.5051 3.02412C21.5051 2.5761 22.0104 2.12808 23.1333 2.12808C24.0879 2.12808 24.7616 2.29609 25.267 2.5201L25.5477 2.6321L25.9969 0.448018Z"
                                                                        fill="#3C58BF"
                                                                    />
                                                                    <path
                                                                        d="M25.9969 0.448018C25.4354 0.224009 24.537 0 23.4141 0C20.6067 0 19.0907 1.40005 19.0907 3.41613C19.0907 4.92819 19.9891 5.71222 21.112 6.21624C22.235 6.72026 22.5719 7.05627 22.5719 7.50429C22.5719 8.17631 21.6735 8.51232 20.8874 8.51232C19.7645 8.51232 19.1468 8.34432 18.1923 7.9523L17.7993 7.7843L17.4062 10.0804C18.08 10.3604 19.3153 10.6404 20.6067 10.6404C23.5825 10.6404 25.5477 9.24035 25.5477 7.11227C25.5477 5.93623 24.8178 5.04019 23.1333 4.31216C22.1227 3.80815 21.5051 3.52813 21.5051 3.02412C21.5051 2.5761 22.0104 2.12808 23.1333 2.12808C24.0879 2.12808 24.7616 2.29609 25.267 2.5201L25.5477 2.6321L25.9969 0.448018Z"
                                                                        fill="#293688"
                                                                    />
                                                                    <path
                                                                        d="M30.8272 0.335938C30.1534 0.335938 29.6481 0.391939 29.3673 1.06396L25.1562 10.4163H28.1882L28.7497 8.73626H32.3432L32.6801 10.4163H35.3752L33.017 0.335938H30.8272V0.335938ZM29.5358 7.05619C29.7042 6.55217 30.6587 4.08808 30.6587 4.08808C30.6587 4.08808 30.8833 3.47206 31.0518 3.08004L31.2202 4.03208C31.2202 4.03208 31.7817 6.55217 31.894 7.11219H29.5358V7.05619Z"
                                                                        fill="#3C58BF"
                                                                    />
                                                                    <path
                                                                        d="M31.501 0.335938C30.8272 0.335938 30.3219 0.391939 30.0411 1.06396L25.1562 10.4163H28.1882L28.7497 8.73626H32.3432L32.6801 10.4163H35.3752L33.017 0.335938H31.501V0.335938ZM29.5358 7.05619C29.7604 6.49617 30.6587 4.08808 30.6587 4.08808C30.6587 4.08808 30.8833 3.47206 31.0518 3.08004L31.2202 4.03208C31.2202 4.03208 31.7817 6.55217 31.894 7.11219H29.5358V7.05619Z"
                                                                        fill="#293688"
                                                                    />
                                                                    <path
                                                                        d="M7.80485 7.39187L7.52411 5.93581C7.01878 4.25575 5.39049 2.40768 3.59375 1.51164L6.12041 10.472H9.1524L13.7004 0.391602H10.6684L7.80485 7.39187Z"
                                                                        fill="#3C58BF"
                                                                    />
                                                                    <path
                                                                        d="M7.80485 7.39187L7.52411 5.93581C7.01878 4.25575 5.39049 2.40768 3.59375 1.51164L6.12041 10.472H9.1524L13.7004 0.391602H11.2299L7.80485 7.39187Z"
                                                                        fill="#293688"
                                                                    />
                                                                    <path
                                                                        d="M0 0.335938L0.505332 0.447942C4.0988 1.28797 6.56931 3.41606 7.52383 5.93615L6.51316 1.17597C6.34472 0.503944 5.83939 0.335938 5.22176 0.335938H0Z"
                                                                        fill="#FFBC00"
                                                                    />
                                                                    <path
                                                                        d="M0 0.335938C3.59347 1.17597 6.56931 3.36005 7.52383 5.88015L6.56931 1.904C6.40087 1.23197 5.83939 0.839956 5.22176 0.839956L0 0.335938Z"
                                                                        fill="#F7981D"
                                                                    />
                                                                    <path
                                                                        d="M0 0.335938C3.59347 1.17597 6.56931 3.36005 7.52383 5.88015L6.85005 3.69607C6.68161 3.02404 6.45702 2.35201 5.67094 2.072L0 0.335938Z"
                                                                        fill="#ED7C00"
                                                                    />
                                                                    <path
                                                                        d="M10.6108 7.05627L8.70176 5.1522L7.80339 7.28028L7.5788 5.88022C7.07346 4.20016 5.44517 2.35209 3.64844 1.45605L6.1751 10.4164H9.20709L10.6108 7.05627ZM15.8325 10.4164L13.4182 7.9523L12.969 10.4164H15.8325V10.4164ZM22.2896 6.94426C22.5142 7.16827 22.6265 7.33628 22.5703 7.56029C22.5703 8.23231 21.6719 8.56833 20.8859 8.56833C19.7629 8.56833 19.1453 8.40032 18.1908 8.00831L17.7977 7.8403L17.4047 10.1364C18.0785 10.4164 19.3137 10.6964 20.6051 10.6964C22.4019 10.6964 23.8617 10.1924 24.7039 9.29635L22.2896 6.94426ZM25.5461 10.4164H28.1851L28.7466 8.73633H32.3401L32.6769 10.4164H35.372L34.4175 6.32824L31.0486 3.08012L31.2171 3.97615C31.2171 3.97615 31.7786 6.49625 31.8909 7.05627H29.5327C29.7572 6.49625 30.6556 4.08816 30.6556 4.08816C30.6556 4.08816 30.8802 3.47213 31.0486 3.08012"
                                                                        fill="#051244"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            {/* payment card info */}
                                                            <div className="ui-csh-pcd-right">
                                                                <h4>
                                                                    Visa xxxx -
                                                                    1234
                                                                </h4>
                                                                {!getIsBillingAddressEdit && (
                                                                    <>
                                                                        <ul>
                                                                            <li>
                                                                                Name
                                                                                Surname
                                                                            </li>
                                                                            <li>
                                                                                06/2019
                                                                            </li>
                                                                        </ul>
                                                                        <button
                                                                            onClick={() => {
                                                                                setIsDetailsToggel(
                                                                                    !getIsDetailsToggel
                                                                                );
                                                                            }}
                                                                            className={
                                                                                getIsDetailsToggel &&
                                                                                "show"
                                                                            }
                                                                        >
                                                                            See
                                                                            details{" "}
                                                                            <IoIosArrowDown />
                                                                        </button>
                                                                    </>
                                                                )}

                                                                {getIsBillingAddressEdit && (
                                                                    <div className="ui-csh-pcd-billing-add-edit mb-3">
                                                                        <p>
                                                                            Cardholder’s
                                                                            name
                                                                        </p>
                                                                        <Form>
                                                                            <p>
                                                                                Name
                                                                                Surname
                                                                            </p>
                                                                            <Row className="mb-">
                                                                                <Col
                                                                                    lg={
                                                                                        6
                                                                                    }
                                                                                >
                                                                                    <div>
                                                                                        <TextField
                                                                                            id="outlined-basic"
                                                                                            label="Expiration date"
                                                                                            variant="outlined"
                                                                                            size="small"
                                                                                            placeholder="MM/YY"
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col
                                                                                    lg={
                                                                                        6
                                                                                    }
                                                                                    className="d-flex align-items-center gap-2"
                                                                                >
                                                                                    <div>
                                                                                        <TextField
                                                                                            id="outlined-basic"
                                                                                            label="Security code"
                                                                                            variant="outlined"
                                                                                            size="small"
                                                                                            placeholder="3 or 4 digits"
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
                                                                        </Form>
                                                                    </div>
                                                                )}

                                                                <ReEnterCard />
                                                                {getIsDetailsToggel && (
                                                                    <>
                                                                        <div className="ui-csh-pcd-details">
                                                                            <h4>
                                                                                Billing
                                                                                address
                                                                            </h4>

                                                                            {!getIsBillingAddressEdit && (
                                                                                <ul>
                                                                                    <li>
                                                                                        Name
                                                                                        Surname
                                                                                    </li>
                                                                                    <li>
                                                                                        2
                                                                                        Savoy
                                                                                        Road
                                                                                    </li>
                                                                                    <li>
                                                                                        Reading,
                                                                                        BerkshireRB3
                                                                                        7LU
                                                                                    </li>
                                                                                    <li>
                                                                                        United
                                                                                        Kingdom
                                                                                    </li>
                                                                                </ul>
                                                                            )}
                                                                            {getIsBillingAddressEdit && (
                                                                                <div className="ui-edit-csg-pcd-list">
                                                                                    <ul>
                                                                                        <li>
                                                                                            Name
                                                                                            Surname
                                                                                        </li>
                                                                                        <li>
                                                                                            2
                                                                                            Savoy
                                                                                            Road
                                                                                        </li>
                                                                                        <li>
                                                                                            Reading,
                                                                                            BerkshireRB3
                                                                                            7LU
                                                                                        </li>
                                                                                        <li>
                                                                                            United
                                                                                            Kingdom
                                                                                        </li>
                                                                                    </ul>
                                                                                    <button>
                                                                                        <MdEdit />{" "}
                                                                                        Change
                                                                                    </button>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="ui-csh-pcd-bottom-btn">
                                                                            <Button
                                                                                variant="contained"
                                                                                onClick={() => {
                                                                                    setIsBillingAddressEdit(
                                                                                        !getIsBillingAddressEdit
                                                                                    );
                                                                                }}
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                            <Button variant="outlined">
                                                                                Add
                                                                            </Button>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* 
                                            add new payment method button
                                            */}
                                                    <div className="ui-csh-add-new-card">
                                                        <button
                                                            onClick={() => {
                                                                setIsAddNewPayment(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <MdOutlineAddCircleOutline />{" "}
                                                            Add a new card
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                            {isAddNewPayment && (
                                                <PaymentMethod
                                                    paymentOptionCencel={
                                                        paymentOptionCencel
                                                    }
                                                />
                                            )}
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                            <div className="ui-sc-cart mt-4">
                                <div className="ui-sc-cart">
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Sold by:{" "}
                                                <a href="#">seller_username</a>
                                            </p>
                                        </Card.Header>
                                        <Card.Body className="ui-sc-cart-product">
                                            <CheckOutProductCart />
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Sold by:{" "}
                                                <a href="#">seller_username</a>
                                            </p>
                                        </Card.Header>
                                        <Card.Body className="ui-sc-cart-product">
                                            <CheckOutProductCart />
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Sold by:{" "}
                                                <a href="#">seller_username</a>
                                            </p>
                                        </Card.Header>
                                        <Card.Body className="ui-sc-cart-product">
                                            <CheckOutProductCart />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <CartSummary />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default CheckOut;
