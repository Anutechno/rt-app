import React, { useState } from "react";

const CreatelistSearch = () => {
  const [searchData, setSearchData] = useState(false);

  const onHandlechange = () => {
    setSearchData(true);
  };

  return (
    <>
      <div className="main-search-list">
        <h2 className="search-heading">Find a matching category</h2>

        <div className="input-group-search">
          <div className="form-outline">
            <input
              id="search-input"
              type="search"
              placeholder="Enter a title for your listing (include brand, color, material etc.)"
              className="form-control"
              onChange={onHandlechange}
            />
          </div>

          <button id="search-button" type="button" className="btn btn-primary">
            <i class="bi bi-search"></i>
            <span>Search</span>
          </button>
        </div>
        {searchData ? (
          <div className="searchlist">
            <h3>
              Home, Furniture & DIY > Cookware, Dining & Bar > Tableware,
              Serving & Linen Cups & Saucers
            </h3>
            <h3>Baby > Baby Feeding > Cups/Dishes/Utensils </h3>
            <h3>Antiques > Asian Oriented Antiques > Chinese > Glasses/Cups</h3>
            <h3>Displayed categories don’t match to my item</h3>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default CreatelistSearch;
