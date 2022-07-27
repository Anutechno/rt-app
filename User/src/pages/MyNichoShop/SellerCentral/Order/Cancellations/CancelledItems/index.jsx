import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../../../../../components/menu/Menu';
import Footer from '../../../../../../components/MyNichoShop/footer/Footer';
import { CancelItemComponent } from '../CancelItem/Component/CancelItemComponent';

const CancelledItems = () => {
    return (
        <>
            <Menu />
            <div className="ui-scd-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-scd-head">
                                <h4>Cancelled order</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col>
                            <div className="ui-scd-head-order-info">
                                <ul>
                                    <li>
                                        <span>Order:</span> # 123456789-12345
                                    </li>
                                    <li>
                                        <span>Ordered on:</span> 22 Sep 2017
                                    </li>
                                    <li>
                                        <span>Buyer: </span>
                                        <Link to="/">buyer_username</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="ui-scd-table-box">
                                <div className="d-flex p-4 gx-4">
                                    <span>29 Sep 2017</span>
                                    <div className='ps-3'>
                                        <p className='mb-2'><strong>You cancelled this order</strong></p>
                                        <p className='text-secondary'>Reason:</p>
                                        <p className='mb-2'>The item out of stock</p>
                                        <p className='text-secondary'>Comment:</p>
                                        <p>Example of the seller’s comment</p>
                                    </div>
                                </div>
                                <div className='sub-heading-bar'>
                                    <h5 className='ps-4 mb-0 py-2'>Cancellation details</h5>
                                </div>
                                <Row className='justify-content-center'>
                                    <Col lg="8">
                                        <ul className='brdr-b mb-0'>
                                            <li>
                                                <CancelItemComponent availableQuantity={"1"} />
                                            </li>
                                            <li>
                                                <CancelItemComponent availableQuantity={"2"} />
                                            </li>
                                        </ul>
                                        <Row className='justify-content-end brdr-bb'>
                                            <Col lg="5" className='py-4'>
                                                <div className='d-flex justify-content-between'>
                                                    <span className='text-secondary'>Subtotal (4 items):</span>
                                                    <span><strong> US $1,234.56</strong></span>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <span className='text-secondary'>Shipping cost:</span>
                                                    <span><strong>US $123.45</strong></span>
                                                </div>
                                                <div className='pt-3 mt-3 brdr-t'>
                                                    <div className='d-flex justify-content-between'>
                                                        <span><strong>Expected refund:</strong></span>
                                                        <span><strong>US $123.45</strong></span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="8" className='py-4'>
                                                <div className='pb-3'>
                                                    <Form.Label className="fw-bold">You canceled this order</Form.Label>
                                                    <div>
                                                        <Form.Check
                                                            type='radio'
                                                            inline
                                                            label="Yes, I agree to cancel this order"
                                                            name="group1"
                                                            id="yes"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Form.Check
                                                            type='radio'
                                                            inline
                                                            label="No, I can’t cancel this order"
                                                            name="group1"
                                                            id="no"
                                                        />
                                                    </div>
                                                </div>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label className="fw-bold">Message to the buyer (optional)</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                    <p className='text-end fs-14'>250 character(s) left</p>
                                                </Form.Group>
                                                <div className="ui-cs-btn d-flex">
                                                    <button className='w-100'
                                                    >
                                                        Back
                                                    </button>
                                                    <button className='w-100'>Submit</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}


export default CancelledItems;