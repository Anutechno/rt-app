import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../../../../../components/menu/Menu';
import Footer from '../../../../../../components/MyNichoShop/footer/Footer';
import { CancelItemComponent } from '../CancelItem/Component/CancelItemComponent';

const CancellationApproved = () => {
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
                                <div className="d-flex p-4">
                                    <span>29 Sep 2017</span>
                                    <div className='ps-3'>
                                        <p className='mb-2'><strong>NichoShop have canceled this order</strong></p>
                                        <p className='text-secondary'>Reason:</p>
                                        <p className='mb-2'>The seller has not shipped the items.</p>
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
                                        </ul>
                                        <Row className='justify-content-end'>
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
                                        <Row className='justify-content-center'>
                                            <Col lg="9" className='pb-4'>
                                                <div className="refund-box p-4 text-center">
                                                    <p className='mb-3'>  A refund of <span className='fw-bold'>US $1,234.56</span> was issued on 29 Sep 2017 to your:</p>
                                                    <div><svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 1.88889C0 0.845685 0.861641 0 1.92453 0H49.0755C50.1384 0 51 0.845684 51 1.88889V32.1111C51 33.1543 50.1384 34 49.0755 34H1.92453C0.861639 34 0 33.1543 0 32.1111V1.88889Z" fill="white" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0755 0.944444H1.92453C1.39309 0.944444 0.962264 1.36729 0.962264 1.88889V32.1111C0.962264 32.6327 1.39308 33.0556 1.92453 33.0556H49.0755C49.6069 33.0556 50.0377 32.6327 50.0377 32.1111V1.88889C50.0377 1.36729 49.6069 0.944444 49.0755 0.944444ZM1.92453 0C0.861641 0 0 0.845685 0 1.88889V32.1111C0 33.1543 0.861639 34 1.92453 34H49.0755C50.1384 34 51 33.1543 51 32.1111V1.88889C51 0.845684 50.1384 0 49.0755 0H1.92453Z" fill="#D9D9D9" />
                                                        <path d="M20.1777 22.1156L21.9067 12.5952H24.6081L22.9332 22.1156H20.1777Z" fill="#3C58BF" />
                                                        <path d="M20.1777 22.1156L22.3929 12.5952H24.6081L22.9332 22.1156H20.1777Z" fill="#293688" />
                                                        <path d="M32.7118 12.701C32.1715 12.4894 31.307 12.2778 30.2264 12.2778C27.525 12.2778 25.5799 13.6001 25.5799 15.5042C25.5799 16.9322 26.9307 17.6727 28.0112 18.1487C29.0918 18.6247 29.416 18.9421 29.416 19.3652C29.416 19.9999 28.5515 20.3172 27.7951 20.3172C26.7145 20.3172 26.1202 20.1586 25.2017 19.7883L24.8235 19.6297L24.4453 21.7982C25.0937 22.0626 26.2823 22.3271 27.525 22.3271C30.3885 22.3271 32.2795 21.0048 32.2795 18.995C32.2795 17.8843 31.5772 17.038 29.9563 16.3504C28.9838 15.8744 28.3894 15.61 28.3894 15.1339C28.3894 14.7108 28.8757 14.2877 29.9563 14.2877C30.8748 14.2877 31.5231 14.4464 32.0094 14.6579L32.2795 14.7637L32.7118 12.701Z" fill="#3C58BF" />
                                                        <path d="M32.7118 12.701C32.1715 12.4894 31.307 12.2778 30.2264 12.2778C27.525 12.2778 26.0662 13.6001 26.0662 15.5042C26.0662 16.9322 26.9307 17.6727 28.0112 18.1487C29.0918 18.6247 29.416 18.9421 29.416 19.3652C29.416 19.9999 28.5515 20.3172 27.7951 20.3172C26.7145 20.3172 26.1202 20.1586 25.2017 19.7883L24.8235 19.6297L24.4453 21.7982C25.0937 22.0626 26.2823 22.3271 27.525 22.3271C30.3885 22.3271 32.2795 21.0048 32.2795 18.995C32.2795 17.8843 31.5772 17.038 29.9563 16.3504C28.9838 15.8744 28.3894 15.61 28.3894 15.1339C28.3894 14.7108 28.8757 14.2877 29.9563 14.2877C30.8748 14.2877 31.5231 14.4464 32.0094 14.6579L32.2795 14.7637L32.7118 12.701Z" fill="#293688" />
                                                        <path d="M37.3593 12.5952C36.7109 12.5952 36.2247 12.6481 35.9545 13.2828L31.9023 22.1156H34.8199L35.3602 20.5289H38.8181L39.1422 22.1156H41.7356L39.4664 12.5952H37.3593ZM36.1166 18.9421C36.2787 18.4661 37.1972 16.1389 37.1972 16.1389C37.1972 16.1389 37.4133 15.5571 37.5754 15.1869L37.7375 16.086C37.7375 16.086 38.2778 18.4661 38.3858 18.995H36.1166V18.9421Z" fill="#3C58BF" />
                                                        <path d="M38.0076 12.5952C37.3593 12.5952 36.873 12.6481 36.6029 13.2828L31.9023 22.1156H34.8199L35.3602 20.5289H38.8181L39.1422 22.1156H41.7356L39.4664 12.5952H38.0076ZM36.1166 18.9421C36.3327 18.4132 37.1972 16.1389 37.1972 16.1389C37.1972 16.1389 37.4133 15.5571 37.5754 15.1869L37.7375 16.086C37.7375 16.086 38.2778 18.4661 38.3858 18.995H36.1166V18.9421Z" fill="#293688" />
                                                        <path d="M15.2065 19.2593L14.9363 17.8841C14.4501 16.2974 12.8832 14.552 11.1543 13.7058L13.5856 22.1683H16.5032L20.8795 12.6479H17.962L15.2065 19.2593Z" fill="#3C58BF" />
                                                        <path d="M15.2065 19.2593L14.9363 17.8841C14.4501 16.2974 12.8832 14.552 11.1543 13.7058L13.5856 22.1683H16.5032L20.8795 12.6479H18.5023L15.2065 19.2593Z" fill="#293688" />
                                                        <path d="M7.69727 12.5952L8.18353 12.701C11.6414 13.4944 14.0187 15.5042 14.9372 17.8843L13.9646 13.3886C13.8026 12.7539 13.3163 12.5952 12.722 12.5952H7.69727Z" fill="#FFBC00" />
                                                        <path d="M7.69727 12.5952C11.1551 13.3886 14.0187 15.4513 14.9372 17.8314L14.0187 14.0762C13.8566 13.4415 13.3163 13.0712 12.722 13.0712L7.69727 12.5952Z" fill="#F7981D" />
                                                        <path d="M7.69727 12.5952C11.1551 13.3886 14.0187 15.4513 14.9372 17.8314L14.2888 15.7687C14.1267 15.134 13.9106 14.4993 13.1542 14.2348L7.69727 12.5952Z" fill="#ED7C00" />
                                                        <path d="M17.9086 18.9419L16.0716 17.1436L15.2071 19.1535L14.991 17.8312C14.5048 16.2445 12.9379 14.4991 11.209 13.6528L13.6403 22.1154H16.5579L17.9086 18.9419ZM22.9333 22.1154L20.6101 19.7882L20.1778 22.1154H22.9333ZM29.1467 18.8361C29.3628 19.0477 29.4708 19.2064 29.4168 19.4179C29.4168 20.0526 28.5524 20.37 27.7959 20.37C26.7154 20.37 26.121 20.2113 25.2025 19.8411L24.8243 19.6824L24.4461 21.8509C25.0945 22.1154 26.2831 22.3798 27.5258 22.3798C29.2547 22.3798 30.6595 21.9038 31.4699 21.0576L29.1467 18.8361ZM32.2804 22.1154H34.8197L35.36 20.5286H38.8179L39.1421 22.1154H41.7355L40.817 18.2543L37.5752 15.1867L37.7373 16.0329C37.7373 16.0329 38.2776 18.413 38.3857 18.9419H36.1164C36.3326 18.413 37.197 16.1387 37.197 16.1387C37.197 16.1387 37.4131 15.5569 37.5752 15.1867" fill="#051244" />
                                                    </svg>
                                                    <span className='ps-3 fw-bold'>Visa xxxx - 1234</span>
                                                    </div>
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


export default CancellationApproved;