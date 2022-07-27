import React, { useState } from "react";
import Footer from "../../container/Footer/footer";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./css/signin.css";
import ReCAPTCHA from "react-google-recaptcha";
import { postRequest } from "../../helper/ajax/ajaxRequest";

const Temporary = () => {
    const [id, setId] = useState("");
    // const [password, setPassword] = useState("")
    const [reCAPTCHA, setRecaptcha] = useState("");

    const inputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "password":
                // setPassword(value);
                break;
            default:
                break;
        }
    };

    const [getFormEmpty, setFormEmpty] = useState(false);
    const [isIdPasswordMatch, setIdPasswordMatch] = useState(false);

    function onChange(value) {
        setRecaptcha(value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (id.length !== 0 && reCAPTCHA.length !== 0) {
            postRequest(
                {
                    username: id,
                },
                `/admin/auth/temporary-password/request-temporary-password`
            )
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    setIdPasswordMatch(true);
                    console.log(err);
                });
        } else {
            setFormEmpty(true);
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row  my-4">
                    <img
                        src="assets/img/NS Logo.svg"
                        alt="logo"
                        className="m-auto"
                        style={{ width: "200px" }}
                    />
                </div>
                <div className="row col-lg-4 col-md-6 col-sm-10 offset-lg-4 offset-md-3 offset-sm-1">
                    <div className="form-layout-signinpage px-4 py-1">
                        <form onSubmit={submitHandler}>
                            <h5 className="text-center my-3">
                                <b>Sign in</b>
                            </h5>
                            <hr />
                            {isIdPasswordMatch && (
                                <span className="color-red">
                                    <img
                                        src="assets/img/alert-circle.svg"
                                        alt="alert"
                                    />{" "}
                                    Your ID is incorrect.
                                </span>
                            )}

                            <div>
                                <div className="form-group has-float-label">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        name="id"
                                        onChange={inputValue}
                                        id="id"
                                        placeholder="ID"
                                    />
                                    <label htmlFor="fullname">ID</label>
                                </div>
                                {getFormEmpty && id.length < 1 && (
                                    <span className="color-red">
                                        Id is required!
                                    </span>
                                )}
                            </div>

                            {/* <div className="form-group has-float-label">
                                <input
                                    type="password"
                                    className="form-control mt-3"
                                    name="password"
                                    onChange={inputValue}
                                    id="password"
                                    placeholder="Temporary password"
                                />
                                <label htmlFor="fullname">
                                    Temporary password
                                </label>
                            </div>
                            {getFormEmpty && password.length < 1 && (
                                <span className="color-red">
                                    Password is required!
                                </span>
                            )} */}

                            <ReCAPTCHA
                                className="mt-3"
                                sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                onChange={onChange}
                            />
                            {getFormEmpty && reCAPTCHA.length < 1 && (
                                <span className="color-red">
                                    Captcha is required!
                                </span>
                            )}

                            <button
                                type="submit"
                                className="button-signinpage my-3 btn btn-primary"
                            >
                                Text a temporary password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Temporary;
