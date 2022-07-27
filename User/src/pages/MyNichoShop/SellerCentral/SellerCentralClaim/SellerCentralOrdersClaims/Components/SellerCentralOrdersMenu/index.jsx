import "./index.scss";
import OrderClaims from "./OrderClaims";

const SellerCentralOrdersMenu = () => {
    return (
        <div className="seller-central-orders-menu">
            <ul>
                <li>Orders</li>
                <li>
                    <span>2</span>Cancellations
                </li>
                <li className="seller-menu-active">
                    <span>1</span>Claims
                </li>
                <li>
                    <span>9</span>Returns
                </li>
                <li>
                    <span>0</span>Chargebacks
                </li>
            </ul>

            <OrderClaims />
        </div>
    );
};

export default SellerCentralOrdersMenu;
