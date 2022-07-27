import "./agentinfo.scss";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import Nav from "../../../container/Nav/navbar";
import Footer from "../../../container/Footer/footer";

const AgentInfo = () => {
    /**
     * @description store aget info
     */

    const [getAgentInfo, setAgentInfo] = useState([
        {
            id: 1,
            date: 234234234,
            leftFor: "chat",
            agentId: "CH123456789",
            rating: 5,
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            isCollapsed: false,
        },
        {
            id: 2,
            date: 234234234,
            leftFor: "chat",
            agentId: "CH123456789",
            rating: 5,
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            isCollapsed: false,
        },
    ]);

    /**
     * @description agent collapse handler
     */

    const agentCollapseHandler = (i) => {
        const collapsed = getAgentInfo.map((item) => {
            if (item.id === i) {
                if (item.isCollapsed) {
                    item.isCollapsed = false;
                } else {
                    item.isCollapsed = true;
                }
            }
            return item;
        });

        setAgentInfo(collapsed);
    };

    return (
        <>
            <Nav />
            <div className="ui-agent-info-box">
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
                            <div className="ui-ai-head">
                                <h4>Agent_CS7</h4>
                                <div className="ui-ai-star">
                                    <GoStar />
                                    <GoStar />
                                    <GoStar />
                                    <GoStar />
                                    <GoStar />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="ui-ai-table">
                                <div className="ui-ai-table-head">
                                    <ul>
                                        <li>Date</li>
                                        <li>Left for:</li>
                                        <li>ID</li>
                                        <li>Rating</li>
                                    </ul>
                                </div>
                                {getAgentInfo.map((item, index) => {
                                    return (
                                        <div>
                                            <div
                                                key={index}
                                                className="ui-ai-table-content"
                                            >
                                                <button
                                                    onClick={() => {
                                                        agentCollapseHandler(
                                                            item.id
                                                        );
                                                    }}
                                                >
                                                    <ul>
                                                        <li>
                                                            {moment(
                                                                item.date
                                                            ).format(
                                                                "DD MMM YYYY"
                                                            )}
                                                        </li>
                                                        <li>{item.leftFor}</li>
                                                        <li>{item.agentId}</li>
                                                        <li>
                                                            <div className="ui-ai-table-star">
                                                                <GoStar />
                                                                <GoStar />
                                                                <GoStar />
                                                                <GoStar />
                                                                <GoStar />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </button>
                                                {item.isCollapsed && (
                                                    <div className="ui-ait-content">
                                                        <p>{item.body}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                                <div class="ui-cs-table-bottom">
                                    <p>Page 1 of 4</p>
                                    <div class="ui-cs-table-pagination">
                                        <button class="ui-cs-prev-btn">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                                            </svg>
                                        </button>
                                        <div class="ui-cs-pagination-no">
                                            <button>1</button>
                                            <button>2</button>
                                            <button class="active">3</button>
                                            <button>4</button>
                                        </div>
                                        <button class="ui-cs-next-btn">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                            </svg>
                                        </button>
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

export default AgentInfo;
