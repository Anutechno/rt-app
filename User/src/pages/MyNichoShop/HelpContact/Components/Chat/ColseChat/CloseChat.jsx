import "./closechat.scss";

const CloseChat = ({ yesHander, noHander }) => {
    return (
        <>
            <div className="ui-close-chat-box text-center">
                <p>
                    Your feedback helps us in our guest to provide the best
                    support to our customers
                </p>

                <p>Did I solve your problem?</p>
                <div className="ui-cc-btn">
                    <button
                        onClick={() => {
                            yesHander();
                        }}
                        className="btn"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => {
                            noHander();
                        }}
                        className="btn"
                    >
                        No
                    </button>
                </div>
            </div>
        </>
    );
};

export default CloseChat;
