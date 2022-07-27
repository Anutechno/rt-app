import OutsideClickHandler from "react-outside-click-handler";

const ConfigmAlert = ({ alertCloseHandler }) => {
    return (
        <>
            <div className="ui-configm-alert-box">
                <OutsideClickHandler onOutsideClick={alertCloseHandler}>
                    <div className="ui-confirm-alert-content">
                        <svg
                            width="41"
                            height="42"
                            viewBox="0 0 41 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.2 2.80005C10.1484 2.80005 2 10.9485 2 21C2 31.0516 10.1484 39.2 20.2 39.2C30.2516 39.2 38.4 31.0516 38.4 21C38.4 10.9485 30.2516 2.80005 20.2 2.80005ZM0 21C0 9.8439 9.04385 0.800049 20.2 0.800049C31.3562 0.800049 40.4 9.8439 40.4 21C40.4 32.1562 31.3562 41.2 20.2 41.2C9.04385 41.2 0 32.1562 0 21ZM29.6405 14.4485C30.031 14.8391 30.031 15.4722 29.6405 15.8628L17.9071 27.5961C17.5166 27.9866 16.8835 27.9866 16.4929 27.5961L11.1596 22.2628C10.7691 21.8722 10.7691 21.2391 11.1596 20.8485C11.5501 20.458 12.1833 20.458 12.5738 20.8485L17.2 25.4748L28.2263 14.4485C28.6168 14.058 29.25 14.058 29.6405 14.4485Z"
                                fill="#2AAC27"
                            />
                        </svg>

                        <p>Shipment confirmed</p>
                        <button onClick={alertCloseHandler}>
                            <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 1.63184L1 13.6318M1 1.63184L13 13.6318"
                                    stroke="#1C1C1C"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </OutsideClickHandler>
            </div>
        </>
    );
};

export default ConfigmAlert;
