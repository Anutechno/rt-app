import { useState } from "react";
import "./customernote.scss";
import { useForm } from "react-hook-form";
import { v1 as uuidv4 } from "uuid";
import { IoMdAddCircleOutline } from "react-icons/io";
import moment from "moment";
import ConfirmAlert from "./Components/ConfirmAlert/ConfirmAlert";
import DeletedAlert from "./Components/DeletedAlert/DeletedAlert";
import { Link } from "react-router-dom";
import Nav from "../../../container/Nav/navbar";
import Footer from "../../../container/Footer/footer";

const CustomerNote = () => {
    /**
     * @description - customer note store
     */
    const { register, handleSubmit, reset } = useForm();

    const [getNote, setNote] = useState([
        {
            id: "bada1760-f177-11ec-ad5c-d12ad82407da",
            date: 1655825652280,
            subject:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            isCollpased: false,
        },
        {
            id: "bada1760-f177-11ec-ad5c-d12ad82402da",
            date: 1655825652280,
            subject:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            isCollpased: false,
        },
    ]);

    /**
     * @description note post alert
     */
    const [isNotePosted, setNotePosted] = useState(false);

    const noteSubmitHandler = (data) => {
        const date = new Date().getTime();
        setNote([...getNote, { ...data, date, id: uuidv4() }]);
        reset();
        setNotePosted(true);

        setTimeout(() => {
            setNotePosted(false);
        }, [1000]);
    };

    // useEffect(() => {
    //     const firstOneCollapsed = getNote.filter((item, index) => {
    //         if (index == 0) {
    //             item.isCollpased = true;
    //         }
    //         return item;
    //     });

    //     setNote(firstOneCollapsed);
    // }, [getNote]);

    const noteCollapseHandler = (i) => {
        const collapsed = getNote.filter((item) => {
            if (item.id === i) {
                if (item.isCollpased) {
                    item.isCollpased = false;
                } else {
                    const remData = getNote.filter((rem) => {
                        rem.isCollpased = false;
                        return rem;
                    });
                    setNote(remData);
                    item.isCollpased = true;
                }
            }
            return item;
        });

        setNote(collapsed);
    };

    // const [isConfirm, setConfigm] = useState(false);
    const [isAlertShow, setAlertShow] = useState(false);
    const [isDeleted, setDeleted] = useState(false);

    const noteDeleteHandler = () => {
        setAlertShow(true);
    };

    const alertCancel = () => {
        setAlertShow(false);
    };

    const alertDelete = (i) => {
        const deleted = getNote.filter((item) => {
            return item.id !== i && item;
        });
        setNote(deleted);
        setDeleted(true);
        setAlertShow(false);

        setTimeout(() => {
            setDeleted(false);
        }, 100);
    };

    return (
        <>
            <Nav />
            <div className="ui-cn-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="ui-cn-head">
                                <h4>Customer Support</h4>
                            </div>
                            {isNotePosted && (
                                <div className="ui-cn-alert">
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 8L8.8125 14L6 11.2727"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <circle
                                            cx="10.5"
                                            cy="10.5"
                                            r="9.5"
                                            stroke="white"
                                            stroke-width="2"
                                        />
                                    </svg>
                                    <p>Changes were successfully saved.</p>
                                </div>
                            )}
                            <div className="ui-cn-form">
                                <p>Add new note</p>
                                <form
                                    onSubmit={handleSubmit(noteSubmitHandler)}
                                >
                                    <div class="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            {...register("subject", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <textarea
                                            className="form-control"
                                            rows="6"
                                            placeholder="Description"
                                            {...register("description", {
                                                required: true,
                                            })}
                                        ></textarea>
                                    </div>
                                    <div className="ui-cn-form-btn">
                                        <button className="btn">Save</button>
                                        <button
                                            className="btn"
                                            onClick={() => {
                                                reset();
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-10">
                            <div className="ui-cn-table-head">
                                <h4>Notes about Agent CS_1</h4>
                                <button>
                                    <IoMdAddCircleOutline /> Add a new note
                                </button>
                            </div>

                            <div className="ui-cn-table-body">
                                <div className="ui-cntb-head">
                                    <ul>
                                        <li>Date</li>
                                        <li>Subject</li>
                                    </ul>
                                </div>
                                {getNote.map((item, index) => {
                                    return (
                                        <div
                                            className="ui-cntb-body-box"
                                            key={index}
                                        >
                                            <button
                                                onClick={() => {
                                                    noteCollapseHandler(
                                                        item.id
                                                    );
                                                }}
                                            >
                                                <ul>
                                                    <li>
                                                        {moment(
                                                            item.date
                                                        ).format("DD MMM YYYY")}
                                                    </li>
                                                    <li>{item.subject}</li>
                                                </ul>
                                            </button>
                                            {item.isCollpased && (
                                                <div className="ui-cntb-body-content">
                                                    <div className="ui-cntb-bc-head">
                                                        <h2>
                                                            {moment(
                                                                item.date
                                                            ).format(
                                                                "DD MMM YYYY"
                                                            )}
                                                        </h2>
                                                    </div>
                                                    <h4 className="mt-2">
                                                        Subject:
                                                    </h4>
                                                    <p>{item.subject}</p>
                                                    <h4>Description:</h4>
                                                    <p>{item.description}</p>
                                                    <div className="ui-cntb-bc-btn">
                                                        <button className="btn">
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={
                                                                noteDeleteHandler
                                                            }
                                                            className="btn"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {isAlertShow && (
                                                <ConfirmAlert
                                                    alertCancel={alertCancel}
                                                    alertDelete={alertDelete}
                                                    id={item.id}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                                {isDeleted && <DeletedAlert />}

                                <div className="ui-sc-table-footer">
                                    <div class="ui-cs-table-bottom">
                                        <p>Page 1 of 4</p>
                                        <div class="ui-cs-table-pagination">
                                            <button class="ui-cs-prev-btn">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                                                </svg>
                                            </button>
                                            <div class="ui-cs-pagination-no">
                                                <button>1</button>
                                                <button>2</button>
                                                <button class="active">
                                                    3
                                                </button>
                                                <button>4</button>
                                            </div>
                                            <button class="ui-cs-next-btn">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="ui-cn-tb-perpage">
                                            <p>Results per page</p>
                                            <select
                                                class="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option selected>10</option>
                                                <option selected>15</option>
                                                <option selected>20</option>
                                                <option selected>25</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="customer-back-btn">
                                <Link to="/customer-support">
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.625 14.875L5.25 10.5L9.625 6.125"
                                            stroke="black"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M15.75 14.875L11.375 10.5L15.75 6.125"
                                            stroke="black"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Back to list
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CustomerNote;
