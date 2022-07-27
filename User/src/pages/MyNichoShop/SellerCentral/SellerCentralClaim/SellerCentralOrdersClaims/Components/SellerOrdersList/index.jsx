import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./index.scss";
import SellerOrderListItem from "./SellerOrderListItem";

const SellerCentralOrdersContent = () => {
  const [category1, setCategory1] = useState("ascending");

  const [items, setItems] = useState([
    {
      date: "20 May",
      status: "Requiring your attention",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 1,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Under review",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Under review",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Waiting for the seller's responses",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Requiring your attention",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Requiring your attention",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "Closed by the Customer Support",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
    {
      date: "20 May",
      status: "You received a refund",
      order: "12345678-123456",
      buyer: "seller_username",
      claimDate: "22 Sep 2017",
      amount: "US $1,234.56",
      active: 0,
      items: [
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
        {
          image: "",
          title:
            "Norton Security Deluxe 2016 - 1 year / 3 Devices (Windows, Android, Mac and IOS)",
          descr: "Delivery estimate: 22 Dec - 22 Dec",
        },
      ],
    },
  ]);

  return (
    <div className="seller-central-orders-content">
      <div className="order-list-sort d-flex align-items-center justify-content-end">
        <span>Sort by:</span>
        <FormControl sx={{ minWidth: 316 }}>
          <Select
            value={category1}
            onChange={(e) => {
              setCategory1(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="ascending">Date requrested (ascending)</MenuItem>
          </Select>
        </FormControl>
      </div>
      <SellerOrderListItem items={items} />
    </div>
  );
};

export default SellerCentralOrdersContent;
