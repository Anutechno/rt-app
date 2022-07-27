import { Link } from "react-router-dom";
import Footer from "../../../container/Footer/footer";
import Nav from "../../../container/Nav/navbar";
import "./agentreport.scss";

const AgentReport = () => {
    return (
        <>
            <Nav />
            <div className="ui-agent-report">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ui-ai-back-btn">
                                <Link to="/customer-support">
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.625 14.875L5.25 10.5L9.625 6.125"
                                            stroke="black"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M15.75 14.875L11.375 10.5L15.75 6.125"
                                            stroke="black"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Back
                                </Link>
                            </div>
                            <div className="ui-ai-head agent-report-head">
                                <h4>
                                    Reports of time spent
                                    <Link to="/">Agent_CS7</Link>
                                </h4>
                                <button>
                                    <svg
                                        width="22"
                                        height="19"
                                        viewBox="0 0 22 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="10.5"
                                            width="21"
                                            height="8"
                                            rx="0.5"
                                            stroke="#2AAC27"
                                        />
                                        <rect
                                            x="4.5"
                                            y="0.5"
                                            width="13"
                                            height="10"
                                            rx="0.5"
                                            stroke="#2AAC27"
                                        />
                                        <path
                                            d="M15 13H18"
                                            stroke="#2AAC27"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M3 15H19"
                                            stroke="#2AAC27"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ui-agent-report-table">
                                <select className="form-select">
                                    <option selected>
                                        September, 22, 2018, Today
                                    </option>
                                    <option>Last week</option>
                                    <option>August</option>
                                    <option>July</option>
                                    <option>June</option>
                                    <option>May</option>
                                    <option>April</option>
                                </select>

                                <div className="ui-agent-report-list">
                                    <div className="ui-agent-report-list-main">
                                        <div>
                                            <h2>September 22, 2020 </h2>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>8 hours 22 minuts</li>
                                            </ul>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>
                                                    <p>8 hours 22 minuts</p>
                                                    <p>8 hours 22 minuts</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Chats:</li>
                                                <li>
                                                    <Link to="/">28</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Messages:</li>
                                                <li>
                                                    <Link to="/">55</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Today’s deals:</li>
                                                <li>
                                                    <Link to="/">85</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2>September 22, 2020 </h2>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>8 hours 22 minuts</li>
                                            </ul>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>
                                                    <p>8 hours 22 minuts</p>
                                                    <p>8 hours 22 minuts</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Chats:</li>
                                                <li>
                                                    <Link to="/">28</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Messages:</li>
                                                <li>
                                                    <Link to="/">55</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Today’s deals:</li>
                                                <li>
                                                    <Link to="/">85</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2>September 22, 2020 </h2>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>8 hours 22 minuts</li>
                                            </ul>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>
                                                    <p>8 hours 22 minuts</p>
                                                    <p>8 hours 22 minuts</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Chats:</li>
                                                <li>
                                                    <Link to="/">28</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Messages:</li>
                                                <li>
                                                    <Link to="/">55</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Today’s deals:</li>
                                                <li>
                                                    <Link to="/">85</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2>September 22, 2020 </h2>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>8 hours 22 minuts</li>
                                            </ul>
                                            <ul>
                                                <li>Logged time:</li>
                                                <li>
                                                    <p>8 hours 22 minuts</p>
                                                    <p>8 hours 22 minuts</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Chats:</li>
                                                <li>
                                                    <Link to="/">28</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Messages:</li>
                                                <li>
                                                    <Link to="/">55</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Today’s deals:</li>
                                                <li>
                                                    <Link to="/">85</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ui-ar-bottom">
                                        <div className="ui-agent-report-total">
                                            <ul>
                                                <li>Logged in/out:</li>
                                                <li>43 hours 13 minuts</li>
                                            </ul>
                                            <ul>
                                                <li>Monday to Friday:</li>
                                                <li>
                                                    <p>35 hours</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Saturday:</li>
                                                <li>3 hours 1 minute</li>
                                            </ul>
                                            <ul>
                                                <li>Sunday:</li>
                                                <li>3 hours 1 minute </li>
                                            </ul>
                                        </div>
                                        <div className="ui-agent-report-total">
                                            <ul>
                                                <li>Total amount due:</li>
                                                <li>US $ 1.234.56</li>
                                            </ul>
                                            <ul>
                                                <li>Monday to Friday:</li>
                                                <li>
                                                    <p>US 8$ per hour</p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>Saturday:</li>
                                                <li>US 10$ per hour</li>
                                            </ul>
                                            <ul>
                                                <li>Sunday:</li>
                                                <li>US 16$ per hour</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AgentReport;
