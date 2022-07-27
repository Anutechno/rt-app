import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import Search from '../../assets/cancelled-img/Search.svg'
import "./Searchbar.css";

const categories = [
  {
    id: 2,
    category: "Antiques",
  },
  {
    id: 3,
    category: "Art",
  },
  {
    id: 4,
    category: "Baby",
  },
  {
    id: 5,
    category: "Books",
  },
  {
    id: 6,
    category: "Business & Individual",
  },
  {
    id: 7,
    category: "Cameras & Photo",
  },
  {
    id: 8,
    category: "Cell Phones & Accessories",
  },
  {
    id: 9,
    category: "Clothing, Shoes & Accessories",
  },
  {
    id: 10,
    category: "Coins & Paper Money",
  },
  {
    id: 11,
    category: "Collectibles",
  },
  {
    id: 12,
    category: "Computers/Tablets & Networking",
  },
  {
    id: 13,
    category: "Customer Electronics",
  },
  {
    id: 14,
    category: "Crafts",
  },
  {
    id: 15,
    category: "Dolls & Bears",
  },
  {
    id: 16,
    category: "DVDs & Movies",
  },
  {
    id: 17,
    category: "Entertainment Memorabilia",
  },
  {
    id: 18,
    category: "Gift Cards & Coupons",
  },
  {
    id: 19,
    category: "Health & Beauty",
  },
  {
    id: 20,
    category: "Home & Garden",
  },
  {
    id: 21,
    category: "Jewelry & Watches",
  },
  {
    id: 22,
    category: "Music",
  },
  {
    id: 23,
    category: "Musical Instruments & Gear",
  },
  {
    id: 24,
    category: "Pet Supplies",
  },
  {
    id: 25,
    category: "Pottery & Glass",
  },
  {
    id: 26,
    category: "Real Estate",
  },
  {
    id: 27,
    category: "Specialty Services",
  },
  {
    id: 28,
    category: "Sporting Goods",
  },
  {
    id: 29,
    category: "Sports Mem, Cards & Fan Shop",
  },
  {
    id: 30,
    category: "Stamps",
  },
  {
    id: 31,
    category: "Tickets & Experiences",
  },
  {
    id: 32,
    category: "Toys & Hobbies",
  },
  {
    id: 33,
    category: "Travel",
  },
  {
    id: 34,
    category: "Video Games & Consoles",
  },
];

function Searchbar() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOption = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };

  return (
    <div>
      <form action="/" method="get" className="search-bar">
        <input
          className="search-bar-input small-text"
          type="text"
          id="header-search"
          placeholder="Search..."
          name="s"
          onChange={handleChange}
        />
        <div className="search-menu">
          <div className="search-category">
            <Form.Select
              id="category"
              aria-label="Default select example"
              style={{
                width: `${8 * categories[2].category.length + 100}px`,
              }}
              onChange={handleOption}
            >
              <option value="1">All Categories</option>
              {categories.map((categ) => {
                const { id, category } = categ;
                return <option value={id}>{category}</option>;
              })}
            </Form.Select>
          </div>
        </div>
        <button className="btn-search" type="submit">
          <img src={Search} alt='Search' />
        </button>
      </form>
      {search.length !== 0 ? <Matches /> : null}
    </div>
  );
}

const Matches = () => {
  return (
    <div className="search-bar-matches comp-matches">
      <p className="smaller-text">Match 1</p>
      <p className="smaller-text">Match 2 Match 2</p>
      <p className="smaller-text">Match 3 Match 3 Match3</p>
    </div>
  );
};

export default Searchbar;
