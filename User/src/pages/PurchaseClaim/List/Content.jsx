import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";

import ListItem from "./ListItem";

const Content = () => {
    const [category1, setCategory1] = useState("Requiring your attention");
    const [category2, setCategory2] = useState("order");
    const [time, setTime] = useState("Last 30 days");

    const [list, setList] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const [items, setItems] = useState([
        {
            date: "20 May",
            status: "Requiring your attention",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 1,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Under review",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Under review",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Waiting for the seller's responses",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Requiring your attention",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Requiring your attention",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "Closed by the Customer Support",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
        {
            date: "20 May",
            status: "You received a refund",
            order: "12345678-123456",
            buyer: "seller_username",
            claimDate: "22 Sep 2017",
            amount: "US $1,234.56",
            active: 0,
            items: [
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
                {
                    image: "",
                    title: "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
                    descr: "Delivery estimate: 22 Dec - 22 Dec",
                },
            ],
        },
    ]);

    useEffect(() => {
        if (category1 == "All open claims") {
            setList(items);
            setResultCount(items.length);
        } else {
            let data = items.filter((item) => {
                return item.status == category1;
            });
            setList(data);
            setResultCount(data.length);
        }
    }, [category1]);

    return (
        <div className="list-content">
            <h1>Purchases</h1>
            <div className="list-search">
                <ul>
                    <li>Orders</li>
                    <li>Canceled orders</li>
                    <li class="active1">Claims</li>
                    <li>Returns</li>
                </ul>
                <div className="search-category">
                    <div className="category1">
                        <FormControl sx={{ minWidth: 367 }}>
                            <Select
                                value={category1}
                                onChange={(e) => {
                                    setCategory1(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value="All open claims">
                                    All open claims
                                </MenuItem>
                                <MenuItem value="Requiring your attention">
                                    Requiring your attention
                                </MenuItem>
                                <MenuItem value="Waiting for the seller's responses">
                                    Waiting for the seller's responses
                                </MenuItem>
                                <MenuItem value="Under review">
                                    Under review
                                </MenuItem>
                                <MenuItem value="Closed by the Customer Support">
                                    Closed claims
                                </MenuItem>
                                <MenuItem value="You received a refund">
                                    Received refunds
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="d-flex justify-content-between resp">
                        {category1 == "You received a refund" ? (
                            <div class="duration">
                                <FormControl sx={{ minWidth: 367 }}>
                                    <Select
                                        value={time}
                                        onChange={(e) => {
                                            setTime(e.target.value);
                                        }}
                                        displayEmpty
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                    >
                                        <MenuItem value="This week">
                                            This week
                                        </MenuItem>
                                        <MenuItem value="Last 14 days">
                                            Last 14 days
                                        </MenuItem>
                                        <MenuItem value="Last 30 days">
                                            Last 30 days
                                        </MenuItem>
                                        <MenuItem value="Current month">
                                            Current month
                                        </MenuItem>
                                        <MenuItem value="Last 60 days">
                                            Last 60 days
                                        </MenuItem>
                                        <MenuItem value="Last 90 days">
                                            Last 90 days
                                        </MenuItem>
                                        <MenuItem value="Last 6 months">
                                            Last 6 months
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="category2 d-flex">
                            <FormControl sx={{ minWidth: 169 }}>
                                <Select
                                    value={category2}
                                    onChange={(e) => {
                                        setCategory2(e.target.value);
                                    }}
                                    displayEmpty
                                    inputProps={{
                                        "aria-label": "Without label",
                                    }}
                                >
                                    <MenuItem value="order">Order ID</MenuItem>
                                    <MenuItem value="seller">
                                        Seller username
                                    </MenuItem>
                                    <MenuItem value="item">Item title</MenuItem>
                                </Select>
                            </FormControl>

                            <input type="text" placeholder="Search..." />
                            <label htmlFor="search">
                                <i className="bi bi-search"></i>
                            </label>
                            <span className="reset">Reset</span>
                        </div>
                    </div>
                </div>

                <p className="result">Results: {resultCount}</p>
            </div>

            <ListItem items={list} />
        </div>
    );
};

export default Content;
