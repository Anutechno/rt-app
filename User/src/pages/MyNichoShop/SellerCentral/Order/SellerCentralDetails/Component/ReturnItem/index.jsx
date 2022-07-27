import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ProductImg from "../../../../../../../assets/product-img/product.png"


const ReturnItem = ({data}) => {
  return (
        <tr>
            <td width={"25%"} className='p-0 position-relative'>
                {
                    (data?.actionStatus || data?.deadline)
                    &&
                    <ListGroupItem className='rounded-end action-status'>
                        <p className={data?.actionStatus === "Please take action by" ? 'text-danger fw-bold' : 'fw-bold'}>
                            {data?.actionStatus}
                            {
                                data?.actionStatus && data?.deadline 
                                &&':'
                            } {data?.deadline}
                        </p>
                    </ListGroupItem>
                }
                <div className={`${(data?.actionStatus || data?.deadline) && 'mt-5'} p-3`}>
                    <p><strong>Status:</strong></p>
                    <p className="mb-3">{data?.status}</p>
                    <p>Date requested: {data?.dateRequested}</p>
                    <p>Return ID: <span> {data?.returnId}</span></p>
                    <p>Order ID: <span className='text-primary'> {data?.orderId}</span></p>
                    <p>Buyer: {data?.buyer}</p>
                </div>
            </td>
            <td className='p-0'>
            {
                data?.items?.map((item, i) => (
                    <div key={i} className={`${(data?.actionStatus || data?.deadline) && 'mt-5'} item-box mb-3 p-3 pb-0`}>
                        <p><strong>Reason:</strong></p>
                        <p style={{color: '#9F2B05'}}><strong>{item?.reason}</strong></p>
                        <div className="d-flex mt-2">
                            <div className="ui-table-photo">
                                <img
                                    src={ProductImg}
                                    alt="product"
                                />
                            </div>
                            <div className="ui-table-photo-info ps-3">
                                <p>
                                    {item?.itemName}
                                </p>
                                <ul>
                                    <li>Return Quantity: {item?.quantity}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
            </td>
            <td width={"25%"}>
                <button className="btn btn-primary w-100 mt-5">See details</button>
            </td>
        </tr>
    )
}

export default ReturnItem