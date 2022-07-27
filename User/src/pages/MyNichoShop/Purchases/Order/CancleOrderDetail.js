import React from 'react';
import visa from '../../../../assets/cancelled-img/Visa.png';
import { Box, Typography } from '@mui/material';
import Menu from '../../../../components/menu/Menu';
import Footer from '../../../../components/MyNichoShop/footer/Footer';
import { useSelector } from "react-redux";
import Notification from '../../../../components/notification/Notification';
import '../PurchasesCancelledOrder/cancel.scss';

const OrderData = [
    {
        item_date: "29 Sep 2017",
        item_title: "The seller accepted your request for cancellation",
        comment_title: "Comment:",
        item_comment: "Example of the seller’s comment"
    },
    {
        item_date: "29 Sep 2017",
        item_title: "You opened a request for cancellation",
        comment_title: "Comment:",
        item_comment: "Example of the buyer’s comment",
        reason_title: "Reason:",
        item_reason: "Order created by mistake",
    },
]
const PackageData = [
    {
        package_data: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 for calls, everything in one package",
        condition_title: "New without tag",
        quantity_title: "2",
    },
    {
        package_data: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 for calls, everything in one package",
        condition_title: "New without tag",
        size_title: "Size:",
        product_size: "S",
        color_title: "Main Color:",
        product_color: "Blue",
        quantity_title: "2",
    },
]

const CancleOrderDetail = () => {
    const showNotif = useSelector((state) => state.showNotif);

    return (
        <>
            <Menu />
            {showNotif ? (
                <Notification
                    color="green"
                    title="aaaaa"
                    description="adadadadad"
                />
            ) : null}
            <Box className='cancellation-main'>
                <Typography variant='h1'>Cancelled order</Typography>
                <Box className='order-name'>
                    <Typography>Order: <span>#123456789-12345</span></Typography>
                    <Typography>Ordered on: <span>22 Sep 2017</span></Typography>
                    <Typography>Seller: <a href='#'>seller_username</a></Typography>
                </Box>
                <Box className='cancellation_box'>
                    <Box className='box_content2'>
                        {
                            OrderData.map((dataDetail, key) => (
                                <Box className='box_content' key={key}>
                                    <Box className='date'>
                                        <Typography className="date_text">{dataDetail.item_date}</Typography>
                                    </Box>
                                    <Box className='cancellation_request'>
                                        <Typography className="part_two">{dataDetail.item_title}</Typography>
                                        <Box className='Reason'>
                                            <Typography className="request_title">{dataDetail.reason_title}
                                                <Typography className="request_text">{dataDetail.item_reason}</Typography>
                                            </Typography>
                                        </Box>
                                        <Box className='Comment'>
                                            <Typography className="request_title">{dataDetail.comment_title}
                                                <Typography className="request_text">{dataDetail.item_comment}</Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box className='Cancellation_details'>
                        <Box className='details_title'>
                            <Typography className="details_heading">Cancellation details</Typography>
                        </Box>
                    </Box>
                    <Box className='package_parent'>
                        <Box className='package_detailsMain'>
                            {
                                PackageData.map((packageDetail, key) => (
                                    <Box className='package_detelis' key={key}>
                                        <Box className='package_box'>
                                            <img width='100%' src='https://i.picsum.photos/id/873/180/180.jpg?hmac=oIFrgxdiLpPQ4SKy-DLRIM4K-sL1YNhMtR_asBYRbk8' />
                                        </Box>
                                        <Box className='package_content'>
                                            <Typography className="content_one">{packageDetail.package_data}</Typography>
                                            <Box className='content_two'>
                                                <Typography className="Condition_text">
                                                    Condition: {packageDetail.condition_title}
                                                </Typography>
                                                <Typography className="Condition_text">{packageDetail.size_title}{packageDetail.product_size}</Typography>
                                                <Typography className="Condition_text">{packageDetail.color_title}{packageDetail.product_color}</Typography>
                                                <Typography className="Condition_text">
                                                    Quantity:{packageDetail.quantity_title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box className='total'>
                            <Box className='total_list'>
                                <Box className='subtotal'>
                                    <Box className='item'>
                                        <Typography className="product">Subtotal (4 items):</Typography>
                                        <Typography className="price">US $1,234.56</Typography>
                                    </Box>
                                </Box>
                                <Box className='shipping_cost'>
                                    <Box className='item'>
                                        <Typography className="product">Shipping cost:</Typography>
                                        <Typography className="price">US $123.45</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='refund'>
                                <Box className='item'>
                                    <Typography className="total_text">Refunded total:</Typography>
                                    <Typography className="total_price">US $1, 234.56</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='card_details'>
                            <Box className='details_content'>
                                <Typography className="card_text">A refund of <span className="price_text">US $1,234.56</span> was issued on 29 Sep 2017 to your:</Typography>
                                <Box className='visa_img'>
                                    <img src={visa} alt="" />
                                    <Typography className="card_number">Visa xxxx - 1234</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='cancellation-foot'>
                <Footer />
            </Box>
        </>
    )
}

export default CancleOrderDetail