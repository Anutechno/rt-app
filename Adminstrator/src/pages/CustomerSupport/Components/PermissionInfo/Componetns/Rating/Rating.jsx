import "./rating.scss";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";

const Rating = ({ title }) => {
    return (
        <>
            <div className="ui-pc-rating-box">
                <div className="ui-pc-rating">
                    <h4>
                        {title}: <span>4.25</span>
                    </h4>
                </div>
                <div className="ui-rating-icon">
                    <ul>
                        <li>
                            <div className="ui-star-box">
                                <GoStar />
                                <GoStar />
                                <GoStar />
                                <GoStar />
                                <GoStar />
                            </div>
                            <p>
                                (<Link to="/">735</Link>)
                            </p>
                        </li>
                        <li>
                            <div className="ui-star-box">
                                <GoStar />
                                <GoStar />
                                <GoStar />
                                <GoStar />
                            </div>
                            <p>
                                (<Link to="/">14</Link>)
                            </p>
                        </li>
                        <li>
                            <div className="ui-star-box">
                                <GoStar />
                                <GoStar />
                                <GoStar />
                            </div>
                            <p>
                                (<Link to="/">2</Link>)
                            </p>
                        </li>
                        <li>
                            <div className="ui-star-box">
                                <GoStar />
                                <GoStar />
                            </div>
                            <p>
                                (<Link to="/">5</Link>)
                            </p>
                        </li>
                        <li>
                            <div className="ui-star-box">
                                <GoStar />
                            </div>
                            <p>
                                (<Link to="/">2</Link>)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Rating;
