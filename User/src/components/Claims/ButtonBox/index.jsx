import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { hasButton } from "../../../pages/PurchaseClaim/Action/actions";
import "./index.scss";

const ButtonBox = (props) => {
  const { btnBox } = props;
  const dispatch = useDispatch();
  const hasDialog = useSelector((state) => state.claim.toggleMessageDialog);

  const messageClick = () => {
    let data = {
      msgSend: true,
      closeClaim: false,
      documentSend: false,
      askUs: false,
    };
    dispatch(hasButton(data));
  };
  const claimClick = () => {
    let data = {
      msgSend: false,
      closeClaim: true,
      documentSend: false,
      askUs: false,
    };
    dispatch(hasButton(data));
  };
  const askClick = () => {
    let data = {
      msgSend: false,
      closeClaim: false,
      documentSend: false,
      askUs: true,
    };
    dispatch(hasButton(data));
  };
  return (
    <div className="claim-buttons">
      {hasDialog.msgSend || !btnBox[0] ? (
        ""
      ) : (
        <Button className="message-button" onClick={messageClick}>
          Send a message
        </Button>
      )}
      {hasDialog.closeClaim || !btnBox[1] ? (
        ""
      ) : (
        <Button className="claim-button" onClick={claimClick}>
          Close the claim
        </Button>
      )}
      {hasDialog.askUs || !btnBox[2] ? (
        ""
      ) : (
        <Button className="claim-button" onClick={askClick}>
          Ask us to help
        </Button>
      )}
    </div>
  );
};

export default ButtonBox;
