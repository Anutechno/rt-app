import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="purchase-footer">
      <div className="form-footer-menu">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <div className="d-flex justify-content-around">
                <Link to="">About us</Link>
                <Link to="">Safety center</Link>
                <Link to="">Policies</Link>
                <Link to="">Help & Contact</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="form-footer-copyright">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="form-footer-content">
                <p>
                  Copyright 2017 NichoShop Inc. All rights reserved.
                  <a href="#"> User agreement, Privicy</a> and
                  <a href="#"> Cookies</a>.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
