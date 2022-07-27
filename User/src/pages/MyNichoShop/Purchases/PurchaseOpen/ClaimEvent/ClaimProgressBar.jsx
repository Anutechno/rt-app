import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./claimprogress.scss";

const ClaimProgressBar = (props) => {
  const { position } = props;
  const [progressPosition, setProgressPosition] = useState(0);
  const [progressStatus, setProgressStatus] = useState([0, 0, 0, 0]);

  useEffect(() => {
    switch (position) {
      case "accepted":
        setProgressPosition(19);
        setProgressStatus([2, 0, 0, 0]);
        break;
      case "in":
        setProgressPosition(45);
        setProgressStatus([1, 2, 0, 0]);
        break;
      case "out":
        setProgressPosition(80);
        setProgressStatus([1, 1, 2, 0]);
        break;
      case "delivered":
        setProgressPosition(100);
        setProgressStatus([1, 1, 1, 2]);
        break;
      default:
        setProgressPosition(0);
        setProgressStatus([0, 0, 0, 0]);
    }
  }, [props]);

  return (
    <div className="claim-progress-bar">
      <ProgressBar now={progressPosition} className="claim-bar" />
      <div className="claim-position-status d-flex justify-content-between">
        <p
          className={`${progressStatus[0] > 0 ? "status-active" : ""} ${
            progressStatus[0] > 1 ? "position-relative progress-arrow-down" : ""
          }`}
        >
          {/* <div className="progress-arrow-down"></div> */}
          ACCEPTED
        </p>
        <p
          className={`${progressStatus[1] > 0 ? "status-active" : ""} ${
            progressStatus[1] > 1 ? "position-relative progress-arrow-down" : ""
          }`}
        >
          IN TRANSIT
        </p>
        <p
          className={`${progressStatus[2] > 0 ? "status-active" : ""} ${
            progressStatus[2] > 1 ? "position-relative progress-arrow-down" : ""
          }`}
        >
          OUT FOR DELIVERY
        </p>
        <p
          className={`${progressStatus[3] > 0 ? "status-active" : ""} ${
            progressStatus[3] > 1 ? "position-relative progress-arrow-down" : ""
          }`}
        >
          DELIVERED
        </p>
      </div>
    </div>
  );
};

export default ClaimProgressBar;
