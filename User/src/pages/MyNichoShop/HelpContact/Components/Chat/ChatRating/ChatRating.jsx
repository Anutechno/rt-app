import { useState } from "react";
import "./chatrating.scss";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ChatRating = () => {
    // all rating store
    const [getFriendlyRating, setFriendlyRating] = useState(0);
    const [getReassuringRating, setReassuringRating] = useState(0);
    const [getKnowledgeableRating, setKnowledgeableRating] = useState(0);
    const [getUnderstandRating, setUnderstandRating] = useState(2);

    // all rating handler
    const friendlyChange = (newRating) => {
        setFriendlyRating(newRating);
    };
    const reassuringChange = (newRating) => {
        setReassuringRating(newRating);
    };
    const knowledgeableChange = (newRating) => {
        setKnowledgeableRating(newRating);
    };
    const understandChange = (newRating) => {
        setUnderstandRating(newRating);
    };
    return (
        <>
            <div className="ui-chat-rating-box">
                <p>Rate our representative, Name:</p>
                <div className="ui-chat-rating-star">
                    <label>Friendly</label>
                    <ReactStars
                        count={5}
                        value={getFriendlyRating}
                        onChange={friendlyChange}
                        size={26}
                        activeColor="#0072BC"
                        color="#0072BC"
                        emptyIcon={<AiOutlineStar />}
                        filledIcon={<AiFillStar />}
                    />
                </div>
                <div className="ui-chat-rating-star">
                    <label>Reassuring</label>
                    <ReactStars
                        count={5}
                        value={getReassuringRating}
                        onChange={reassuringChange}
                        size={26}
                        activeColor="#0072BC"
                        color="#0072BC"
                        emptyIcon={<AiOutlineStar />}
                        filledIcon={<AiFillStar />}
                    />
                </div>
                <div className="ui-chat-rating-star">
                    <label>Knowledgeable</label>
                    <ReactStars
                        count={5}
                        value={getKnowledgeableRating}
                        onChange={knowledgeableChange}
                        size={26}
                        activeColor="#0072BC"
                        color="#0072BC"
                        emptyIcon={<AiOutlineStar />}
                        filledIcon={<AiFillStar />}
                    />
                </div>
                <div className="ui-chat-rating-star">
                    <label>Easy to understand</label>
                    <ReactStars
                        count={5}
                        value={getUnderstandRating}
                        onChange={understandChange}
                        size={26}
                        activeColor="#0072BC"
                        color="#0072BC"
                        emptyIcon={<AiOutlineStar />}
                        filledIcon={<AiFillStar />}
                    />
                </div>
                <div>
                    <label className="form-label">Anything else to add?</label>
                    <textarea
                        placeholder="Enter a message to the buyer..."
                        className="form-control"
                        rows="3"
                    ></textarea>
                    <span>1000 characters left</span>
                </div>
                <p className="py-2">
                    Thank you for taking time to give us feedback. Your feedback
                    is extremely important to us and helps us to continue to
                    improve our customer support.
                </p>
                <button className="btn">Start chat</button>
            </div>
        </>
    );
};

export default ChatRating;
