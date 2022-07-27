import React from "react";
const Alert_Success = () => {
    return (
        <div className="custom-ui text-center alert_window px-5 py-4">
            <p>Successfully Saved!</p>
            <button
                className="btn btn-sm btn-primary mx-2 px-3"
                onClick={() => {
                    onclose();
                }}
            >
                Close
            </button>
        </div>
    );
};
export default Alert_Success;
