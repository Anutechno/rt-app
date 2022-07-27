import Menu from "../../../../components/menu/Menu";
import Footer from "../PurchaseReportItem/Footer";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import "./list.scss";

const PurchaseClaim = () => {
    return (
        <div className="purchase-claim-list">
            <Menu />
            <Breadcrumb />
            <Content />
            <Footer />
        </div>
    );
};

export default PurchaseClaim;
