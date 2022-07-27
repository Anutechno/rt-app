import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from "react-select";
import ProductImg from "../../../../../../assets/product-img/product.png";
import Menu from '../../../../../../components/menu/Menu';
import Footer from '../../../../../../components/MyNichoShop/footer/Footer';
import { CancelItemComponent } from './Component/CancelItemComponent';

const CancelItem = () => {

    const [items, setItems] = React.useState([
        {
            id: 1,
            isChecked: false,
            isError: false,
            availableQuantity: 2,
            qty: 0
        },
        {
            id: 2,
            isChecked: false,
            isError: false,
            availableQuantity: 2,
            qty: 0
        },
        {
            id: 3,
            isChecked: false,
            isError: false,
            availableQuantity: 2,
            qty: 0
        },
    ])

    const detailsOptionHandler = [
        {
            value: "1",
            label: "Select reason for cancel",
        },
        {
            value: "2",
            label: "The item is out of stock",
        },
        {
            value: "3",
            label: "The buyer asked to cancel the order",
        },
        {
            value: "4",
            label: "There’s an isue with the buyer’s address",
        },
        {
            value: "5",
            label: "I can’t fullfill order for anotherreason",
        },
    ];

    const handleCheckChange = (id) => {
        const updatedItems = items.map(item => {
            return item.id === id ? { ...item, isChecked: !item.isChecked } : item
        })

        setItems(updatedItems)
    }

    const handleChangeQty = (id, value) => {
        const updatedItems = items.map(item => {
            return item.id === id ? { ...item, qty: value, isError: false } : item
        })

        setItems(updatedItems)
    }

    const handleCancelSubmit = () => {
        const checkedItems = items.map((item) => {
            if (item.isChecked && Number(item.qty) === 0) {
                return {
                    ...item,
                    isError: true
                }
            }

            if (item.isChecked && Number(item.qty) > Number(item.availableQuantity)) {
                return {
                    ...item,
                    isError: true
                }
            }

            return item
        })

        setItems(checkedItems)
    }


    return (
        <>
            <Menu />
            <div className="ui-scd-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-scd-head">
                                <h4>Cancel items</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col lg={9}>
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
                                <div className="ui-scd-tb-head">
                                    <h4 className='text-dark'>Select the items you want to cancel</h4>
                                </div>
                                {items.map((item) => {
                                    return <CancelItemComponent checkbox onChangeQty={(e) => handleChangeQty(item.id, e.target.value)} onCheckChange={() => handleCheckChange(item.id)} key={item.id} {...item} />
                                })}
                                <div className="p-4 b-t-1">
                                    <Row>
                                        <Col lg="8">
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-bold">Reason for cancellation</Form.Label>
                                                <Select options={detailsOptionHandler} />
                                            </Form.Group>
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
                                                <button onClick={handleCancelSubmit} className='w-100'>Cancel selected items </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}


export default CancelItem;