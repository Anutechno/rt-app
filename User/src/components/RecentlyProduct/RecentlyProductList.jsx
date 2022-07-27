import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProductImg from "./../../assets/product-img/product.png";
import "./recentlyproduct.scss";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { MdKeyboardArrowDown } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";

const config = {
    id: 0,
    percent: 90,
    colorSlice: "#0072BC",
};

const RecentlyProductList = () => {
    const [update, setUpdate] = useState(config);

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdate({
                ...config,
                id: 0,
                colorSlice: "#0072BC",
                fontColor: "#1C1C1C",
                fontSize: "1.2rem",
                fontWeight: 700,
                colorCircle: "#D9EAF5",
                size: "70",
                stroke: "8",
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const newObject = { ...config, ...update };

    const [isInfoToggled, setInfoToggled] = useState(false);
    return (
        <>
            <div className="ui-rvl-box d-flex">
                <img src={ProductImg} alt="product" />
                <div className="ui-rvl-content">
                    <a href="#">
                        Norton Security Deluxe 2017 - 1 Year / 3 Devices
                        (Windows, Max, Android Norton Security Deluxe 2017 - 1
                        Year
                    </a>
                    <div className="ui-rvl-price">
                        <h4>US $ 12,345.67</h4>
                        <a href="#">Buy it Now</a>
                    </div>
                    <div className="ui-rvl-buy">
                        <h4>US $ 12,345.67</h4>
                        <span>1 bid</span>
                        <span>1m</span>
                    </div>
                    <p>+ $12 shipping </p>
                    <p>Only 1 left in stock</p>
                    <div className="ui-rvl-star">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                setInfoToggled(false);
                            }}
                        >
                            <button
                                onClick={() => {
                                    setInfoToggled(!isInfoToggled);
                                }}
                            >
                                <MdKeyboardArrowDown /> 1
                            </button>
                            {isInfoToggled && (
                                <div className="ui-rp-info-box">
                                    <h2>99.8% Positive feedback</h2>
                                    <p>Average based on 123 buyers feedback</p>
                                    <div className="ui-rp-circule">
                                        <div>
                                            <CircularProgressBar
                                                style={{ height: "60px" }}
                                                {...newObject}
                                            />
                                            <p>Items as described</p>
                                        </div>
                                        <div>
                                            <CircularProgressBar
                                                style={{ height: "60px" }}
                                                {...newObject}
                                            />
                                            <p>Arrived on time</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </OutsideClickHandler>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentlyProductList;
