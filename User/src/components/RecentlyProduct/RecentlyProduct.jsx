import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./recentlyproduct.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import OutsideClickHandler from "react-outside-click-handler";

const config = {
    id: 0,
    percent: 90,
    colorSlice: "#0072BC",
};

const RecentlyProduct = ({ product, productInfoHandler }) => {
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
            <div className="ui-rp-box text-center">
                <img src={product.productImage} />
                <div>
                    <a href="#">
                        Norton Security Deluxe 2017 - 1 Year / 3 Devices
                        (Windows, Max, Android...
                    </a>
                    <div className="d-flex align-items-center gap-2 mt-1">
                        <h4>US $ 12,345.67</h4>
                        <button>Buy it Now</button>
                    </div>
                    <div className="ui-rp-price d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <h4>US $ 12,345.67</h4>
                            <p className="ui-rp-bid">1 bid</p>
                        </div>
                        <p>1m</p>
                    </div>
                </div>
                <span>Only 1 left in stock</span>
                <div className="ui-rp-star-box d-flex align-items-center">
                    <div className="ui-rp-star">
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
        </>
    );
};

export default RecentlyProduct;
