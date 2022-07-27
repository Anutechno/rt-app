import React, { useState, useEffect } from "react";
import Nav from "../../container/Nav/navbar";
import "./category.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Footer from "../../container/Footer/footer";
import Alert_Success from "./alert_success";
import Axios from "axios";

const Category = () => {
    let initialState = [
        {
            category: {
                name: "ddegory",
                id: 3,
                parentId: 0,
                conditionType: null,
            },
            children: [
                {
                    category: {
                        name: "sdf",
                        id: 1,
                        parentId: 3,
                        conditionType: null,
                    },
                },
                {
                    category: {
                        name: "df",
                        id: 12,
                        parentId: 3,
                        conditionType: null,
                    },
                },
            ],
        },
        {
            category: {
                name: "sd",
                id: 4,
                parentId: 0,
                conditionType: null,
            },
            children: [
                {
                    category: {
                        name: "tt",
                        id: 6,
                        parentId: 4,
                        conditionType: null,
                    },
                },
            ],
        },
        {
            category: {
                name: "ddsds",
                id: 13,
                parentId: 0,
                conditionType: null,
            },
            children: [
                {
                    category: {
                        name: "123sad123",
                        id: 6,
                        parentId: 13,
                        conditionType: null,
                    },
                },
            ],
        },
    ];

    const [category, setInitialdata] = useState(initialState);
    const [toggleAccordionButton, setToggleAccordionButtonState] =
        useState(null);
    const [CategoryValue, setAddCategoryValue] = useState("");
    const [children, setChildren] = useState(initialState[0].children);
    const [SubCategoryValue, setSubCategoryValue] = useState("");
    const [title, setTitle] = useState("");
    const [categoryrename, setRename] = useState("");
    const toggle = (index) => {
        setToggleAccordionButtonState(index);
    };

    const addCategoryValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "addCategory":
                if (value.length == 0) {
                    alert("Enter the CategoryName");
                } else {
                    setAddCategoryValue(value);
                }
                break;
            case "addSubCategory":
                if (value.length == 0) {
                    alert("Enter your SubCategoryName");
                } else {
                    setSubCategoryValue(value);
                }
                break;
            case "setrename":
                if (value.length == 0) {
                    alert("Enter your Setrename");
                } else {
                    setRename(value);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        Axios.get("https://nichoshop.com/api/v1//admin/category/all").then(
            (res) => {
                setInitialdata(res.data);
            }
        );
    }, []);

    const AddSubCategory = (id) => {
        Axios.post("https://nichoshop.com/api/v1/admin/category/parent/" + id, {
            name: SubCategoryValue,
        }).then((res) => {
            if (res.status == 200 && res.data == "OK") {
                <Alert_Success />;
            }
        });
    };
    // const getActionData = (id) => {
    //     Axios.post('https://nichoshop.com/api/v1/admin/category/' + id + '/attributes' + id, { name: SubCategoryValue })
    //         .then(res => {

    //         })
    // }
    const AddCategory = () => {
        Axios.post("https://nichoshop.com/api/v1/admin/category/parent/0", {
            name: CategoryValue,
        }).then((res) => {
            if (res.status == 200) {
                <Alert_Success />;
            }
        });
    };

    const SetReName = (id, name) => {
        Axios.put(
            "https://nichoshop.com/api/v1/admin/category/rename/" +
                id +
                "/" +
                name
        ).then((res) => {
            if (res.status == 200 && res.data == "OK") {
                <Alert_Success />;
            }
        });
    };

    const edit = (name) => {
        setTitle(name);
    };
    const rename = (name) => {
        setTitle(name);
    };

    const categorydelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui text-center alert_window px-5 py-4">
                        <h3>Confrim your delete</h3>
                        <p>Are you sure you want to delete Fashion?</p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn mx-2 px-3 btn-sm btn-outline-dark"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-sm btn-primary mx-2 px-3"
                            onClick={() => {
                                onClose();
                                successfulDelete();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        });
    };
    const successfulDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui text-center alert_window px-5 py-5">
                        <h5>Fashion was successfully deleted</h5>
                        <i
                            className="fa fa-check text-success"
                            style={{ fontSize: "30px" }}
                        ></i>
                    </div>
                );
            },
        });
    };

    return (
        <React.Fragment>
            <Nav />
            <div className="container-fluid">
                <div className="row mt-3 text-center">
                    <h3>Categories</h3>
                </div>
                <div className="row col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                    <div className="accordion categorys" id="accordionExample">
                        {category.map((category, index) => {
                            const list = (
                                <div
                                    key={index}
                                    className="accordion-item my-3 "
                                >
                                    <h2 className="accordion-header" id={index}>
                                        <div className="dropdown pull-right">
                                            <div>
                                                <img
                                                    src="assets/img/plus-circle (1).svg"
                                                    className="category-dropdown"
                                                    onClick={() =>
                                                        rename(
                                                            category.category
                                                                .name
                                                        )
                                                    }
                                                    data-bs-toggle="dropdown"
                                                />
                                                <ul className="dropdown-menu">
                                                    <li
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <img src="assets/img/edit-2.svg" />
                                                            &nbsp;Rename
                                                        </a>
                                                    </li>
                                                    <li
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal1"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={edit}
                                                        >
                                                            <img src="assets/img/arrow-right.svg" />
                                                            &nbsp;Move to
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={
                                                                categorydelete
                                                            }
                                                        >
                                                            <img src="assets/img/trash.svg" />
                                                            &nbsp;Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {toggleAccordionButton !== index ? (
                                            <button
                                                className="accordion-button collapsed text-white p--20"
                                                onClick={() => toggle(index)}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={
                                                    "#" + category.category.name
                                                }
                                                aria-expanded="false"
                                                aria-controls={
                                                    category.category.name
                                                }
                                            >
                                                <img src="assets/img/plus-circle.png" />
                                                &nbsp;
                                                <b style={{ color: "black" }}>
                                                    {category.category.name}
                                                </b>
                                            </button>
                                        ) : (
                                            <button
                                                className="accordion-button collapsed text-white p--20"
                                                onClick={() => toggle(null)}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={
                                                    "#" + category.category.name
                                                }
                                                aria-expanded="false"
                                                aria-controls={
                                                    category.category.name
                                                }
                                            >
                                                <img
                                                    src="assets/img/minus.png"
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                                &nbsp;
                                                <b style={{ color: "black" }}>
                                                    {category.category.name}
                                                </b>
                                            </button>
                                        )}
                                    </h2>
                                    <div
                                        id={category.category.name}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={index}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body row p-4">
                                            <div className="col-lg-5 mb-4">
                                                <div className="row">
                                                    {category.children.map(
                                                        (category, index) => {
                                                            const result = (
                                                                <div
                                                                    className="row"
                                                                    key={index}
                                                                >
                                                                    {/* onClick={() => getActionData(category.category.name.id)} */}
                                                                    <div className="col-10">
                                                                        <span>
                                                                            &nbsp;
                                                                            <b>
                                                                                {
                                                                                    category
                                                                                        .category
                                                                                        .name
                                                                                }
                                                                            </b>
                                                                        </span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <div>
                                                                            <i
                                                                                className="fa fa-bars"
                                                                                onClick={() =>
                                                                                    rename(
                                                                                        category
                                                                                            .category
                                                                                            .name
                                                                                    )
                                                                                }
                                                                                data-bs-toggle="dropdown"
                                                                            ></i>
                                                                            <ul className="dropdown-menu">
                                                                                <li
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#myModal"
                                                                                >
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                    >
                                                                                        <img src="assets/img/edit-2.svg" />
                                                                                        &nbsp;Rename
                                                                                    </a>
                                                                                </li>
                                                                                <li
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#myModal1"
                                                                                >
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        onClick={
                                                                                            edit
                                                                                        }
                                                                                    >
                                                                                        <img src="assets/img/arrow-right.svg" />
                                                                                        &nbsp;Move
                                                                                        to
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        onClick={
                                                                                            categorydelete
                                                                                        }
                                                                                    >
                                                                                        <img src="assets/img/trash.svg" />
                                                                                        &nbsp;Delete
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                            return result;
                                                        }
                                                    )}
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="btn-group">
                                                        <div className="col-lg-8 col-sm-8 col-sm-8">
                                                            <input
                                                                type="text"
                                                                name="addSubCategory"
                                                                placeholder="Add a sub-category"
                                                                onChange={
                                                                    addCategoryValue
                                                                }
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-4 mx-1">
                                                            <button
                                                                className="btn btn-outline-success"
                                                                onClick={() =>
                                                                    AddSubCategory(
                                                                        category
                                                                            .category
                                                                            .id
                                                                    )
                                                                }
                                                            >
                                                                {" "}
                                                                <i className="fa fa-plus"></i>
                                                                &nbsp;Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label htmlFor="Condition">
                                                                    Condition
                                                                </label>
                                                            </div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Choose a
                                                                        condition
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"></div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label htmlFor="Condition mt-1">
                                                                    Specfics
                                                                </label>
                                                            </div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Version
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-2">
                                                        <div className="col-6">
                                                            <div className="active_grey mt-1"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Sreen
                                                                        Size
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 row">
                                                        <div className="col-6">
                                                            <div
                                                                className="active_grey mt-1"
                                                                style={{
                                                                    display:
                                                                        "none",
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        OS
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-2">
                                                        <div className="col-6">
                                                            <div className="active_grey mt-1"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Processor
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"></div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Battery
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-2">
                                                        <div className="col-6">
                                                            <div className="active_grey mt-1"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        Memory
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-2">
                                                        <div className="col-6">
                                                            <div className="active_red mt-1"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <select className="form-control">
                                                                    <option>
                                                                        HDD
                                                                    </option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-2">
                                                        <div className="col-6">
                                                            <div className="active_grey mt-1"></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col-9">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <button className="btn btn-outline-success">
                                                            <i className="fa fa-plus">
                                                                &nbsp;Add
                                                            </i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            return list;
                        })}
                    </div>
                </div>
                <div className="row col-lg-10 offset-lg-1">
                    <div className="btn-group col-lg-6">
                        <div className="col-lg-8 col-sm-8 col-sm-8">
                            <input
                                type="text"
                                name="addCategory"
                                placeholder="Add a sub-category"
                                onChange={addCategoryValue}
                                className="form-control"
                            />
                        </div>
                        <div className="col-4 mx-1">
                            <button
                                className="btn btn-outline-success"
                                onClick={AddCategory}
                            >
                                {" "}
                                <i className="fa fa-plus"></i>&nbsp;Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal mt-5" id="myModal">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">Rename</h5>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                value={title}
                            />
                        </div>

                        <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input
                                type="text"
                                className="form-control"
                                name="setrename"
                                onChange={addCategoryValue}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() =>
                                    SetReName(
                                        category.category.id,
                                        categoryrename
                                    )
                                }
                                data-bs-dismiss="modal"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal mt-5" id="myModal1">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Move iPod and MP3 Players Accessories to:
                            </h5>
                        </div>
                        <div className="modal-body">
                            {category.map((category, index) => {
                                const list = (
                                    <p key="index">
                                        {category.children &&
                                        category.children ? (
                                            <span className="fa fa-plus">
                                                &nbsp;{category.category.name}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {category.children.map(
                                            (category, index) => {
                                                const data = (
                                                    <p className="mx-3">
                                                        <i className="fa fa-mius"></i>{" "}
                                                        <b>
                                                            {
                                                                category
                                                                    .category
                                                                    .name
                                                            }
                                                        </b>
                                                    </p>
                                                );
                                                return data;
                                            }
                                        )}
                                    </p>
                                );
                                return list;
                            })}
                        </div>

                        <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Move to"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Category;
