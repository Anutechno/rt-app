import { MdKeyboardArrowDown } from "react-icons/md";
import "./productcard.scss";

const ProductCard = ({ img, title, price, discountPrice, discount }) => {
    return (
        <>
            <div className="ui-product-card text-center">
                <img src={img} alt="product" />
                <p>{title}</p>
                <h4>US {price}</h4>
                <p>
                    List: US <del>{discountPrice}</del>
                    <span>{discount} OFF</span>
                </p>
                <a href="#">
                    More options <MdKeyboardArrowDown />
                </a>
            </div>
        </>
    );
};

export default ProductCard;
