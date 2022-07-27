import "./Overview.css";
const Overview = () => {
  return (
    <div className="row">
      <div className="col-sm-3 column_holder">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <hr />
            <div className="card_holder_mn">
              <div className="card_holder">
                <p className="card-text-error">Not Shipped</p>
                <p className="card-number text-right">1234</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Awaiting Shipment</p>
                <p className="card-number">5</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Awaiting Shipment</p>
                <p className="card-number">0</p>
              </div>
              <hr />
              <div className="card_holder">
                <p className="card-text">Awaiting Shipment</p>
                <p className="card-number">0</p>
              </div>
            </div>
            {/* <a href="#" className="btn btn-primary">
              Buyer Messages
            </a> */}
          </div>
        </div>
      </div>
      <div className="col-sm-3 column_holder">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Requests</h5>
            <hr />
            <div className="card_holder_mn">
              <div className="card_holder">
                <p className="card-text">Cancellation requests</p>
                <p className="card-number text-right">1</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Not received items</p>
                <p className="card-number">2</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Return requests</p>
                <p className="card-number">12</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Chargeback</p>
                <p className="card-number">0</p>
              </div>
            </div>
            {/* <a href="#" className="btn btn-primary">
              Buyer Messages
            </a> */}
          </div>
        </div>
      </div>
      <div className="col-sm-3 column_holder">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Listings</h5>
            <hr />

            <div className="card_holder_mn">
              <div className="card_holder">
                <p className="card-text">Active listings</p>
                <p className="card-number text-right">1234</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Out of stock</p>
                <p className="card-number">5</p>
              </div>
              <div className="card_holder">
                <p className="card-text">Unsold items</p>
                <p className="card-number">123</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-sm-3 column_holder">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Seller perfomance</h5>
            <hr />

            <div className="card_holder_mn">
              <div className="card_holder">
                <p className="card-text"> Seller level</p>
                <p
                  className="card-success-text text-right text-success"
                  style={{ textAlign: "right" }}
                >
                  Above standard
                </p>
              </div>
              <div className="card_holder">
                <p className="card-text">Positive feedback</p>
                <p className="card-number"> 98.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
