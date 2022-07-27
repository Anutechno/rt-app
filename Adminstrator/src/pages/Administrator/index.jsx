import React from "react";
import "./administrator.css";
import Nav from "../../container/Nav/navbar";
import Footer from "../../container/Footer/footer";
const Administrator = () => {
    return (
        <React.Fragment>
            <Nav />
            <div className="container my-3 mb-5">
                <div className="row">
                    <div className="col-lg-4 col-dm-6 col-sm-10 offset-lg-4 offset-dm-3 offset-sm-1 formstyle1">
                        <div className="text-center">
                            <h3>Password</h3>
                            <hr />
                        </div>
                        <div className="my-3">
                            <input
                                type="password"
                                className="form-control"
                                id="currentPassword"
                                name="currentPassword"
                                placeholder="Current Password"
                            />
                        </div>
                        <div className="my-3">
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                name="newPassword"
                                placeholder="New Password"
                            />
                        </div>
                        <div className="my-3">
                            <input
                                type="password"
                                className="form-control"
                                id="reenterPassword"
                                name="reenterPassword"
                                placeholder="Reenter Password"
                            />
                        </div>
                        <div className="mt-3 d-grid">
                            <button
                                type="submit"
                                className="btn btn-block btn-primary"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-lg-4 col-dm-6 col-sm-10 offset-lg-4 offset-dm-3 offset-sm-1 formstyle1">
                        <div className="text-center">
                            <h3>Email address</h3>
                            <hr />
                        </div>
                        <div className="my-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mt-3 d-grid">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-dm-6 col-sm-10 offset-lg-4 offset-dm-3 offset-sm-1 formstyle1">
                        <div className="text-center">
                            <h3>Phone number</h3>
                            <hr />
                        </div>
                        <div class="input-group my-3">
                            <div className="col-3">
                                <select className="form-control">
                                    <option value="+ 34">+ 38</option>
                                    <option value="+ 38">+ 38</option>
                                    <option value="+ 72">+ 72</option>
                                    <option value="+ 53">+ 53</option>
                                </select>
                            </div>
                            <div className="col-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile phone number"
                                />
                            </div>
                        </div>
                        <div className="mt-3 d-grid">
                            <button
                                type="submit"
                                className="btn btn-block btn-primary"
                            >
                                Upadate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Administrator;
