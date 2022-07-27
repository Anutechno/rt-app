import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipText = ({ children, text }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
};

export default TooltipText;
