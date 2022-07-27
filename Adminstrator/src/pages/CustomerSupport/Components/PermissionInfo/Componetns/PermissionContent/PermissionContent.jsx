import "./permissioncontent.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Rating from "../Rating/Rating";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TimezoneSelect from "react-timezone-select";
import PasswordInput from "../../../PasswordInput/PasswordInput";

const PermissionContent = () => {
    const [getCollapse, setCollapse] = useState(false);
    const collapseHandler = () => {
        setCollapse(!getCollapse);
    };
    /**
     * @description - get phone number with country code
     */
    const [getPhone, setPhone] = useState();

    /**
     * @description - get timezone
     */
    const [selectedTimezone, setSelectedTimezone] = useState({});

    const [isAgentToggle, setIsAgentToggle] = useState(false);

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setCollapse(false);
                }}
            >
                <div className="ui-cd-table-row">
                    <button
                        className={getCollapse && "show"}
                        onClick={collapseHandler}
                    >
                        <ul>
                            <li>CS#1</li>
                            <li>Supreme</li>
                            <li>
                                {/* className: active & deactive */}
                                <div className="ui-cdtr-status active"></div>
                            </li>
                        </ul>
                    </button>
                    {getCollapse && (
                        <>
                            <div className="ui-pc-box">
                                <div className="ui-pc-head">
                                    <ul>
                                        <li>Name Family</li>
                                        <li>Agent since: 22-Sep-2018</li>
                                        <li>
                                            <span>99</span> Notes
                                        </li>
                                    </ul>
                                    <div className="ui-pc-info-bar">
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                                setIsAgentToggle(false);
                                            }}
                                        >
                                            <button
                                                onClick={() => {
                                                    setIsAgentToggle(true);
                                                }}
                                            >
                                                <BiDotsVerticalRounded />
                                            </button>
                                            {isAgentToggle && (
                                                <ul>
                                                    <li>
                                                        Report of time spent
                                                    </li>
                                                    <li>
                                                        Delete agent’s account
                                                    </li>
                                                    <li>
                                                        Edit agent’s account
                                                    </li>
                                                </ul>
                                            )}
                                        </OutsideClickHandler>
                                    </div>
                                </div>
                                <div className="ui-rating-main-box">
                                    <Rating title="Friendly" />
                                    <Rating title="Reassuring" />
                                    <Rating title="Knoweledgeable" />
                                    <Rating title="Easy to understand" />
                                </div>
                                <div className="ui-pc-form mt-4">
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
                                                <option>
                                                    Choose a Department
                                                </option>
                                                <option value="1">
                                                    Doctor
                                                </option>
                                                <option value="2">
                                                    Freelancer
                                                </option>
                                                <option value="3">
                                                    Engineer
                                                </option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select">
                                                <option selected>
                                                    Choose a sub-department
                                                </option>
                                                <option value="1">
                                                    Doctor
                                                </option>
                                                <option value="2">
                                                    Freelancer
                                                </option>
                                                <option value="3">
                                                    Engineer
                                                </option>
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
                                            <button className="btn">
                                                Cancel
                                            </button>
                                            <button className="btn">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </OutsideClickHandler>
        </>
    );
};

export default PermissionContent;
