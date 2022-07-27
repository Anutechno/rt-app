import { Link } from "react-router-dom";
import ProductImg from "./../../../../../../../assets/product-img/product.png";

const SellerCentralProduct = () => {
    return (
        <>
            <div className="ui-scp-ordered-item-box">
                <img src={ProductImg} alt="product" />
                <div className="ui-scp-oii">
                    <Link to="/">
                        Norton Security Deluxe 2016 -300 Days / 1 Device
                        (Qindows, Mac, Android or iOS)
                    </Link>
                    <ul>
                        <li>
                            <span>NSLN: </span> 123456789012
                        </li>
                        <li>
                            <span>Condition:</span> Used
                        </li>
                        <li>
                            <span>Quantity:</span> 2
                        </li>
                        <li>
                            <span>Color:</span> Blue
                        </li>
                        <li>
                            <span>Size:</span> XL
                        </li>
                        <li>
                            <span>Material:</span> Cotton
                        </li>
                        <li>
                            <span>Item price:</span> US $ 1,234.56
                        </li>
                        <li>
                            <span>Shipping:</span> US $123.45 Express Int’l
                            Delivery (12-15 days)
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SellerCentralProduct;
