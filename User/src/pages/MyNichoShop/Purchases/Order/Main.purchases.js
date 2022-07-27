import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
    Button,
    ButtonBase,
    CssBaseline,
    Divider,
    FormControl,
    Grid,
    MenuItem,
    Pagination,
    Select,
    Tab,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { red, blue, grey, green } from "@mui/material/colors";
import { Dropdown, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setDetailItem, setPublicPage } from "./../../../../actions/actions";
import "./MainPurchase.scss";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import PaginationMain from "../../../../components/PaginationMain/PaginationMain";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

function SelectComponent({ items, fn_change }) {
    const [age, setAge] = React.useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
                {items.map((item, index) => (
                    <MenuItem value={index}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

function TabPanel1() {
    // const [value, setValue] = React.useState(0);
    // const f_items = ["Last 90 days", "2022", "2019", "2018"];
    // const s_items = ["All", "Delivered", "In Transit", "Awaiting feedback"];

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const [value, setValue] = React.useState("2");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                border: "1px solid #CBCBCB",
                borderRadius: "5px",
                p: 2,
                pb: 0,
            }}
            className="card-top"
        >
            {/* <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                <Tab value={0} label="Orders" />
                <Tab value={1} label="Canceled orders" />
                <Tab value={2} label="Claims" />
                <Tab value={3} label="Returns" />
            </Tabs>
            <Divider />
            <Box sx={{ display: "flex" }}>
                <Typography variant="h6" component="label" sx={{ pt: 2.5 }}>
                    8 orders placed in
                </Typography>
                <SelectComponent items={f_items} />

                <Typography
                    variant="h6"
                    component="label"
                    sx={{ pt: 2.5, pl: 5 }}
                >
                    Filter By
                </Typography>
                <SelectComponent items={s_items} />
            </Box> */}
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Orders" value="1" />
                            <Tab label="Canceled orders" value="2" />
                            <Tab label="Claims" value="3" />
                            <Tab label="Returns" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <b>3 orders</b> in the last 6 months
                    </TabPanel>
                    <TabPanel value="2">
                        <b>3 canceled orders</b> in the last 6 months
                    </TabPanel>
                    <TabPanel value="3">
                        <b>3 Claims</b> in the last 6 months
                    </TabPanel>
                    <TabPanel value="4">
                        <b>3 return</b> in the last 6 months
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}

function ShopItem({ item }) {
    const dispatch = useDispatch();
    const moveToDetail = () => {
        dispatch(setPublicPage(1));
        dispatch(setDetailItem(item.id));
    };
    const currency = ["$", "Eur"];
    const itemState = [
        // "Awaiting Payment",
        // "Shipped",
        // "Not shipped",
        // "Not yet shipped",
        // "In transit",
        // "Delivered",
        // "Awaiting feedback",
    ];
    const color = [
        red[500],
        grey[900],
        grey[900],
        grey[900],
        grey[900],
        green[500],
        green[500],
    ];
    const [trackState, setTrackState] = useState(0);

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                border: "1px solid #CBCBCB",
                borderRadius: "5px",
                margin: "10px 0px",
            }}
        >
            <Box sx={{ m: 2 }}>
                <Typography
                    variant="h6"
                    componet="h6"
                    color={color[item.status]}
                >
                    {itemState[item.status]}
                </Typography>
                {item.status != 0 ? (
                    <Typography
                        variant="subtitle1"
                        componet="p"
                        color={grey[500]}
                    >
                        Delivery estimate: {item.created}
                    </Typography>
                ) : null}
                {item.status == 0 ? (
                    <Typography
                        variant="subtitle1"
                        componet="p"
                        color={grey[500]}
                        className="cancled"
                    >
                        Canceled
                    </Typography>
                ) : item.tracking != null ? (
                    trackState == 0 ? (
                        <Typography
                            variant="subtitle1"
                            componet="p"
                            color={blue[500]}
                        >
                            Track this order
                        </Typography>
                    ) : (
                        <Box>
                            <Typography
                                variant="subtitle1"
                                componet="p"
                                color={blue[500]}
                            >
                                Hide tracking details
                            </Typography>
                            <Grid container>
                                <Grid item width={150}>
                                    Carrier :{" "}
                                </Grid>
                                <Grid item>{item.currency}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item width={150}>
                                    Carrier :{" "}
                                </Grid>
                                <Grid item>{item.tracknumber}</Grid>
                            </Grid>
                        </Box>
                    )
                ) : null}
            </Box>
            <Divider className="border_line" />
            <Box sx={{ m: 2 }}>
                <Grid container spacing={1}>
                    <Grid item direction="column" xs={12} md={3}>
                        <Box
                            sx={{ borderRight: "1px solid #cbcbcb" }}
                            className="border-r"
                        >
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h6"
                                className="order_placed"
                            >
                                ORDER PLACED
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="body2"
                                component="p"
                                className="date_sep"
                            >
                                {/* {item.created} */}
                                22 September 2017
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h6"
                                className="order"
                            >
                                {item.soldbySeller} ITEM SOLD BY
                            </Typography>
                            {/* <Typography
                                gutterBottom
                                variant="body2"
                                component="p"
                                className="date_sep seller"
                            >
                            </Typography> */}
                            <Link
                                underline="hover"
                                className="my-nicho-shop-font Blue_Main date_sep seller"
                                to=""
                            >
                                {item.sellerName}
                            </Link>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h6"
                                className="order_placed"
                            >
                                Total
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="body2"
                                component="p"
                                className="date_sep"
                            >
                                US {currency[item.totalCurrency]}
                                {item.totalAmount}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h6"
                                className="order"
                            >
                                ORDER#{item.orderNum}
                            </Typography>
                            <Link
                                underline="hover"
                                className="my-nicho-shop-font Blue_Main"
                                to=""
                            >
                                view order detail
                            </Link>
                            {/* <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h6"
                                onClick={moveToDetail}
                                sx={{ cursor: "point" }}
                                className="order_placed seller"
                            >
                                view order detail
                            </Typography> */}
                            {/* onClick={()=>dispatch({type: "MOVETODETAIL", value: item.id})} */}
                            <Link
                                underline="hover"
                                className="my-nicho-shop-font Blue_Main"
                                to=""
                            >
                                view order detail
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box>
                            <Grid container spacing={2}>
                                {item.items.map((detailItem, index) => (
                                    <Box
                                        className="dis-adjust"
                                        sx={{
                                            display: "flex",
                                            width: "100%",
                                            p: 2,
                                        }}
                                    >
                                        <Grid
                                            xs={12}
                                            sm={2}
                                            className="grey-box"
                                        >
                                            <ButtonBase
                                                sx={{ width: 150, height: 150 }}
                                                className="grey_box"
                                            >
                                                <div className="grey_bg">
                                                    <img
                                                        width="100%"
                                                        src="https://i.picsum.photos/id/873/180/180.jpg?hmac=oIFrgxdiLpPQ4SKy-DLRIM4K-sL1YNhMtR_asBYRbk8"
                                                    />
                                                </div>
                                            </ButtonBase>
                                        </Grid>
                                        <Grid container item xs={12} sm={10}>
                                            <Grid
                                                item
                                                xs={12}
                                                md={8}
                                                spacing={2}
                                            >
                                                <Link
                                                    underline="hover"
                                                    className="my-nicho-shop-font Blue_Main ee_pay"
                                                    to=""
                                                    sx={{
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    EE PAY AS YOU GO 4G prepaid
                                                    simcard $150.50
                                                </Link>
                                                {/* <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    component="h1"
                                                    className="ee_pay"
                                                    sx={{
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    EE PAY AS YOU GO 4G prepaid
                                                    simcard $150.50
                                                </Typography> */}
                                                <Typography
                                                    variant="body2"
                                                    className="order_placed"
                                                    gutterBottom
                                                >
                                                    Cancled quantity:
                                                    <b className="dark_txt">
                                                        6
                                                    </b>
                                                    {/* {detailItem.price} */}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    className="order_placed"
                                                    gutterBottom
                                                >
                                                    Item price:{" "}
                                                    <b className="dark_txt">
                                                        {" "}
                                                        US ${
                                                            detailItem.price
                                                        }{" "}
                                                    </b>
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    className="order_placed"
                                                    gutterBottom
                                                >
                                                    Shipping:{" "}
                                                    <b className="dark_txt">
                                                        {" "}
                                                        US $
                                                        {detailItem.currency}
                                                    </b>
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                md={4}
                                                spacing={2}
                                                className="dropdown-sec"
                                            >
                                                {item.status == 0 ? (
                                                    <Button
                                                        variant="contained"
                                                        className="view_button"
                                                        sx={{
                                                            mt: 2,
                                                            width: "100%",
                                                        }}
                                                        onClick={() =>
                                                            navigate(
                                                                "/cancleorderdetail"
                                                            )
                                                        }
                                                    >
                                                        View Cancel details
                                                    </Button>
                                                ) : (
                                                    <Button variant="contained">
                                                        View seller’s other
                                                        items
                                                    </Button>
                                                )}
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="first"
                                                        style={{
                                                            alignSelf: "left",
                                                            justifyContent:
                                                                "end",
                                                        }}
                                                    >
                                                        More actions
                                                    </Dropdown.Toggle>
                                                    {item.status == 0 &&
                                                    item.payment == 0 ? (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-2">
                                                                Contact seller
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">
                                                                Leave seller
                                                                feedback
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">
                                                                Cancel this
                                                                order
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    ) : null}
                                                    {item.status == 0 &&
                                                    item.payment != 0 ? (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-2">
                                                                <button>
                                                                    View
                                                                    seller’s
                                                                    other items
                                                                </button>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">
                                                                Contact seller
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">
                                                                Leave seller
                                                                feedback
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">
                                                                Cancel this
                                                                order
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    ) : null}
                                                    {item.status >= 5 &&
                                                    item.tracking == null ? (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-2">
                                                                View similar
                                                                items
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">
                                                                Contact seller
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">
                                                                Not received
                                                                item
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">
                                                                Return this item
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    ) : null}
                                                    {item.status >= 5 &&
                                                    item.tracking ? (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-2">
                                                                View similar's
                                                                other items
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">
                                                                View similar
                                                                items
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">
                                                                Contact seller
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">
                                                                Ask to cancel
                                                                order
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">
                                                                Not received
                                                                item
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">
                                                                Return this item
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    ) : null}
                                                </Dropdown>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

function Pagenation({ length }) {
    const [pagenum, setPagenum] = useState("25");
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleSelectChange = (event, value) => {
        setPagenum(event.target.value);
    };

    return (
        <Box
            sx={{
                border: "1px solid #CBCBCB",
                borderRadius: "5px",
                margin: "10px 0px",
            }}
        >
            <Box sx={{ m: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography
                            variant="subtitle1"
                            container="h6"
                            sx={{ mt: 2 }}
                        >
                            Page {page} / {Math.ceil(length / pagenum)}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Pagination
                            count={Math.ceil(length / pagenum)}
                            sx={{ mt: 2, padding: "auto" }}
                            page={page}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={handleSelectChange}
                        >
                            {pagenum == "10" ? (
                                <option value="10" selected>
                                    10
                                </option>
                            ) : (
                                <option value="10">10</option>
                            )}
                            {pagenum == "25" ? (
                                <option value="25" selected>
                                    25
                                </option>
                            ) : (
                                <option value="25">25</option>
                            )}
                            {pagenum == "50" ? (
                                <option value="50" selected>
                                    50
                                </option>
                            ) : (
                                <option value="50">50</option>
                            )}
                            {pagenum == "100" ? (
                                <option value="100" selected>
                                    100
                                </option>
                            ) : (
                                <option value="100">100</option>
                            )}
                        </Form.Select>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

const ShopItems = [
    {
        id: 12,
        payment: 1, //payment method : Awaiting payment : 0, visa : 1
        created: "22 September 2017",
        soldbySeller: 1,
        sellerName: "seller username",
        totalAmount: 12345.6,
        totalCurrency: 0,
        orderNum: "ORDER#12345678-123456",
        status: 0,
        delivery: 1234,
        tracking: {
            carrier: "string",
            number: 1234,
            step: 0, // 0: none, 1: accepted, 2: intransit 3: delivered
        },
        summary: {
            subtotal: 1,
            shippingCost: 123,
            total: 123,
            refund: 12,
            currency: 1,
        },
        address: {
            id: 12,
            name: "Book",
            userId: 12,
            address1: "sadadasdasd",
            address2: "asdasdasdasdas",
            city: "Ryssby, Sweden",
            state: "show state",
            zip: "zipcode",
            country: 3,
            phone: "+1 519 876 8907",
        },
        items: [
            {
                id: 1,
                condition: "asdasdasd",
                qty: 6,
                image: "/assets/product-img/product.png",
                variables: [
                    {
                        variable_name: "variable_value",
                    },
                ],
                price: 1234.56,
                currency: 123.45,
            },
        ],
    },
];

const cancleOrder = [{}, {}, {}];

function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box className="purchase_main">
                <br />
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        className="my-nicho-shop-font Blue_Main"
                        href="/mynichoshop"
                    >
                        My NichoShop
                    </Link>
                    <Typography className="my-nicho-shop-font">
                        Purchases
                    </Typography>
                </Breadcrumbs>
                <br />
                <Typography
                    variant="h3"
                    className="purchase_content"
                    component="h3"
                >
                    Purchases
                </Typography>
                <TabPanel1 />
                {cancleOrder.map((key) => {
                    return ShopItems.map((item) => <ShopItem item={item} />);
                })}
                <PaginationMain />
            </Box>
        </React.Fragment>
    );
}

export default Main;
