import "./tabpanel.css";
// import  from "react-bootstrap/Tabs";
// import TabContainer from "react-bootstrap/TabContainer";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Overview from "../Overview/Overview";
import Listing from "../Listing/Listing";
// import { useHistory } from "react-router-dom";

const TabPanel = () => {
    // const history = useHistory();
    return (
        <>
            <div className="main-overview-list">
                <div className="row holder">
                    <div className="col-3  padding_right_spacing">
                        <div className="button_holder">
                            <button
                                className="btn button_h w-100"
                                onClick={() => {
                                    // history.push("/createlisting");
                                }}
                            >
                                Create Listing
                            </button>
                        </div>
                    </div>
                    <div className="col-9 text-left col_holder">Overview</div>
                </div>
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="listing"
                >
                    <div className="row holder">
                        <div className="col-3 padding_right_spacing text-center">
                            <Nav
                                variant="pills"
                                className="flex-column nav-tabs w-100"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="overview">
                                        Overview
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="listing">
                                        Listing
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="orders">
                                        Orders
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="labels">
                                        Shipping labels
                                    </Nav.Link>
                                </Nav.Item>
                                <hr></hr>
                                <Nav.Item>
                                    <Nav.Link eventKey="settings">
                                        Settings
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="performance">
                                        Performance
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-9 cols_holder">
                            <Tab.Content>
                                <Tab.Pane eventKey="overview">
                                    <Overview />
                                </Tab.Pane>
                                <Tab.Pane eventKey="listing">
                                    <Listing />
                                </Tab.Pane>
                                <Tab.Pane eventKey="orders">
                                    <div className="container">
                                        This is orders Content
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="labels">
                                    <div className="container">
                                        This is labels Content
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settings">
                                    <div className="container">
                                        This is settings Content
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="performance">
                                    <div className="container">
                                        This is performance Content
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </>
    );
};

export default TabPanel;
