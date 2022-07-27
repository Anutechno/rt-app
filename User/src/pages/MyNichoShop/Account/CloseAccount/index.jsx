import React, { useState } from "react";
import "./../account.css";
import Header from "../../../../components/header/Header";
import Menu from "../../../../components/menu/Menu";

import AccountFooter from "../../../../components/accountfooter/AccountFooter";
// 3rd party components
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";

const CloseAccount = () => {
    const [authSpinner, setAuthSpinner] = useState(false);

    const closeaccountSchema = yup.object({
        category: yup
            .string("Select your category")
            .required("Select your category"),
        reason: yup.string("Select your reason").required("Select your reason"),
    });

    return (
        <div className="home-page">
            <Header />
            <Menu />
            <div className="cs_section ne_css account-close-pg">
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
                                Please note that once your account is closed,
                                you won't have access it anymore.
                            </p>
                            <p>
                                Tell us why you want to close your NichoShop
                                account. Please select the category that best
                                matches the reason you want to leave. Then,
                                select the reason.
                            </p>
                        </div>
                        <div className="inner_close">
                            <Formik
                                initialValues={{
                                    category: "",
                                    reason: "",
                                }}
                                validationSchema={closeaccountSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        {authSpinner ? (
                                            <div className="formSpinner">
                                                <div className="loading"></div>
                                            </div>
                                        ) : null}
                                        <div className="form-group">
                                            <select
                                                fullWidth
                                                id="category_name"
                                                name="category"
                                                variant="outlined"
                                                size="small"
                                                className="form-control"
                                                value={props.values.category}
                                                onChange={props.handleChange}
                                            >
                                                <option value="">
                                                    Personal reason
                                                </option>
                                                <option value="personal">
                                                    Account issues
                                                </option>
                                                <option value="account">
                                                    Safety concern
                                                </option>
                                                <option value="safety">
                                                    Related to selling
                                                </option>
                                            </select>
                                            <ErrorMessage name="category">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <select
                                                fullWidth
                                                id="reason"
                                                name="reason"
                                                variant="outlined"
                                                size="small"
                                                className="form-control"
                                                value={props.values.reason}
                                                onChange={props.handleChange}
                                            >
                                                <option value="">
                                                    Choose a reason
                                                </option>
                                                <option value="by_mistake">
                                                    I registered by mistake
                                                </option>
                                                <option value="dont_have_time">
                                                    I don&apos;t have a time
                                                </option>
                                                <option value="new_account">
                                                    I&apos;m opening a new
                                                    account
                                                </option>
                                                <option value="moving_another">
                                                    I&apos;m moving to another
                                                    marketplace
                                                </option>
                                                <option value="other">
                                                    Other
                                                </option>
                                            </select>
                                            <ErrorMessage name="reason">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <button
                                                type="reset"
                                                className="btn btn-primary close close_Cancel"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary close close_Continue"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="space_div"></div>
                </div>
            </div>
            <AccountFooter />
        </div>
    );
};

export default CloseAccount;
