import React, { useState } from "react";

const HowitWorkList = () => {
  const [list, setList] = useState(false);

  const handleOpen = () => {
    setList(!list);
  };

  return (
    <>
      <div className="work-list-main">
        <div className="list-container">
          <div className="list-box">
            <div className="heading-container">
              <img src="/images/note.png" />
              <h3>Here how it works</h3>
            </div>

            <i
              class="fa fa-angle-down"
              aria-hidden="true"
              onClick={handleOpen}
            ></i>
          </div>
        </div>
        {list ? (
          <div className="lists">
            <ul>
              <li>
                Choose the category most relevant to your item so that it's easy
                for buyers to find your listing. Choose a category by searching
                or browsing.
              </li>
              <li>
                Write a good and clear title, to helps buyers to find your item
                easy. Include details such as the brand, item name, size or
                color.
              </li>
              <li>
                Specify the accurately condition of your item and gives buyers
                confidence that they'll get the item they want.
              </li>
              <li>
                Add high-quality and detailed photos to your listing. When
                selling used, refurbished or flawed item, we recommend you
                include photos of the actual item for sale.
              </li>
              <li>
                Provide item specifics (brand, material, country of origin,
                etc.) and makes easier for buyers to find your item.
              </li>
              <li>
                ake a very detailed description of your item for sale. As more
                details you included, so more helpful for the potential buyers.
              </li>
              <li>
                Choose a listing format. Choose fixed price if you know the
                price you want for your item, or choose an auction-style and let
                buyers bidding for your item.
              </li>
              <li>
                Choose the credit or debit card where you want receive the
                payment, so it will be easy for your buyers to pay you right
                away and you can ship your item faster.
              </li>
              <li>
                Specify shipping services and the shipping charge, or offer free
                shipping to attract more potential buyers. Also you need to
                specify the locations you'll ship to.
              </li>
              <li>
                Specify your return policy as you have in mind that buyers are
                more comfortable shopping from sellers who offer return
                policies.
              </li>
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default HowitWorkList;
