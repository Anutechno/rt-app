import React, { useState } from 'react';
import { Box, Button, ButtonBase, FormControl, Grid, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import Orderdetails from './Orderdetails';
import './cancel.scss';

const ItemData = [
    {
        product_name: "EE PAY AS YOU GO 4G preparaid sim card $150.50 preloaded everything in one package",
        product_tag: "New without tag",
        product_size: "S",
        product_color: "Blue",
        product_quantity: "1",
        id: 1
    },
    {
        product_name: "EE PAY AS YOU GO 4G preparaid sim card $150.50 preloaded everything in one package",
        product_tag: "New without tag",
        product_size: "S",
        product_color: "Blue",
        product_quantity: "1",
        id: 2
    }
]

const Cancellation = () => {
    const [age, setAge] = useState('');
    const [checked, setChecked] = useState();
    const [checkedValue, setCheckedValue] = useState(false);
    const [cancelOrder, setCancelOrder] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleCheck = (data) => {
        setChecked(data)
        setCheckedValue(!checkedValue)
    }
    const submitRqt = () => {
        setCancelOrder(true)
    }

    return (
        <Box className='cancellation-main'>
            <Typography variant='h1'>Request for cancellation</Typography>
            <Box className='order-name'>
                <Typography>Order: <span>#123456789-12345</span></Typography>
                <Typography>Ordered on: <span>22 Sep 2017</span></Typography>
                <Typography>Seller: <a href='#'>seller_username</a></Typography>
            </Box>
            {!cancelOrder ? (
                <Box sx={{ mt: 2 }} className="request-cancel" >
                    <Typography variant='h2'>{ItemData.length > 1 ? "Select the items you want to cancel" : "Item you want to cancel"}</Typography>
                    {ItemData.map((item,key) => (
                        <Box className='request-package' key={key}>
                            <Grid xs={3} sx={{ mr: 2, display: 'flex' }} >
                                {ItemData.length > 1 &&
                                    <input
                                        type="checkbox"
                                        name="addComments"
                                        style={{ width: "20px", height: "20px", marginRight: "7px" }}
                                    checked={item.id === checked && checkedValue}
                                        onChange={() => handleCheck(item.id)}
                                    />
                                }
                                <ButtonBase>
                                    <img width='100%' src='https://i.picsum.photos/id/873/180/180.jpg?hmac=oIFrgxdiLpPQ4SKy-DLRIM4K-sL1YNhMtR_asBYRbk8' />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={9} spacing={2} className="product-grid">
                                <Box>
                                    <Typography gutterBottom variant="h6" component="div" className='prepare-pack'>
                                        <a href='#'>{item.product_name}</a>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Condition:{item.product_tag}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Size: {item.product_size}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Main Color: {item.product_color}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Quantity:{item.product_quantity}
                                    </Typography>
                                </Box>
                                {item.id === checked && checkedValue &&
                                    <Box className='product-input'>
                                        <Typography>How many items do you want to cancel?</Typography>
                                        <input type='number' />
                                        <span class>/2</span>
                                    </Box>
                                }
                            </Grid>
                        </Box>
                    ))}
                    <Box className='cancel-reason'>
                        <Typography variant='h3'>Reason for cancellation</Typography>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    placeholder='Select reason for cancel'
                                >
                                    <MenuItem value={10}>Select reason for cancel</MenuItem>
                                    <MenuItem value={20}>Order created by mistake</MenuItem>
                                    <MenuItem value={30}>Item(s) would not arrive on time</MenuItem>
                                    <MenuItem value={40}>Shipping cost too high</MenuItem>
                                    <MenuItem value={30}>Item price too high</MenuItem>
                                    <MenuItem value={30}>Found cheaper somewhere else</MenuItem>
                                    <MenuItem value={30}>Need to change shipping address</MenuItem>
                                    <MenuItem value={30}>Need to change billing addresss</MenuItem>
                                    <MenuItem>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Typography className='message-request' variant='h3'>Message to seller (optional)</Typography>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Enter message"
                            style={{ width: '100%', height: '80px' }}
                        />
                        <Typography className='textarea-data'> 250 character(s) left</Typography>
                        <Box className='submit-btn'>
                            <Button className='back-btn'>Back</Button>
                            <Button className='fill-btn' onClick={() => submitRqt(true)}>Submit request</Button>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Orderdetails/>
            )}
        </Box>
    )
}

export default Cancellation;