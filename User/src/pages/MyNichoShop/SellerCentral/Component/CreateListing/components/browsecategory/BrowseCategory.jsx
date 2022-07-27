import React, { useState } from "react";
import "./BrowseCategory.css";
// import { useHistory } from "react-router-dom";

const BrowseCategory = () => {
    // const history = useHistory();
    const [showBrowse, setShowBrowse] = useState(false);

    const showBrowsecategory = () => {
        setShowBrowse(!showBrowse);
    };

    const haldeRedirect = () => {
        // history.push("/createlistingform");
    };

    return (
        <>
            <div className="browse-main">
                <button
                    className="browse-heading"
                    onClick={showBrowsecategory}
                    type="button"
                >
                    Browse Category
                </button>
                {showBrowse ? (
                    <div className="browse-category">
                        <div className="main-browse-category">
                            <div className="row main-category">
                                <div className="col-sm-12 col-md-4 category">
                                    <div className="category-type">
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 category">
                                    <div className="category-type">
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 category">
                                    <div className="category-type">
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Clothes, Shoes & Accessoires">
                                                    Clothes, Shoes & Accessoires
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                        <div class="selectdiv">
                                            <select name="cars" id="cars">
                                                <option value="Antiques">
                                                    Antiques
                                                </option>
                                                <option value="Baby">
                                                    Baby
                                                </option>
                                                <option value="Books, Comics & Magazines">
                                                    Books, Comics & Magazines
                                                </option>
                                                <option value="Cars, Motocycles & Vehicles">
                                                    Cars, Motocycles & Vehicles
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category-btn-sec">
                                <button
                                    className="category-btn"
                                    onClick={haldeRedirect}
                                    type="button"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
};

export default BrowseCategory;
