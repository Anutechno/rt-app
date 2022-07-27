import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./sendusdocumentation.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import SendDocCard from "../Components/SendDocCard/SendDocCard";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SendUsDocumentation = () => {
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

    console.log(getAllFile);
    return (
        <>
            <Menu />
            <div className="ui-send-us-documentation-box">
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
                        <div className="col-lg-8">
                            <div className="ui-sud-head">
                                <h2>Send us documentation</h2>
                                <div className="ui-sud-table">
                                    <div className="ui-sud-table-head">
                                        <h4>Hi Name</h4>
                                    </div>
                                    <div className="ui-sud-table-images">
                                        {getAllFile.length !== 0 &&
                                            getAllFile.map((item, index) => {
                                                return (
                                                    <SendDocCard
                                                        key={index}
                                                        img={item.file}
                                                        name={item.file.name}
                                                        size={item.file.size}
                                                    />
                                                );
                                            })}
                                    </div>
                                    <div className="ui-sud-body">
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
                                        <div className="ui-email-us-content mt-2">
                                            <label htmlFor="ui-email-comment">
                                                Comments
                                            </label>
                                            <textarea
                                                id="ui-email-comment"
                                                className="form-control"
                                                placeholder="Enter more information"
                                            ></textarea>
                                        </div>
                                        <div className="ui-email-us-btn">
                                            <button className="btn">
                                                Send
                                            </button>
                                            <button className="btn">
                                                Cancel
                                            </button>
                                        </div>
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

export default SendUsDocumentation;
