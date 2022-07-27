import { Link } from "react-router-dom";

const ChargeStatus = () => {
    return (
        <>
            <div className="ui-charge-status-list">
                <ul>
                    <li>22 May 2020</li>
                    <ul>
                        <li>The buyer opened a Chargeback # 1234567890</li>
                        <li>
                            <span>Status: </span> Chargeback was closed in favor
                            of the buyer. <Link to="/">View details</Link>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    );
};

export default ChargeStatus;
