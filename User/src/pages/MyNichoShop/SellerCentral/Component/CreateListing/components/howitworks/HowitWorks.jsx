import React, { useState } from "react";
import Data from "./Data";
import "./HowitWorks.css";

const HowitWorks = () => {
  const [show, setShow] = useState(true);

  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="main-how-it-work">
        <div className="main-header">
          <h3 className="heading">Here how it works</h3>
          <i class="fa fa-times" aria-hidden="true" onClick={handleOpen}></i>
        </div>

        {show ? (
          <div className="work-group row">
            {Data.map((currElem) => {
              return (
                <>
                  <div className="col-md-9 col-sm-9 col-xl-4">
                    <div className="work-list ">
                      <img src={currElem.listimage} />
                      <div className="list-group-work">
                        <h3> {currElem.title} </h3>
                        <p> {currElem.description} </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default HowitWorks;
