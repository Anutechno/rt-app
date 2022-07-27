import "./index.scss";
import { Link } from "react-router-dom";

const SellerCentralList = () => {
    return (
        <div className="seller-central-list">
            <button>Create listing</button>
            <div className="list-menu">
                <ul>
                    <li>
                        <Link to="#">Overview</Link>
                    </li>
                    <li>
                        <Link to="#">Listings</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-list-active">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="#">Shipping labels</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="#">Settings</Link>
                    </li>
                    <li>
                        <Link to="#">Perfomance</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SellerCentralList;
