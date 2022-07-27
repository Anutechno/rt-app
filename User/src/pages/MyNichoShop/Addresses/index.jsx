import React from "react";
import { Link, NavLink } from "react-router-dom";
import MENU from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import "./addresses.css";

const Addresses = () => {
    return (
        <React.Fragment>
            <MENU />
            <div className="container-fluid">
                <div className="row mt-3 mx-3">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">My NichoShop</Link>
                            </li>
                            <li className="breadcrumb-item">Addresses</li>
                        </ol>
                    </nav>
                    <div className="row my-1 m-auto mb-5">
                        <h3 className="mb-3">Addresses</h3>
                        {/* <div className="card">
                            <div className="card-body">
                                <h4 className='my-3'>You haven't add you address yet.</h4>
                                <p className='my-2'>Address is needed to buy, sell, communicate with other users, etc</p>
                                <button className='btn btn-primary px-4 my-2'>
                                    Add your address
                                </button>
                            </div>
                        </div> */}
                        <table
                            className="table table-bordered "
                            style={{ fontSize: "90%" }}
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="row p-4">
                                            <div className="col-lg-5 col-md-4">
                                                <h5>
                                                    Primary shipping address:
                                                </h5>
                                                <small>
                                                    Here I would like receive
                                                    items I purchase.
                                                </small>
                                            </div>
                                            <div className="col-lg-5 col-md-5">
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className="col-lg-2 col-md-3">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block mb-2">
                                                        Edit
                                                    </button>
                                                    <Link to="/user/address/shipping_view">
                                                        <small>
                                                            View all shipping
                                                            address
                                                        </small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row p-4">
                                            <div className="col-lg-5 col-md-4">
                                                <h5>
                                                    Primary ship from address:
                                                </h5>
                                                <small>
                                                    Here I would like receive
                                                    items I purchase.
                                                </small>
                                            </div>
                                            <div className="col-lg-5 col-md-5">
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className="col-lg-2 col-md-3">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block mb-2">
                                                        Edit
                                                    </button>
                                                    <Link to="/user/address/shipping_view">
                                                        <small>
                                                            View all shipping
                                                            address
                                                        </small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row p-4">
                                            <div className="col-lg-5 col-md-4">
                                                <h5>
                                                    Primary shipping address:
                                                </h5>
                                                <small>
                                                    Here I would like receive
                                                    items I purchase.
                                                </small>
                                            </div>
                                            <div className="col-lg-5 col-md-5">
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className="col-lg-2 col-md-3">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block mb-2">
                                                        Edit
                                                    </button>
                                                    <Link to="/user/address/shipping_view">
                                                        <small>
                                                            View all shipping
                                                            address
                                                        </small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    );
};
export default Addresses;
