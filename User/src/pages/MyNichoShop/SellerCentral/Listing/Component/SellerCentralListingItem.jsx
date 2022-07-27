import React from 'react'
import { Badge, Dropdown, Form } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import ProductImg from "./../../../../../assets/product-img/product.png";



export default function SellerCentralListingItem({ data, handleItemSelection, checkAll }) {
    return (
        <tr>
            <td>
                <div className="ui-table-checkbox">
                    <Form.Check type="checkbox" onChange={(e) => (handleItemSelection(e.target.checked, data.id))} />
                </div>
            </td>
            <td>
            </td>
            <td>
                <div className='d-flex align-item-center'>
                    <div className="ui-table-photo">
                        <img
                            src={data?.image}
                            alt="product"
                        />
                    </div>
                    <div className="ui-table-photo-info">
                        <p>
                            {data?.name}
                        </p>
                        <ul>
                            <li>NSLN: {data?.nsln} </li>
                            <li>
                                Size: {data?.size}, Main Color: {data?.main_color}
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style={{ width: '10%' }}>
                <div className="ui-table-listing-status">
                    <Form.Control type='number' defaultValue={data?.available} />
                </div>
            </td>
            <td>
                <div className="ui-table-listing-price">
                    <p> <span className='me-1'>US</span>${data?.price} </p>
                </div>
            </td>
            <td>
                <div className="ui-table-listing-bids">
                    <p> {data?.bids} </p>
                </div>
            </td>
            <td style={{ width: '10%' }}>
                <div className="ui-table-listing-bids">
                    <p> {data?.time_left} </p>
                </div>
            </td>
            <td>
                <div className="ui-table-action-btn">
                    <Dropdown>
                        <Dropdown.Toggle>
                            Edit
                            <MdOutlineKeyboardArrowDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Confirm shpment
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Contact buyer
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Sell similar
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Relist
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Cancel
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Issue a refund
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Report this buyer
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </td>
        </tr>
    )
}
