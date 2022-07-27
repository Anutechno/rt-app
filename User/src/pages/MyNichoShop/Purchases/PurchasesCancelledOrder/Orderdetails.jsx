import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Typography, Modal } from '@mui/material';
import './cancel.scss';

const OrderData = [
    {
        item_date: "29 Sep 2017",
        item_title: "You opened an order cancellation request",
        comment_title: "Comment:",
        item_comment: "Example of the buyer’s comment",
        reason_title: "Reason:",
        item_reason: "Order created by mistake",
    },
    {
        item_date: "29 Sep 2017",
        item_title: "You opened an order cancellation request",
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
        quantity_title: "1",
    }
]

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, 
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const Orderdetails = () => {
  const [open, setOpen] = useState(false);

  return (
   <>
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
                              <Typography className="total_text">Expected refund:</Typography>
                              <Typography className="total_price">US $1, 234.56</Typography>
                          </Box>
                      </Box>
                  </Box>
              </Box>
              <Box className='product-sub-btn'>
                <Box className='submit-btn product-btn'>
                    <Button className='back-btn'>Back</Button>
                    <Button className='fill-btn' onClick={() => setOpen(1)}>Submit request</Button>
                </Box>
              </Box>
              <Modal
                  onClose={() => setOpen(false)}
                  open={open === 1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                  <Box sx={modalStyle} className="model-1">
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                          <span>Delete confirmation</span>
                          <button onClick={() => setOpen(false)}><CloseIcon /></button>
                      </Typography>
                      <hr />
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Are you sure you want to delete/close this cancellation request?
                      </Typography>
                      <Box className="model-btn">
                          <button onClick={() => setOpen(false)}>Cancel</button>
                          <button onClick={() => setOpen(2)}>Confirm</button>
                      </Box>
                  </Box>
              </Modal>
              <Modal
                  onClose={() => setOpen(false)}
                  open={open === 2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                  <Box sx={modalStyle} className="model-2">
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                          <CheckIcon /><span>Successfully deleted</span>
                      </Typography>
                  </Box>
              </Modal>
          </Box>
   </>
  )
}

export default Orderdetails