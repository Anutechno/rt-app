import React, { useEffect, useState } from 'react'
import ProductImg from "../../../../../../../assets/product-img/product.png";
import { Form } from 'react-bootstrap'



export const CancelItemComponent = ({ checkbox, isChecked, qty, onCheckChange, availableQuantity, isError, onChangeQty }) => {

    const handleToggle = () => {
        onCheckChange();
    }

    return (
        <div className="d-flex p-4">
            {checkbox &&
                <Form.Check className='me-2' type="checkbox" checked={isChecked} onClick={handleToggle} />}
            <div className="ui-table-photo">
                <img
                    src={ProductImg}
                    alt="product"
                />
            </div>
            <div className="ui-table-photo-info ps-3">
                <p>
                    Norton Security Deluxe 2016
                    - 1Year / 3 Devices
                    (Windows, Max OS, Android
                    and IOS)
                </p>
                <ul className='mb-0'>
                    <li>NSLN: 123456789012</li>
                    <li>
                        Condition: New without tag
                    </li>
                    {isChecked && <li>
                        How many items do you want to cancel?
                    </li>}
                    <li>{isChecked === true ? <div className="d-flex align-items-center"><input style={isError
                        ?
                        { border: "1px solid red" }
                        : {}
                    } onChange={onChangeQty} value={qty} className="form-control w-25" type="number" /> <span className='ps-2'> / {availableQuantity}</span></div> : `Quantity: ${availableQuantity}`}</li>
                    {isError && <li className={isError ? "text-danger" : ""}>
                        Invalid quantity
                    </li>}
                </ul>
            </div>
        </div>
    )
}
