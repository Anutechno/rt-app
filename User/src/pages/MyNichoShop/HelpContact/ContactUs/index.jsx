import { Link } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./contactus.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactUs = () => {
    /**
     * @description store select button content
     */

    const [getSelecButtonContent, setSelectButtonContent] = useState([
        {
            id: uuidv4(),
            name: "Buying",
        },
        {
            id: uuidv4(),
            name: "Selling",
        },
        {
            id: uuidv4(),
            name: "Account",
        },
    ]);

    const selectBtnHandler = (i) => {
        console.log(i);
        const selected = getSelecButtonContent.filter((item) => {
            if (item.id === i) {
                if (!item?.isButtonSelect) {
                    item.isButtonSelect = true;
                } else {
                    item.isButtonSelect = false;
                }
            }
            return item;
        });
        setSelectButtonContent(selected);
    };
    return (
        <>
            <Menu />
            <div className="ui-contact-us">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <div className="ui-breadcrumb-box">
                                <ul>
                                    <li>
                                        <Link to="/">My NichoShop</Link>
                                    </li>
                                    <li>
                                        <IoIosArrowForward />
                                    </li>
                                    <li>Help and contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ui-contact-us-content">
                                <h2>Contact us</h2>
                                <div className="ui-cuc-box">
                                    <p>
                                        What can we help you with today? Please
                                        select one
                                    </p>
                                    <div className="ui-cuc-btn-select">
                                        {getSelecButtonContent.map(
                                            (item, index) => {
                                                return (
                                                    <button
                                                        className={
                                                            item?.isButtonSelect
                                                                ? "btn selected"
                                                                : "btn"
                                                        }
                                                        key={index}
                                                        onClick={() => {
                                                            selectBtnHandler(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        {item.name}
                                                    </button>
                                                );
                                            }
                                        )}
                                    </div>
                                    <p>Select the topic you need help with.</p>
                                    <select className="form-select">
                                        <option selected>
                                            Please make a selection
                                        </option>
                                        <option>Create a listing</option>
                                        <option>
                                            Getting paid for items you've solid
                                        </option>
                                        <option>
                                            Payment holds on your solid items
                                        </option>
                                        <option>Shipping your items</option>
                                        <option>
                                            How to handle a return request
                                        </option>
                                        <option>
                                            Help a buyer with an item they
                                            didn't receive
                                        </option>
                                        <option>
                                            Appeal NichoShop decision about a
                                            return or missing item
                                        </option>
                                        <option>Appeal a defect</option>
                                        <option>Cancel a transaction</option>
                                    </select>
                                </div>
                            </div>
                            <div className="ui-cu-help-option mt-4">
                                <p>
                                    What can we help you with today? Please
                                    select one
                                </p>
                                <div className="ui-cu-help-option-content">
                                    <div>
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 50 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M47.917 14.583V2.08301H35.417"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M33.333 16.6663L47.9163 2.08301"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M45.833 35.2505V41.5005C45.8353 42.0807 45.7165 42.6551 45.4841 43.1867C45.2516 43.7183 44.9107 44.1955 44.4832 44.5878C44.0556 44.98 43.5509 45.2786 43.0012 45.4645C42.4516 45.6504 41.8692 45.7194 41.2913 45.6672C34.8806 44.9706 28.7226 42.78 23.3122 39.2714C18.2785 36.0727 14.0108 31.8051 10.8122 26.7714C7.29128 21.3364 5.10016 15.1484 4.41632 8.70886C4.36426 8.13275 4.43273 7.55211 4.61737 7.00391C4.802 6.45571 5.09876 5.95196 5.48875 5.52474C5.87874 5.09751 6.35342 4.75617 6.88256 4.52245C7.41169 4.28872 7.9837 4.16774 8.56216 4.16719H14.8122C15.8232 4.15724 16.8034 4.51527 17.57 5.17455C18.3366 5.83383 18.8373 6.74937 18.9788 7.75053C19.2426 9.75067 19.7318 11.7145 20.4372 13.6047C20.7175 14.3504 20.7781 15.1608 20.612 15.9399C20.4458 16.719 20.0598 17.4341 19.4997 18.0005L16.8538 20.6464C19.8196 25.8621 24.1381 30.1806 29.3538 33.1464L31.9997 30.5005C32.5661 29.9404 33.2812 29.5544 34.0603 29.3882C34.8394 29.2221 35.6498 29.2827 36.3955 29.563C38.2856 30.2683 40.2495 30.7576 42.2497 31.0214C43.2617 31.1641 44.1859 31.6739 44.8466 32.4536C45.5073 33.2334 45.8583 34.2288 45.833 35.2505Z"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <h4>Call us</h4>
                                        <p>
                                            Estimated waiting time: <br />
                                            <b>1 minute</b>
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 50 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M33.333 4.16699V16.667H45.833"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M47.9163 2.08301L33.333 16.6663"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M45.833 35.2505V41.5005C45.8353 42.0807 45.7165 42.655 45.4841 43.1867C45.2516 43.7183 44.9107 44.1955 44.4832 44.5877C44.0556 44.98 43.5509 45.2786 43.0012 45.4645C42.4516 45.6504 41.8692 45.7194 41.2913 45.6672C34.8806 44.9706 28.7226 42.78 23.3122 39.2714C18.2785 36.0727 14.0108 31.8051 10.8122 26.7714C7.29128 21.3364 5.10016 15.1484 4.41632 8.70886C4.36426 8.13275 4.43273 7.55211 4.61737 7.00391C4.802 6.45571 5.09876 5.95196 5.48875 5.52474C5.87874 5.09751 6.35342 4.75617 6.88256 4.52245C7.41169 4.28872 7.9837 4.16774 8.56216 4.16719H14.8122C15.8232 4.15724 16.8034 4.51527 17.57 5.17455C18.3366 5.83383 18.8373 6.74937 18.9788 7.75053C19.2426 9.75067 19.7318 11.7145 20.4372 13.6047C20.7175 14.3504 20.7781 15.1608 20.612 15.9399C20.4458 16.719 20.0598 17.4341 19.4997 18.0005L16.8538 20.6464C19.8196 25.8621 24.1381 30.1806 29.3538 33.1464L31.9997 30.5005C32.5661 29.9404 33.2812 29.5544 34.0603 29.3882C34.8394 29.2221 35.6498 29.2827 36.3955 29.563C38.2856 30.2683 40.2495 30.7576 42.2497 31.0214C43.2617 31.1641 44.1859 31.6739 44.8466 32.4536C45.5073 33.2334 45.8583 34.2288 45.833 35.2505Z"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <h4>Have us call you</h4>
                                        <p>
                                            Estimated waiting time: <br />
                                            <b>42 minute</b>
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            width="51"
                                            height="50"
                                            viewBox="0 0 51 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.3846 29.2083C15.378 31.9581 15.971 34.6706 17.1154 37.125C18.4722 40.0661 20.5582 42.5399 23.1395 44.2693C25.7209 45.9987 28.6957 46.9154 31.7308 46.9167C34.269 46.9238 36.7729 46.2814 39.0385 45.0417L50 49L46.3462 37.125C47.4905 34.6706 48.0835 31.9581 48.0769 29.2083C48.0757 25.9203 47.2296 22.6976 45.6332 19.9012C44.0369 17.1047 41.7534 14.8449 39.0385 13.375C36.7729 12.1353 34.269 11.4928 31.7308 11.5H30.7692C26.7609 11.7396 22.9749 13.5724 20.1363 16.6476C17.2976 19.7228 15.6058 23.8243 15.3846 28.1667V29.2083Z"
                                                fill="white"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M36.5382 18.7917C36.5449 21.5414 35.9518 24.2539 34.8075 26.7083C33.4506 29.6495 31.3647 32.1233 28.7833 33.8527C26.202 35.5821 23.2272 36.4987 20.1921 36.5C17.6539 36.5072 15.15 35.8647 12.8844 34.625L1.92285 38.5833L5.5767 26.7083C4.43233 24.2539 3.83931 21.5414 3.84593 18.7917C3.8471 15.5037 4.69326 12.281 6.28962 9.4845C7.88598 6.68804 10.1695 4.42829 12.8844 2.95836C15.15 1.71863 17.6539 1.07619 20.1921 1.08336H21.1536C25.162 1.32292 28.9479 3.15578 31.7866 6.23098C34.6252 9.30618 36.3171 13.4076 36.5382 17.75V18.7917Z"
                                                fill="white"
                                                stroke="#0072BC"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <h4>Chat</h4>
                                        <p>
                                            Estimated waiting time: <br />
                                            <b>4 minute</b>
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            width="48"
                                            height="32"
                                            viewBox="0 0 48 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M45.5383 0H2.46159C1.10765 0 0 1.10765 0 2.46149V29.5384C0 30.8922 1.10765 32 2.46159 32H45.5384C46.8922 32 48 30.8923 48 29.5384V2.46149C47.9999 1.10765 46.8923 0 45.5383 0ZM44.6146 1.84603L25.416 16.2462C25.0708 16.5089 24.5409 16.6732 23.9999 16.6708C23.4589 16.6732 22.9291 16.5089 22.5839 16.2462L3.38521 1.84603H44.6146ZM34.3593 17.1963L44.8209 30.1195C44.8314 30.1324 44.8442 30.1423 44.8554 30.154H3.14456C3.15562 30.1417 3.16856 30.1324 3.17906 30.1195L13.6406 17.1963C13.9611 16.8001 13.9004 16.2191 13.5033 15.8978C13.1071 15.5773 12.5261 15.638 12.2055 16.0344L1.84612 28.8314V2.9999L21.4768 17.7229C22.2147 18.2725 23.1124 18.5144 23.9998 18.5168C24.8859 18.5149 25.7844 18.2731 26.5228 17.7229L46.1534 2.9999V28.8312L35.7943 16.0344C35.4737 15.6381 34.8922 15.5772 34.4965 15.8978C34.0995 16.2183 34.0386 16.8001 34.3593 17.1963Z"
                                                fill="#0072BC"
                                            />
                                        </svg>
                                        <h4>Email</h4>
                                        <p>
                                            Estimated waiting time: <br />
                                            <b>4 minute</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ChatRating /> */}
            {/* <CloseChat /> */}
            <Footer />
        </>
    );
};

export default ContactUs;
