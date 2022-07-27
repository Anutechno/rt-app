import React, { useState, useRef } from "react";
import { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, InputGroup } from "react-bootstrap";
import TooltipText from "../components/TooltipText/TooltipText";
import { Link } from "react-router-dom";
const ListForm = () => {
  const allfields = {
    itemTitle: "",
    conditionDetails: "",
    itemDescription: "",
    listingFormat: "",
    buyPrice: "",
    quantity: "",
    listDuration: "",
    service: "",
    cost: "",
    dispatchTime: "",
    itemLocation: "",
  };
  const [validated, setValidated] = useState(false);
  const [img, setImg] = useState([]);
  const [data, setData] = useState(allfields);
  const [description, setDescription] = useState("");
  const [showDestination, setShowDestination] = useState(false);
  const [showalert, setShowAlert] = useState(false);
  const bgimage = "/images/BG.png";
  const fileArray = [];
  const fileObj = [];

  const hiddenFileInput = useRef(null);

  var i = 0;
  const MAX_LENGTH = 6;

  const onImageChange = (e) => {
    fileObj.push(e.target.files);

    for (i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }

    setImg(fileArray);
  };

  const handleListit = (e) => {
    e.preventDefault();
    // console.log("clickkk");

    if (
      data.itemTitle === "" ||
      data.conditionDetails === "" ||
      description === "" ||
      data.buyPrice === "" ||
      data.quantity === "" ||
      data.listDuration === "" ||
      data.cost === ""
    ) {
      // alert("please fill the required fields");
      setShowAlert(true);
    } else {
      console.log(data, "======data", description, "---desc");
    }

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleGet = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const checkboxHandler = () => {
    setShowDestination(true);
  };

  const selectImage = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className="main-heading">
        <h3 className="heading">
          <Link to='/createListing_multiple'>List multiple variations of your item</Link>
        </h3>
        <TooltipText text="If you sell multiple variations of your item, you can list all item variations in one multi-quantity listing. That saves your time.">
          <div className="tooltip-ques">
            <img src="/images/questions.png" />
          </div>
        </TooltipText>
        <br />
      </div>
      {showalert ? (
        <div className="showfillmsg">
          <div className="tooltip-ques">
            <img src="/images/questions.png" />
          </div>
          There was a problem with your listing. Please fix the errors highlited
          in the fields below.
        </div>
      ) : (
        <p></p>
      )}
      <div className="main-form">
        <Form
          className="list-form needs-validation"
          noValidate
          validated={validated}
        >
          <div className="main-list-form">
            <h3>Describe your item</h3>
            <hr />
            <div className="com-fields">
              <div className="first-field">
                <lable>*Category</lable>
              </div>
              <div className="sec-field">
                <label>
                  Computers, Tables & Networking > Software > Antivirus &
                  Security
                </label>
                <a className="category-link"> Change category</a>
              </div>
            </div>
            <div className="com-fields">
              <div className="first-field">
                <lable>*Title</lable>
              </div>
              <div className="sec-field">
                <Form.Control
                  type="text"
                  placeholder="Enter a title"
                  name="itemTitle"
                  value={data.itemTitle}
                  onChange={handleGet}
                  required
                  maxLength="100"
                  class="form-control"
                />
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <div class="tooltip-condition">
                  <TooltipText text="Provide details about the condition of a non-new item, including any defects or flaws, so that buyers know exactly what to expect. Learn more">
                    <lable
                      style={{
                        alignItems: "center",
                        display: "flex",
                        gap: "6px",
                      }}
                    >
                      *Condition details <img src="/images/questions.png" />{" "}
                    </lable>
                  </TooltipText>
                </div>
              </div>
              <div className="sec-field">
                <select
                  style={{ width: "100%", padding: "6px" }}
                  name="conditionDetails"
                  value={data.conditionDetails}
                  onChange={handleGet}
                  required
                >
                  <option>Enter a title</option>
                  <option>Brand</option>
                  <option>Platform</option>
                </select>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <lable>*Photos</lable>
              </div>
              <div className="sec-field">
                <label>
                  Add up to 6 photos. We accepting jpg, gif, or png image files
                  under 10MB, and between 128 and 4.096 pixels in size.
                </label>
                <div className="com-fields">
                  <div className="first-field inputImage">
                    <label for="inputTag">
                      <i class="bi bi-plus" onClick={selectImage}></i>
                      <br />
                      Add photo
                      <Form.Control
                        type="file"
                        id="Itemimgs"
                        name="img"
                        accept="image/*"
                        onChange={onImageChange}
                        multiple="multiple"
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  <div className="sec-field">
                    {/* {console.log(img.length)} */}
                    {img.map((url) => (
                      <img
                        src={url ? url : bgimage}
                        alt="..."
                        className="select-img"
                        accept="image/*"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="com-fields">
              <div className="first-field">
                <label>*Item specifics</label>
              </div>
              <div className="sec-field option">
                <select required>
                  <option>Brand</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Type</option>
                  <option>Brand</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Platform</option>
                  <option>Type</option>
                  <option>Brand</option>
                </select>

                <select>
                  <option>Operating System</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Language</option>
                  <option>Brand</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Distribution Media</option>
                  <option>Type</option>
                  <option>Brand</option>
                </select>

                <select>
                  <option>License Category</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Min. Hard Drive Space</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <button className="addItem-btn">
                  {" "}
                  <img src="/images/addItem.png" /> Add your Item specific
                </button>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Item description</label>
              </div>
              <div className="sec-field">
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Enter the description</p>"
                  name="itemDescription"
                  value={data.itemDescription}
                  required
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ data });
                    setDescription(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="main-list-form">
            <h3>Select listing and price</h3>
            <hr />

            <div className="com-fields">
              <div className="first-field">
                <label>*Listing format</label>
              </div>
              <div className="sec-field btns">
                <button className="fixed-price-btn" type="button">
                  Fixed price
                </button>
                <button className="auction-btn" type="button">
                  Auction
                </button>
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Buy it now price</label>
              </div>
              <div className="sec-field">
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">US $</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    required
                    name="buyPrice"
                    value={data.buyPrice}
                    onChange={handleGet}
                  />
                </InputGroup>
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Quantity</label>
              </div>
              <div className="sec-field">
                <Form.Control
                  type="number"
                  required
                  name="quantity"
                  value={data.quantity}
                  onChange={handleGet}
                />
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Listing duration</label>
              </div>
              <div className="sec-field">
                <select
                  required
                  name="listDuration"
                  value={data.listDuration}
                  onChange={handleGet}
                >
                  <option>---</option>
                  <option>3 days</option>
                  <option>5 days</option>
                  <option>7 days</option>
                  <option>10 days</option>
                  <option>30 days</option>
                  <option>Till out of stock</option>
                </select>
              </div>
            </div>
          </div>

          <div className="main-list-form">
            <h3>How you’ll post it</h3>
            <hr />

            <div className="com-fields">
              <div className="first-field">
                <label>*Shipping options</label>
              </div>
              <div className="sec-field">
                <label>Domestic shipping</label>
                <div className="com-fiedls-post">
                  <div className="first-field">
                    <label>Service</label>
                  </div>
                  <div className="sec-field">
                    <select required name="service" value={data.service}>
                      <option>---</option>
                      <option>Test</option>
                      <option>Test</option>
                    </select>
                  </div>
                </div>

                <div className="com-fiedls-post">
                  <div className="first-field">
                    <label>Cost</label>
                  </div>
                  <div className="sec-field">
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">
                        US $
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        required
                        name="cost"
                        value={data.cost}
                        onChange={handleGet}
                      />
                    </InputGroup>
                    <div className="com-fiedls-checkbox">
                      <div className="first-field-input">
                        <Form.Check
                          type="checkbox"
                          onChange={checkboxHandler}
                          style={{ width: "22%" }}
                        />
                      </div>
                      <div className="sec-field">
                        <span>Offer another shipping service</span>
                      </div>
                    </div>
                    <div className="com-fiedls-checkbox">
                      <div className="first-field-input">
                        <Form.Check
                          type="checkbox"
                          onChange={checkboxHandler}
                          style={{ width: "22%" }}
                        />
                      </div>
                      <div className="sec-field">
                        <span>Offer local collection</span>
                      </div>
                    </div>

                    {showDestination ? (
                      <div className="showdestionaltio">
                        <div
                          className="com-fiedls-checkbox"
                          style={{ margin: "6px 0px" }}
                        >
                          <div className="first-field">
                            <label>Destination</label>
                          </div>
                          <div className="sec-field">
                            <select>
                              <option>Worldwide</option>
                              <option>Test</option>
                              <option>Test</option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <div
                          className="com-fiedls-checkbox"
                          style={{ margin: "0px 0px" }}
                        >
                          <div className="first-field">
                            <label>Service</label>
                          </div>
                          <div className="sec-field">
                            <select>
                              <option>---</option>
                              <option>
                                USPS First Class Mail Internatiol / First Class
                                Package Intematonal Service
                              </option>
                              <option>USPS Priority Mail International</option>
                              <option>
                                USPS Priority Mail International Flat Rate
                                Envelope
                              </option>
                              <option>
                                USPS Priority Mail International Small Flat Rate
                                Box
                              </option>
                              <option>
                                USPS Priority Mail International Medium Flat
                                Rate Box
                              </option>
                              <option>
                                USPS Priority Mail International Large Flat Rate
                                Box{" "}
                              </option>
                              <option>
                                USPS Priority Mail International Padded Flat
                                Rate Envelope
                              </option>
                              <option>
                                USPS Priority Mail International Flat Rate
                                Envelope
                              </option>
                              <option>
                                USPS Priority Mail International Legal Flat Rate
                                Envelope
                              </option>
                              <option>
                                USPS Priority Express International
                              </option>
                              <option>
                                USPS Priority Express International Flat Rate
                                Envelope
                              </option>
                              <option>
                                USPS Priority Express International Legal Flat
                                Rate Envelope
                              </option>
                              <option>-----</option>
                              <option>USPS Worldwide Express Plus</option>
                              <option>USPS Worldwide Express </option>
                              <option>USPS Worldwide Expedited</option>
                              <option>USPS Worldwide Saver</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>

                <Form.Check
                  type="checkbox"
                  style={{
                    width: "auto",
                    display: "flex",
                    width: "100%",
                    gap: "10px",
                  }}
                  label="Offer local collection"
                />

                {/* <div className="sec-field">
                    <span>Offer local collection</span>
                  </div> */}
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Dispatch time</label>
              </div>
              <div className="sec-field">
                <select
                  name="dispatchTime"
                  value={data.dispatchTime}
                  onChange={handleGet}
                >
                  <option>---</option>
                  <option>Same working Day</option>
                  <option>1 working Day</option>
                  <option>2 working Day</option>
                  <option>3 working Day</option>
                  <option>4 working Day</option>
                  <option>5 working Day</option>
                </select>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Item location</label>
              </div>
              <div className="sec-field">
                <lable>London, United Kingdom</lable>
                <a className="change-location">Change location</a>
              </div>
            </div>
          </div>

          <div className="main-list-form">
            <h3>Return policy</h3>
            <hr />

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Returns</label>
              </div>
              <div className="sec-field return">
                <InputGroup>
                  <Form.Check type="radio" checked name="return" />
                  <label style={{ margin: "0" }}>Returns accepted</label>
                </InputGroup>
                <br />
                <lable>
                  Within how many days after receiving the item, your buyer
                  should start return
                </lable>{" "}
                <br />
                <select style={{ margin: "10px 0px" }}>
                  <option>14 days</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
                <br />
                <label>Return shipping will be paid by</label>
                <br />
                <select>
                  <option>Buyer</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
                <br />
                <InputGroup>
                  <Form.Check type="radio" name="return" />
                  <label style={{ margin: "0" }}>Returns not accepted</label>
                </InputGroup>
              </div>
            </div>
          </div>

          <div className="list-form-btns">
            <button
              className="list-it-btn"
              onClick={handleListit}
              type="submit"
            >
              List it
            </button>
            <button className="save-btn">Save for later</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ListForm;
