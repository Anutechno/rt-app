import PermissionContent from "./Componetns/PermissionContent/PermissionContent";
import "./permissioninfo.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PermissionInfo = () => {
    return (
        <>
            <div className="ui-cs-table">
                <div className="ui-cs-table-head">
                    <ul>
                        <li>ID</li>
                        <li>Permission</li>
                        <li>Rate</li>
                    </ul>
                </div>
                <PermissionContent />
                <PermissionContent />
                <PermissionContent />
                <div className="ui-cs-table-bottom">
                    <p>Page 1 of 4</p>
                    <div className="ui-cs-table-pagination">
                        <button className="ui-cs-prev-btn">
                            <IoIosArrowBack />
                        </button>
                        <div className="ui-cs-pagination-no">
                            <button>1</button>
                            <button>2</button>
                            <button className="active">3</button>
                            <button>4</button>
                        </div>
                        <button className="ui-cs-next-btn">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PermissionInfo;
