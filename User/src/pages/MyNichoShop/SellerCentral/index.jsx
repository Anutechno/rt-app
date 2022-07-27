import Menu from "../../../components/menu/Menu";
// import Notification from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import "./sellercentral.css";
import NavigationAndTItle from "./Component/NavigationAndTItle/NavigationAndTItle";
import TabPanelHolder from "./Component/TabPanel/tabpanel";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import Notification from "../../../components/notification/Notification";

const SellerCentral = () => {
    const showNotif = useSelector((state) => state.showNotif);
    return (
        <>
            <div>
                <div className="overview-page">
                    <Menu />
                    {showNotif ? (
                        <Notification
                            color="green"
                            title="aaaaa"
                            description="adadadadad"
                        />
                    ) : null}
                </div>
                <NavigationAndTItle />
                <TabPanelHolder />
                <Footer />
            </div>
        </>
    );
};

export default SellerCentral;
