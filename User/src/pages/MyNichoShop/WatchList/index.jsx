import React, { Component } from "react";
import "./watchlist.css";
import Header from "../../../components/header/Header";
import Menu from "../../../components/menu/Menu";
import Card from "../../../components/MyNichoShop/card/Card";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import Notification from "../../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import axios from "axios";
import PaginationComponent from "../../../components/pagination/PaginationComponent";
import Image from "react-random-image";

class WatchList extends Component {
    state = {
        data: [],
        totalRecords: 0,
        limit: 6,
    };
    componentDidMount() {
        this.loadData(1);
    }
    loadData = (page) => {
        console.log("page>>", page);
        axios.get(`https://reqres.in/api/users?page=` + page).then((res) => {
            const data = res.data;
            console.log("data>>>>", data);
            this.setState({
                data: data.data,
                totalRecords: data.total ? data.total : 0,
                limit: data.per_page ? data.per_page : 6,
            });
        });
    };
    getPaginatedData = (page) => {
        this.loadData(page);
    };
    gridTemplate(props) {
        const src = props.EmployeeID + ".png";
        return (
            <div className="image">
                <Image width={180} height={180} />
            </div>
        );
    }
    productName(props) {
        return (
            <div className="test">
                <h4 className="mb-3">
                    <a className="e-link" htef="">
                        {props.first_name}
                    </a>
                </h4>
                <div>
                    <span className="text-black-50">Condition:</span>{" "}
                    <span className="font-weight-medium">New</span>
                </div>
                <div>
                    <span className="text-black-50">Size:</span>{" "}
                    <span className="font-weight-medium">X</span>,{" "}
                    <span className="text-black-50">Color:</span>{" "}
                    <span className="font-weight-medium">Blue</span>
                </div>
                <div>
                    <span className="text-black-50">Offered by:</span>{" "}
                    <a className="e-link font-weight-medium" href="">
                        seller_username
                    </a>
                </div>
            </div>
        );
    }
    priceSection(props) {
        return (
            <div className="pricesection">
                <div className="main-price text-end mb-3">
                    <span className="h4">US $ 1,234.56</span>{" "}
                    <span className="text-black-50 d-block">Buy it now</span>
                </div>
                <div className="price-remaining text-end mb-3">
                    <span className="small-text18 text-black-50">
                        + US $ 123.45
                    </span>{" "}
                    <span className="text-black-50 d-block">shipping</span>
                </div>
            </div>
        );
    }
    buttonSection(props) {
        return (
            <div className="buttonsection text-end">
                <div className="d-grid gap-2 justify-content-md-end">
                    <a className="view-seller-items btn btn-primary" htef="">
                        Buy it Now
                    </a>
                </div>
                <div className="dropdown pt-3 pb-5">
                    <div
                        className="dropdown-toggle small-text18 text-black-50"
                        type="button"
                        id="MoreActionsButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        More actions
                    </div>
                    <ul
                        className="dropdown-menu  dropdown-menu-end"
                        aria-labelledby="MoreActionsButton"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                Add
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Edit
                            </a>
                        </li>
                    </ul>
                </div>
                <a className="remove-items text-danger small-text18" htef="">
                    <i class="bi bi-trash"></i> Remove
                </a>
            </div>
        );
    }
    render() {
        const { data, totalRecords, limit } = this.state;
        return (
            <div className="my-nicho-shop">
                {/* <Header /> */}
                <Menu />
                <div className="my-nicho-shop-container container-ns">
                    <Breadcrumbs className="mt-4" aria-label="breadcrumb">
                        <Link color="text.primary" href="/">
                            My NichoShop
                        </Link>
                        <Typography color="text.primary">Watch list</Typography>
                    </Breadcrumbs>
                    <h2 className="title fw-bold my-4">Watch list</h2>
                    <div className="border rounded">
                        <div className="p-3 border-bottom d-flex justify-content-end">
                            <div className="dropdown small-text18 d-flex pe-4">
                                <div className="pe-2 text-black-50">Show:</div>
                                <div
                                    className="dropdown-toggle font-weight-semibold"
                                    type="button"
                                    id="total-records"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    All(10)
                                </div>
                                <ul
                                    className="dropdown-menu dropdown-result-end"
                                    aria-labelledby="total-records"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            All(10)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            All(20)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown small-text18 d-flex">
                                <div className="pe-2 text-black-50">Sort:</div>
                                <div
                                    className="dropdown-toggle font-weight-semibold"
                                    type="button"
                                    id="total-records"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Time left: ending soon
                                </div>
                                <ul
                                    className="dropdown-menu dropdown-result-end"
                                    aria-labelledby="total-records"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Time left: ending soon
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table className="table m-0">
                            <tbody>
                                {data && data.length > 0 ? (
                                    data.map((item, index) => (
                                        <tr>
                                            <td
                                                width="180"
                                                className="p-3"
                                                scope="col"
                                            >
                                                {this.gridTemplate(item)}
                                            </td>
                                            <td scope="col">
                                                {this.productName(item)}
                                            </td>
                                            <td
                                                width="12%"
                                                className="p-3"
                                                scope="col"
                                            >
                                                {this.priceSection(item)}
                                            </td>
                                            <td
                                                width="15%"
                                                className="p-3"
                                                scope="col"
                                            >
                                                {this.buttonSection(item)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <h4>No Data Found!!</h4>
                                )}
                            </tbody>
                        </table>
                        <div className="px-3 py-4 d-flex justify-content-between align-items-center">
                            <div className="page-result-total small-text18">
                                Page 1 of 4
                            </div>
                            {totalRecords > 6 && (
                                <PaginationComponent
                                    getAllData={this.data}
                                    totalRecords={totalRecords}
                                    itemsCountPerPage={limit}
                                />
                            )}
                            <div className="result-per-page d-flex align-items-center">
                                <div className="pe-2 small-text18">
                                    Results per page
                                </div>
                                <div
                                    className="dropdown-toggle dropdown-blue px-2 small-text18"
                                    type="button"
                                    id="resultperpage"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    20
                                </div>
                                <ul
                                    className="dropdown-menu dropdown-result-end"
                                    aria-labelledby="resultperpage"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            30
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            50
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default WatchList;
