import React from "react";
import "./CurrencySelector.css";
import { Form } from "react-bootstrap";

function CurrencySelector() {
  const currencies = [
    // {
    //   id: 1,
    //   crt: "$ - USD - U.S. Dollar",
    // },
    {
      id: 2,
      crt: "AED - Arab Emirates Dirham",
    },
    {
      id: 3,
      crt: "ARS - Argentine Peso",
    },
    {
      id: 4,
      crt: "AMD - Armenian Dram",
    },
    {
      id: 5,
      crt: "AWG - Aruban Florin",
    },
    {
      id: 6,
      crt: "A$ - AUD - Australian Dollar",
    },
    {
      id: 7,
      crt: "AZN - Azerbaijan New Manat",
    },
    {
      id: 8,
      crt: "BGN - Bulgaria Lev",
    },
    {
      id: 9,
      crt: "BSD - Bahamas Dollar",
    },
    {
      id: 10,
      crt: "BZD - Belize Dollar",
    },
    {
      id: 11,
      crt: "BOB - Bolivian Boliviano",
    },
    {
      id: 12,
      crt: "R$ - BRL - Brazilian Real",
    },
    {
      id: 13,
      crt: "BND - Bruneian Dollar",
    },
    {
      id: 14,
      crt: "KHR - Cambodian Riel",
    },
    {
      id: 15,
      crt: "KYD - Caymanian Dollar",
    },
    {
      id: 16,
      crt: "CLP - Chilean Peso",
    },
    {
      id: 17,
      crt: "CN¥ - CNY - Chinese Yuan Renminbi",
    },
    {
      id: 18,
      crt: "COP - Colombian Peso",
    },
    {
      id: 19,
      crt: "CRC - Costa Rican Colon",
    },
    {
      id: 20,
      crt: "DOP - Dominican Republic Peso",
    },
    {
      id: 21,
      crt: "EC$ - XCD - East Caribbean Dollar",
    },
    {
      id: 22,
      crt: "EGP - Egyptian Pound",
    },
    {
      id: 23,
      crt: "€ - EUR - Euro",
    },
    {
      id: 24,
      crt: "GHS - Ghanaian Cedi",
    },
    {
      id: 25,
      crt: "GTQ - Guatemalan Quetzal",
    },
    {
      id: 26,
      crt: "HNL - Honduran Lempira",
    },
    {
      id: 27,
      crt: "HK$ - HKD - Hong Kong Dollar",
    },
    {
      id: 28,
      crt: "HUF - Hungarian Forint",
    },
    {
      id: 29,
      crt: "₹ - INR - Indian Rupee",
    },
    {
      id: 30,
      crt: "IDR - Indonesian Rupiah",
    },
    {
      id: 31,
      crt: "₪ - ILS - Israeli Shekel",
    },
    {
      id: 32,
      crt: "JMD - Jamaican Dollar",
    },
    {
      id: 33,
      crt: "¥ - JPY - Japanese Yen",
    },
    {
      id: 34,
      crt: "KZT - Kazakhstan Tenge",
    },
    {
      id: 35,
      crt: "KES - Kenyan Shilling",
    },
    {
      id: 36,
      crt: "LBP - Lebanese Pound",
    },
    {
      id: 37,
      crt: "MOP - Macanese Pataca",
    },
    {
      id: 38,
      crt: "MYR - Malaysian Ringgit",
    },
    {
      id: 39,
      crt: "MUR - Mauritian Rupee",
    },
    {
      id: 40,
      crt: "MX$ - MXN - Mexico Peso",
    },
    {
      id: 41,
      crt: "MNT - Mongolian Tugrik",
    },
    {
      id: 42,
      crt: "MAD - Moroccan Dirham",
    },
    {
      id: 43,
      crt: "NAD - Namibia Dollar",
    },
    {
      id: 44,
      crt: "NZ$ - NZD - New Zealand Dollar",
    },
    {
      id: 45,
      crt: "NGN - Nigerian Naira",
    },
    {
      id: 46,
      crt: "NOK - Norwegian Krone",
    },
    {
      id: 47,
      crt: "PAB - Panamanian Balboa",
    },
    {
      id: 48,
      crt: "PYG - Paraguayan Guarani",
    },
    {
      id: 49,
      crt: "PEN - Peruvian Sol",
    },
    {
      id: 50,
      crt: "PHP - Philippine Peso",
    },
    {
      id: 51,
      crt: "£ - GBP - Pounds",
    },
    {
      id: 52,
      crt: "QAR - Qatari Riyal",
    },
    {
      id: 53,
      crt: "RUB - Russian Ruble",
    },
    {
      id: 54,
      crt: "SAR - Saudi Arabian Riyal",
    },
    {
      id: 55,
      crt: "SGD - Singapore Dollar",
    },
    {
      id: 56,
      crt: "ZAR - South African Rand",
    },
    {
      id: 57,
      crt: "₩ - KRW - South Korean Won",
    },
    {
      id: 58,
      crt: "NT$ - TWD - Taiwan New Dollar",
    },
    {
      id: 59,
      crt: "TZS - Tanzania Shilling",
    },
    {
      id: 60,
      crt: "THB - Thai Baht",
    },
    {
      id: 61,
      crt: "TTD - Trinidadian Dollar",
    },
    {
      id: 62,
      crt: "TRY - Turkish Lira",
    },
    {
      id: 63,
      crt: "UYU - Uruguayan Peso",
    },
    {
      id: 64,
      crt: "₫ - VND - Vietnamese Dong",
    },
  ];

  return (
    <div className="currency-selector ">
      <Form.Select className="select-form selector">
        <option value="1" selected>
          $ - USD - U.S. Dollar
        </option>
        {currencies.map((currency) => {
          const { id, crt } = currency;

          return <option value={id}>{crt}</option>;
        })}
      </Form.Select>
    </div>
  );
}

export default CurrencySelector;
