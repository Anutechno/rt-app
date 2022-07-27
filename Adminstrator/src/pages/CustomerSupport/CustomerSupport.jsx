import Nav from "../../container/Nav/navbar";
import "./customersupport.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import PasswordInput from "./Components/PasswordInput/PasswordInput";
// import { useForm } from "react-hook-form";
import PermissionInfo from "./Components/PermissionInfo/PermissionInfo";

const CustomerSupport = () => {
    /**
     * @description - get phone number with country code
     */
    const [getPhone, setPhone] = useState();

    /**
     * @description - get timezone
     */
    const [selectedTimezone, setSelectedTimezone] = useState({});

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    return (
        <div>
            <Nav />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="ui-customer-head">
                            <h2>Customer Support</h2>
                        </div>
                        <div className="ui-customer-support-box">
                            <p>Add new agent</p>
                            <div className="ui-cs-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div class="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First name"
                                                />
                                                <div className="form-text text-danger">
                                                    Please enter first name
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div class="mb-3">
                                                <input
                                                    type="text"
                                                    placeholder="Last name"
                                                    className="form-control"
                                                />
                                                <div className="form-text text-danger">
                                                    Please enter last name
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <PasswordInput />
                                    </div>
                                    <div class="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />

                                        <div className="form-text text-danger">
                                            Please enter email address
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <PhoneInput
                                            country={"bd"}
                                            value={getPhone}
                                            onChange={(phone) =>
                                                setPhone(phone)
                                            }
                                        />
                                        <div className="form-text text-danger">
                                            Please enter mobile phone number
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <select className="form-select">
                                            <option>Choose a Department</option>
                                            <option value="1">Doctor</option>
                                            <option value="2">
                                                Freelancer
                                            </option>
                                            <option value="3">Engineer</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select">
                                            <option selected>
                                                Choose a sub-department
                                            </option>
                                            <option value="1">Doctor</option>
                                            <option value="2">
                                                Freelancer
                                            </option>
                                            <option value="3">Engineer</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <TimezoneSelect
                                            value={selectedTimezone}
                                            onChange={setSelectedTimezone}
                                        />
                                    </div>
                                    <div className="mb-3 d-flex align-items-center gap-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioDefault1"
                                            >
                                                Contract price (per hour)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioDefault2"
                                            >
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ui-cs-time mb-3 d-flex gap-2">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected>US $</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Monday-Friday"
                                            style={{
                                                width: "200px",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Saturday"
                                        />
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Sunday"
                                        />
                                    </div>
                                    <div className="ui-cs-form-btn">
                                        <button className="btn">Cancel</button>
                                        <button className="btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <PermissionInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSupport;
