const ClaimDetails = (props) => {
  const { details } = props;

  return (
    <div>
      {!!details.item ? (
        <>
          {details.item.map((item, index) => (
            <div key={index}>
              <div className="line" />
              <div className="item-content d-flex">
                <div className="item-image ">
                  <img src="" />
                </div>
                <div className="item-desc">
                  <p className="item-brief">{item.info}</p>
                  {!!item.condition ? (
                    <p>
                      Condition: <span>{item.condition}</span>
                    </p>
                  ) : (
                    ""
                  )}
                  {!!item.color ? (
                    <p>
                      Color: <span>{item.color}</span>
                    </p>
                  ) : (
                    ""
                  )}
                  {!!item.size ? (
                    <p>
                      Size: <span>{item.size}</span>
                    </p>
                  ) : (
                    ""
                  )}
                  {!!item.material ? (
                    <p>
                      Meterial: <span>{item.material}</span>
                    </p>
                  ) : (
                    ""
                  )}
                  {!!item.claimItem ? (
                    <p>
                      Claim items: <span>{item.claimItem}</span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      {!!details.history ? (
        <div className="item-history">
          {details.history.map((history, index) => (
            <div className="d-flex item-history-list" key={index}>
              <div className="item-history-date">
                <span>{history.date}</span>
              </div>
              <div className="item-history-detail">
                <p>{history.topic}</p>
                {!!history.reason ? (
                  <p>
                    Reason: <br />
                    <span>{history.reason}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.comment ? (
                  <p>
                    Comment: <br />
                    <span>{history.comment}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.carrier ? (
                  <p>
                    Carrier: <br />
                    <span>{history.carrier}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.trackingNumber ? (
                  <p>
                    Tracking number: <br />
                    <span>{history.trackingNumber}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.content ? <p>{history.content}</p> : ""}
                {!!history.claimID ? (
                  <p>
                    Claim ID: <span>{history.claimID}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.claimAmount ? (
                  <p>
                    Claim amount: <span>{history.claimAmount}</span>
                  </p>
                ) : (
                  ""
                )}
                {!!history.orderDetails ? (
                  <p>
                    Order details: <span>{history.orderDetails}</span>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClaimDetails;
