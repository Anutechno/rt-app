import { Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./contactbuyer.scss";
import ProductImg from "./../../../../assets/product-img/product.png";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const ContactBuyer = () => {
    const [getFileInfo, setFileInfo] = useState([]);

    const selectFileHandler = (e) => {
        const uploadedFile = e.target.files[0].name; // get uploaded file name
        const fileExt = uploadedFile.split(".").pop(); // get file extension

        // checking file extension
        if (
            fileExt === "gif" ||
            fileExt === "jpg" ||
            fileExt === "jpeg" ||
            fileExt === "pdf" ||
            fileExt === "png"
        ) {
            if (getFileInfo.length < 10) {
                if (getFileInfo.length === 0) {
                    setFileInfo([
                        ...getFileInfo,
                        {
                            name: e.target.files[0].name,
                            size: e.target.files[0].size,
                        },
                    ]);
                } else {
                    let isUploaded = false;

                    getFileInfo.map((item) => {
                        return item.name === e.target.files[0].name
                            ? (isUploaded = true)
                            : "";
                    });

                    if (!isUploaded) {
                        setFileInfo([
                            ...getFileInfo,
                            {
                                name: e.target.files[0].name,
                                size: e.target.files[0].size,
                            },
                        ]);
                    } else {
                        alert("File already uploaded");
                    }
                }
            } else {
                alert("you can not upload more than 10 files");
            }
        } else {
            alert(
                "Please upload this type of file ( .gif, .jpg, .jpeg, .pdf, .and .png)"
            );
        }
    };

    const selectFileDeleteHandler = (i) => {
        const existFiles = getFileInfo.filter((_, index) => {
            return index !== i;
        });
        setFileInfo(existFiles);
    };

    return (
        <>
            <Menu />
            <div className="ui-contact-buyer-box">
                <Container>
                    <div className="ui-cb-content-head">
                        <p>
                            Contact buyer: <a href="#">buyer_username</a>
                        </p>
                    </div>
                    <div className="ui-cb-content-body">
                        <div className="ui-cb-cb-left">
                            <div className="ui-cb-cb-left-product">
                                <img src={ProductImg} alt="product" />
                                <div className="ui-cb-cb-lp-info">
                                    <h4>
                                        EE PAY AS YOU GO 4G preparaid sim card
                                        $150.50 preloaded everything in one
                                        package
                                    </h4>
                                    <p>
                                        <span>NSLN:</span>123456789012
                                    </p>
                                    <p>
                                        <span>Item price:</span>US $1,234.56
                                    </p>
                                    <p>
                                        <span>Quantity:</span>1
                                    </p>
                                </div>
                            </div>
                            <div className="ui-cb-cb-msg">
                                <p>Message to the buyer (optional)</p>
                                <FloatingLabel
                                    controlId="floatingTextarea2"
                                    label="Comments"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter message"
                                        style={{ height: "100px" }}
                                    />
                                </FloatingLabel>
                                <p>250 character(s) left</p>
                            </div>
                            <div className="ui-cd-cd-upload-file-info">
                                <ul>
                                    {getFileInfo.length !== 0 &&
                                        getFileInfo.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    {item.name}{" "}
                                                    <span>
                                                        (
                                                        {(
                                                            item.size / 1024
                                                        ).toFixed(2)}{" "}
                                                        KB)
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            selectFileDeleteHandler(
                                                                index
                                                            );
                                                        }}
                                                    >
                                                        <IoMdClose />
                                                    </button>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div className="ui-cb-cb-add-file">
                                <label htmlFor="contact-buyer-file">
                                    <div className="ui-outline-btn">
                                        <p>Add files</p>
                                    </div>
                                    <input
                                        type="file"
                                        id="contact-buyer-file"
                                        name="contact-buyer-file"
                                        onChange={selectFileHandler}
                                    />
                                </label>
                                <p>
                                    Accepted file formats: .gif, .jpg, .jpeg,
                                    .pdf, .and .png. Add up to 10 files, 5MB
                                    each
                                </p>
                            </div>
                            <div className="ui-cd-cd-btn">
                                <button>Send message</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                        <div className="ui-cb-cb-right">
                            <div className="ui-cb-cb-right-info">
                                <p>Order</p>
                                <ul>
                                    <li>ID</li>
                                    <li>
                                        <a href="#">12345678-123456</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>Purchase date</li>
                                    <li>29 Aug 12:39 PM</li>
                                </ul>
                                <ul>
                                    <li>Ship by</li>
                                    <li>-</li>
                                </ul>
                                <ul>
                                    <li>Deliver by</li>
                                    <li>-</li>
                                </ul>
                                <ul>
                                    <li>Carrier</li>
                                    <li>-</li>
                                </ul>
                                <ul>
                                    <li>Tracking number</li>
                                    <li>-</li>
                                </ul>
                                <ul>
                                    <li>Status</li>
                                    <li>Unshipped (1)</li>
                                </ul>
                                <ul>
                                    <li>Date shipped</li>
                                    <li>-</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default ContactBuyer;
