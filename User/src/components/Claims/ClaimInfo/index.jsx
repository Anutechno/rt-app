import "./index.scss";

const ClaimInfo = ({ claimInfo }) => {
  return (
    <div className="claim-info">
      {console.log(claimInfo)}
      {claimInfo && (
        <>
          <h3>{claimInfo.status}</h3>
          <p>
            Order ID: <span className="order-id">{claimInfo.orderId}</span>
          </p>
          <p>
            Seller: <span>{claimInfo.seller}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ClaimInfo;
