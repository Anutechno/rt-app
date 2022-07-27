import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./emailus.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EmailUs = () => {
    // stored images
    const [getAllFile, setAllFile] = useState([]);
    const fileChageHandler = (e) => {
        let data = [];
        let i = 0;
        for (i; i < e.target.files.length; i++) {
            data.push({ id: uuidv4(), file: e.target.files[i] });
        }
        if (getAllFile.length + data.length <= 10) {
            setAllFile([...getAllFile, ...data]);
            data = [];
        } else {
            alert("You can't upload file more then 10 files!");
        }
    };

    // delete file
    const fileDeleteHandler = (i) => {
        const deteted = getAllFile.filter((item) => {
            return item.id !== i;
        });
        setAllFile(deteted);
    };
    return (
        <>
            <Menu />
            <div className="ui-email-us-box">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <div className="ui-breadcrumb-box">
                                <ul>
                                    <li>
                                        <Link to="/">My NichoShop</Link>
                                    </li>
                                    <li>
                                        <IoIosArrowForward />
                                    </li>
                                    <li>Help and contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ui-call-us-content">
                                <h2>Email us</h2>
                                <div className="ui-call-cb">
                                    <ul className="mb-4">
                                        <li>Reason:</li>
                                        <li>
                                            <p>
                                                Buying <br />- Return an order
                                                or item
                                            </p>
                                            <button>
                                                <Link to="/help-contact/contact-us">
                                                    Cencel
                                                </Link>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="ui-email-us-content">
                                        <label htmlFor="ui-email-comment">
                                            Comments
                                        </label>
                                        <textarea
                                            id="ui-email-comment"
                                            className="form-control"
                                            placeholder="Enter more information"
                                        ></textarea>
                                        <span>1000 characters left</span>
                                        {getAllFile.length !== 0 && (
                                            <ul>
                                                {getAllFile.map(
                                                    (item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {item.file.name}
                                                                <span>
                                                                    (25 KB)
                                                                </span>
                                                                <button
                                                                    onClick={() => {
                                                                        fileDeleteHandler(
                                                                            item.id
                                                                        );
                                                                    }}
                                                                >
                                                                    <MdOutlineClose />
                                                                </button>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        )}
                                        <div className="ui-email-upload-file">
                                            <label>
                                                Add Files
                                                <input
                                                    type="file"
                                                    onChange={fileChageHandler}
                                                    multiple
                                                />
                                            </label>
                                        </div>
                                        <p>
                                            Accepted file formats: .gif, .jpg,
                                            .jpeg, .pdf, .and .png. Add up to 10
                                            files, 5MB each
                                        </p>
                                    </div>
                                    <div className="ui-email-us-btn">
                                        <button className="btn">Send</button>
                                        <button className="btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EmailUs;
