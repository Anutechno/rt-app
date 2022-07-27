import SellerCentralList from "./Components/SellerCentralList";
import SellerCentralOrdersMenu from "./Components/SellerCentralOrdersMenu";

const SellerCentralContent = () => {
    return (
        <div className="seller-central-content">
            <h2>Oreders</h2>
            <SellerCentralOrdersMenu />
            <SellerCentralList />
        </div>
    );
};

export default SellerCentralContent;
