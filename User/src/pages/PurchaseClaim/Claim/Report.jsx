import { useEffect, useState } from "react";
import "./claim.scss";
const Report = () => {
  const [items, setItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [change, setChange] = useState(0);
  const [messageCharacter, setMessageCharacter] = useState(250);

  useEffect(() => {
    let data = [
      {
        image: "",
        condition: "New without tag",
        quantity: 1,
      },
      {
        image: "",
        condition: "New without tag",
        quantity: 1,
      },
      {
        image: "",
        condition: "New without tag",
        size: "S",
        color: "Blue",
        quantity: 1,
      },
      {
        image: "",
        condition: "New without tag",
        size: "S",
        color: "Blue",
        quantity: 1,
      },
    ]
    setItems(data);
    let format1 = [];
    let format2 = [];
    for(let i=0; i<data.length; i++) {
      format1.push(0);
      format2.push(0);
    }
    setCheckedItem(format1);
    setQuantity(format2);
  }, []);

  const selectItem = (index) => {
    console.log("select")
    let data1 = checkedItem;
    data1[index] = data1[index] == 0 ? 1 : 0;
    setCheckedItem(data1)
    setChange(change + 1)
  }

  const quantityInput = (e, index) => {
    console.log(e)
    let data2 = quantity;
    if (e == "") {
      console.log(e)
      e = 0;
    } 
    data2[index] = parseInt(e);
    setQuantity(data2)
    setChange(change + 1)
  }

  const submit = () => {
    let data = quantity;
    let flag = 0;
    for(let i=0; i<quantity.length; i++) {
      if (checkedItem[i] == 1 && quantity[i] == 0) {
        data[i] = -1;
        flag = 1;
      }
      if (quantity[i] == -1)
        flag = 1;
    }

    if (flag == 0) {
      alert("success");
    } else {
      setQuantity(data);
      setChange(change+1);
    }
  }

  return (
    <div className="report">
      <h2>Report a not reieved item</h2>
      <ul className="order">
        <li>
          Order: <span>#123456789-12345</span>
        </li>
        <li>
          Ordered on: <span>22 Sep 2017</span>
        </li>
        <li>
          Seller: <span className="seller-username">seller_username</span>
        </li>
      </ul>

      <div className="report-content">
        <div className="header">
          <h3>We hope you get your item soon</h3>
          <p>
            We’re sorry to hear that your item doesn’t arrive. The first step is
            reporting the problem to the seller by filling out the form below.
            If the seller doesn’t resolve this problem within 7 calendar days,
            you can contact us and we’ll help.
          </p>
        </div>
        <div className="content">
          {
            items.length == 1 ? 
              <h4>Item you didn't receive</h4>
              : <h4>Select the items you didn't receive</h4>
          }
          {items.map((item, index) => (
            <div key={index} className="items">
              <div className="item-card d-flex">
                <input type="checkbox" onChange={() => {selectItem(index)}}/>
                <div class="image">
                  <img src={item.image} logo="Image" />
                </div>
                <div className="detail">
                  <p>
                    EE PAY AS YOU GO 4G prepaid sim card with preloader US
                    $150.50 for calls, everything in one package
                  </p>
                  <p>Condition: {item.condition}</p>
                  {Object.hasOwn(item, "size") ? <p>Size: {item.size}</p> : ""}
                  {Object.hasOwn(item, "color") ? <p>Main Color: {item.color}</p> : ""}
                    {
                      checkedItem[index] == 1 ? 
                      <>
                        <p>Quantity not received</p>
                        <input type="number" className={quantity[index] == -1 ? "error" : ""} onChange={(e) => {quantityInput(e.target.value, index)}}/> / {item.quantity}
                        {
                          quantity[index] == -1 ? 
                            <p className="error">Invalid quantity</p> 
                            : 
                            ""
                        }
                      </>
                      : 
                      <>
                        <p>Quantity: {item.quantity}</p>
                      </>
                    }
                  
                </div>
              </div>
              <div className="item-border"></div>
            </div>
          ))}
        </div>
        <div className="message-seller">
          <h5>Message to the seller (optional)</h5>
          <textarea
            name="message"
            id="message"
            placeholder="Enter message"
          ></textarea>
          <span>{messageCharacter}character(s)</span>
          <div className="buttons">
            <button>Back</button>
            <button onClick={submit}>Submit claim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
