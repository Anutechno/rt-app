import React from "react";
import "./Notification.css";

function NotificationBell({ color, title, image, description }) {
  return (
    <div className={`notification notif-bell`}>
      <div className="notification-img">
        <img src={image} alt="" />
      </div>
      <div className="notification-text">
        <h2 className={color}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="notification-close">
        <i class="bi bi-x"></i>
      </div>
    </div>
  );
}

export default NotificationBell;
