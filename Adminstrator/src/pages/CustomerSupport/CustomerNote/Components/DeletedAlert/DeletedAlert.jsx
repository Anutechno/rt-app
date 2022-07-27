import "./deletedalert.scss";

const DeletedAlert = () => {
    return (
        <div>
            <div className="ui-deleted-alert">
                <div>
                    <h2>This note was successfully deleted</h2>
                    <svg
                        width="68"
                        height="68"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M68.5614 35.9999C68.5614 53.9823 53.9838 68.5599 36.0014 68.5599C18.019 68.5599 3.44141 53.9823 3.44141 35.9999C3.44141 18.0175 18.019 3.43994 36.0014 3.43994C53.9838 3.43994 68.5614 18.0175 68.5614 35.9999Z"
                            fill="white"
                            stroke="#2AAC27"
                            stroke-width="4"
                        />
                        <path
                            d="M51.72 25.4805L30.6 46.6005L21 37.0005"
                            stroke="#2AAC27"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DeletedAlert;
