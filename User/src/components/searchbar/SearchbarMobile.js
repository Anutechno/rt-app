import React, { useState } from "react";
import { Form } from "react-bootstrap";
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

function SearchbarMobile() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form action="/" method="get" className="search-bar-mobile">
        <input
          className="search-bar-input small-text"
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
          onChange={handleChange}
        />
        <div className="search-menu">
          <div className="search-category">
            {/* <i class="bi bi-chevron-compact-down"></i> */}
            <Form.Select id="category" aria-label="Default select example">
              <option value="1">All Categories</option>
              {categories.map((categ) => {
                const { id, category } = categ;
                return <option value={id}>{category}</option>;
              })}
            </Form.Select>
          </div>
          <button className="btn-search" type="submit">
            <img src={Search} alt='Search' />
          </button>
        </div>
      </form>
      {search.length !== 0 ? <Matches /> : null}
    </div>
  );
}

const Matches = () => {
  return (
    <div className="search-bar-matches mobile-matches">
      <p className="smaller-text">Match 1</p>
      <p className="smaller-text">Match 2 Match 2</p>
      <p className="smaller-text">Match 3 Match 3 Match3</p>
    </div>
  );
};

export default SearchbarMobile;
