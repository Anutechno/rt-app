import Menu from "../../../components/menu/Menu";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import Footer from "../../../components/Footer";
import "./list.scss";

const PurchaseClaimList = () => {
    return (
        <div className="purchase-claim-list">
            <Menu />
            <Breadcrumb />
            <Content />
            <Footer />
        </div>
    );
};

export default PurchaseClaimList;
