import React, { useState } from "react";
import Data from "./data";
import "./FinishDraft.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FinishDraft = () => {
  const [data, setData] = useState(Data);

  var settings = {
    dots: false,
    infinite: false, // set it to false to check delete functionality for 'finish draft'
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      // {
      //   breakpoint: 1370,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: false,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDelete = (id) => {
    // console.log("click delete", id);

    const final_data = data.filter((data) => data.id !== id);
    // console.log("click delete", final_data);
    setData([...final_data]);
  };

  return (
    <>
      {console.log("click delete", data)}
      <div className="main-finish-draft">
        <h3 className="heading">Finish a draft</h3>

        {/* <div className="row draft-sec"> */}
        <Slider {...settings}>
          {data.map((currElem) => {
            return (
              <>
                <div className="">
                  <div className="main-draft-sec">
                    <img className="draft-img" src={currElem.draftimage} />
                    <p className="draft-info">
                      {currElem.info}
                      <div className="action-btns">
                        <button className="complete-btn">Complete</button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(currElem.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        {/* </div> */}
      </div>
    </>
  );
};

export default FinishDraft;
