import "./configmalert.scss";

const ConfirmAlert = ({ alertCancel, alertDelete, id }) => {
    return (
        <>
            <div className="ui-configm-alert">
                <div>
                    <h2>Confirm your delete</h2>
                    <p>Are you sure you wan to delete this note?</p>
                    <div className="ui-confirm-btn">
                        <button className="btn" onClick={alertCancel}>
                            Cancel
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                alertDelete(id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmAlert;
