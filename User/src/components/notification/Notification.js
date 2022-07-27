import React from "react";
import "./Notification.css";

// function Notification({ color, title, image, description }) {
//   return (
//     <div className={`notification ${color}`}>
//       <div className="notification-img">
//         <img src={image} alt="" />
//       </div>
//       <div className="notification-text">
//         <h2 className={color}>{title}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Notification({ color, title, image, description }) {
  return (
    <div className="notifications">
      <div className="notification not1">
        <div className="notification-img">
          <img src={image} alt="" />
        </div>
        <div className="notification-text">
          <h2 className="green">WON</h2>
          <p className="smaller-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ...
          </p>
        </div>
      </div>
      <div className="notification not2">
        <div className="notification-img">
          <img src={image} alt="" />
        </div>
        <div className="notification-text">
          <h2 className="gray">UNSOLD</h2>
          <p className="smaller-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ...
          </p>
        </div>
      </div>
      <div className="notification not3">
        <div className="notification-img">
          <img src={image} alt="" />
        </div>
        <div className="notification-text">
          <h2 className="red">OUTBID</h2>
          <p className="smaller-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
