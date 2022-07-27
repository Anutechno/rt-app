import { MdKeyboardArrowDown } from "react-icons/md";
import "./productcard.scss";

const ProductListCard = ({ img, title, price, discountPrice, discount }) => {
    return (
        <>
            <div className="ui-product-list-card">
                <img src={img} alt="product" />
                <div className="ui-pro-list-info">
                    <p>
                        Norton Security Deluxe 2017 - 1 Year / 3 Devices
                        (Windows, Max, Android Norton Security Deluxe 2017 - 1
                        Year
                    </p>
                    <h4>US $ 12,345.67</h4>
                    <p>
                        List: US <del>{discountPrice} </del>
                        <span>{discount} OFF</span>
                    </p>
                    <p>+ $12 shipping </p>
                    <a href="#">
                        More options <MdKeyboardArrowDown />
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProductListCard;
