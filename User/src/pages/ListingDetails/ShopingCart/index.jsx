import { Card, Col, Container, Row } from "react-bootstrap";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import CartSummary from "./Components/CartSummary/CartSummary";
import DeletedCard from "./Components/DeletedCard/DeletedCard";
import ProductCard from "./Components/ProductCard/ProductCard";
import ShopingAlert from "./Components/ShopingAlert/ShopingAlert";
import "./shopingcart.scss";

const ShopingCart = () => {
    return (
        <>
            <Menu />
            <div className="ui-shoping-cart-box">
                <Container>
                    <Row>
                        <Col lg={9}>
                            <ShopingAlert />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <div className="ui-sc-content mt-3">
                                <h4>Shopping cart</h4>
                            </div>
                            <div className="ui-sc-cart">
                                <Card>
                                    <Card.Header>
                                        <p>
                                            Sold by:{" "}
                                            <a href="#">seller_username</a>
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="ui-sc-cart-product">
                                        <ProductCard />
                                        <ProductCard />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <p>
                                            Sold by:{" "}
                                            <a href="#">seller_username</a>
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="ui-sc-cart-product">
                                        <ProductCard />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <p>
                                            Sold by:{" "}
                                            <a href="#">seller_username</a>
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="ui-sc-cart-product">
                                        <ProductCard />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="ui-sc-content">
                                <h4>Saved for later (123 items)</h4>
                            </div>
                            <div className="ui-sc-cart">
                                <Card>
                                    <Card.Header>
                                        <p>
                                            Sold by:{" "}
                                            <a href="#">seller_username</a>
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="ui-sc-cart-product">
                                        <ProductCard />
                                    </Card.Body>
                                </Card>
                                <DeletedCard />
                                <DeletedCard />
                                <Card>
                                    <Card.Header>
                                        <p>
                                            Sold by:{" "}
                                            <a href="#">seller_username</a>
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="ui-sc-cart-product">
                                        <ProductCard />
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="ui-shoping-cart-total">
                                <CartSummary />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default ShopingCart;
