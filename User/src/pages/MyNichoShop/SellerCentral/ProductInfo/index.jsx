import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
// import ProductImg from "./../../../assets/product-img/product-img-01.png";
import ReactImageMagnify from "react-image-magnify";

const ProductInfo = () => {
    const leftImg = useRef();
    const [getSelectedImg, setSelectedImg] = useState([]);
    const [getAllProduct, setGetAllProduct] = useState([
        {
            id: 1,
            img: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            img: "https://picsum.photos/200/400",
        },
        {
            id: 3,
            img: "https://picsum.photos/200/500",
        },
        {
            id: 4,
            img: "https://picsum.photos/200/600",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/700",
        },
        {
            id: 6,
            img: "https://picsum.photos/200/800",
        },
    ]);

    const selectImgHandler = (i) => {
        getAllProduct.filter((item) => {
            return item.id === i ? setSelectedImg([item]) : null;
        });
    };
    return (
        <>
            <Menu />
            <Container>
                <Row>
                    <Col>
                        <div class="ui-bread-crumb">
                            <a href="/">My NichoShop</a>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                            </svg>
                            <a href="/">Sub-category</a>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                            </svg>
                            <span>
                                Canon EOS 5D Mark 3 Digital SLR Camera Body (MK
                                3DSLR) *NEW* + *3Year Warranty’
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="ui-pi-time">
                            <p>
                                The buyer buyer_username bought this item on 22
                                Jun 2018 12:34 GMT
                            </p>
                            <Link to="/">View order details</Link>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center my-5">
                    <Col lg={5}>
                        <div className="ui-pi-img-box">
                            <div ref={leftImg} className="ui-pi-left-img">
                                {getAllProduct.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={item.img}
                                            alt="product"
                                            onClick={() => {
                                                selectImgHandler(item.id);
                                            }}
                                        />
                                    );
                                })}
                            </div>
                            <div className="ui-pi-right-img">
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: "Wristwatch by Ted Baker London",
                                            isFluidWidth: true,
                                            src:
                                                getSelectedImg.length !== 0
                                                    ? getSelectedImg[0].img
                                                    : getAllProduct[0].img,
                                        },
                                        largeImage: {
                                            src:
                                                getSelectedImg.length !== 0
                                                    ? getSelectedImg[0].img
                                                    : getAllProduct[0].img,
                                            width: 1200,
                                            height: 1800,
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <p className="ui-pi-zoom-txt">
                            Roll over image to zoom in
                        </p>
                    </Col>
                    <Col lg={7}>
                        <div className="ui-pi-right-content">
                            <h2>
                                Canon EOS 5D Mark 3 Digital SLR Camera Body (MK
                                3DSLR) *NEW* + *3Year Warranty’
                            </h2>
                            <ul>
                                <li>Condition:</li>
                                <li>Used</li>
                            </ul>
                            <ul>
                                <li>Item price:</li>
                                <li>US $123.45</li>
                            </ul>
                            <ul>
                                <li>Color:</li>
                                <li>Blue</li>
                            </ul>
                            <ul>
                                <li>Model:</li>
                                <li>Slim</li>
                            </ul>
                            <ul>
                                <li>Material:</li>
                                <li>Cotton</li>
                            </ul>
                            <ul>
                                <li>Quantity:</li>
                                <li>2</li>
                            </ul>
                            <ul>
                                <li>Quantity:</li>
                                <li>2</li>
                            </ul>
                            <ul>
                                <li>Shipping:</li>
                                <li>
                                    <h4>
                                        Free Economy Int’l Delivery to United
                                        Kingdom
                                    </h4>
                                    <p>
                                        Item location: Hamtramck, Michigan,
                                        United States
                                    </p>
                                    <p>
                                        Ship to: united Kingdom and many other
                                        countries
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>Delivery:</li>
                                <li>
                                    Estimated between Sat. Apr. 18 and Wed. May
                                    6
                                </li>
                            </ul>
                            <ul>
                                <li>Returns:</li>
                                <li>
                                    You do not accept returns or echanges, but
                                    the item is covered by the{" "}
                                    <a href="#">NichoShop Protection</a> if it
                                    does not match the listing description.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="border-bottom border-top mx-0 py-5">
                    <Col lg={6}>
                        <div className="ui-pi-item-cat">
                            <p>Item specifics</p>
                            <ul>
                                <li>Condition:</li>
                                <li>
                                    New: A brand-new, unused, unopened,
                                    undamaged item in its owiginal packaging
                                    (where packaging is applicable).
                                    Packaging... <a href="#">Reading more</a>
                                </li>
                            </ul>
                            <ul>
                                <li>Platform:</li>
                                <li>Windows</li>
                            </ul>
                            <ul>
                                <li>Format:</li>
                                <li>Download</li>
                            </ul>
                            <ul>
                                <li>EAT:</li>
                                <li>1234567890</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ui-pi-item-cat mt-5">
                            <ul>
                                <li>Brand:</li>
                                <li>Symantec</li>
                            </ul>
                            <ul>
                                <li>Type:</li>
                                <li>
                                    Anti-Spyware, Antivitus/Internet Security,
                                    Firewall Software
                                </li>
                            </ul>
                            <ul>
                                <li>MPN:</li>
                                <li>1234567890</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6}>
                        <div className="ui-pi-item-des">
                            <h4>Item description</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum. Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ui-pi-item-des mt-4">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum. Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ProductInfo;
