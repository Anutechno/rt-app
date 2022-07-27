import MessageSend from "./MessageSend";
import CloseClaim from "./CloseClaim";
import DocumentSend from "./DocumentSend";
import AskUs from "./AskUs";
import { useSelector } from "react-redux";

import "./index.scss";

const ClaimBtnDialogs = () => {
  const hasDialog = useSelector((state) => state.claim.toggleMessageDialog);

  return (
    <div className="claim-dialog">
      {hasDialog.msgSend ? <MessageSend /> : ""}
      {hasDialog.closeClaim ? <CloseClaim /> : ""}
      {hasDialog.documentSend ? <DocumentSend /> : ""}
      {hasDialog.askUs ? <AskUs /> : ""}
    </div>
  );
};

export default ClaimBtnDialogs;
