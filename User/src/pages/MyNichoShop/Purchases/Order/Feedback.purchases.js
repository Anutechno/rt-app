import React from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, ButtonBase, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { Box, styled } from "@mui/system";
import { green, orange, pink } from "@mui/material/colors";
import { Form } from "react-bootstrap";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ShopItem({item}) {
    return(
        <Box sx={{border: "1px solid #CBCBCB", borderRadius: "5px", mt: 2, p: 2, width: "80%"}}>
            <Box sx={{width: "100%", p: 2}}>
                <Box sx={{display: "flex"}} >
                    <Grid xs={3} sx={{m: 1}}>
                        <ButtonBase sx={{ width: 150, height: 150 }}>
                            <Img alt="Image" src={item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9} spacing={2}>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontSize : "17px", mt: 2}}>
                        EE PAY AS YOU GO 4G preparaid sim card $150.50 preloaded everything in one package
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Condition: New without Tags
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Quantity: 1 {item.quantity}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Shipping: US ${item.price}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Seller: <x style={{color: "blue"}}>Andrey</x>
                        </Typography>
                    </Grid>
                </Box>
            </Box>
            <Divider />
            <Box sx={{pt: 2}}>
                <FormControl>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="Positive">
                        <Grid container spacing={2}>
                            <Grid item >
                                <Box color={green[500]} sx={{textAlign : "center"}}>
                                <SentimentSatisfiedAltIcon />
                                </Box>
                                <Box>
                                <FormControlLabel value="Positive" control={<Radio />} label="Positive" labelPlacement="top" />
                                </Box>
                            </Grid>
                            <Grid item columns={1}>
                                <Box color={orange[500]} sx={{textAlign : "center"}}>
                                <SentimentNeutralIcon />
                                </Box>
                                <Box>
                                <FormControlLabel value="Neutral" control={<Radio />} label="Neutral" labelPlacement="top" />
                                </Box>
                            </Grid>
                            <Grid item columns={1}>
                                <Box color={pink[500]} sx={{textAlign : "center"}}>
                                <SentimentVeryDissatisfiedIcon />
                                </Box>
                                <Box>
                                <FormControlLabel value="Negative" control={<Radio />} label="Negative" labelPlacement="top" />
                                </Box>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
                <Box sx={{pt: 1, display: "flex"}}>
                    <Typography variant="subtitle1" component="div" sx={{width: "50%"}}>Item matches the seller description?</Typography>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="qize1" defaultValue="Yes">
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="right" />
                        <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="right" />
                    </RadioGroup>
                </Box>
                <Box sx={{pt: 1, display: "flex"}}>
                    <Typography variant="subtitle1" component="div" sx={{width: "50%"}}>Item arrived on time?<br />Estimated delivery Feb 22 - Feb 27</Typography>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="qize2" defaultValue="Yes">
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="right" />
                        <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="right" />
                    </RadioGroup>
                </Box>
                <Box sx={{pt: 1, display: "flex"}}>
                    <Typography variant="subtitle1" component="div" sx={{width: "50%"}}>Prompt and courteous service?<br />(If you contacted the seller)</Typography>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="qize3" defaultValue="Yes">
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="right" />
                        <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="right" />
                    </RadioGroup>
                </Box>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{marginTop: "20px"}}>
                    <Form.Label>Message to the buyer (optional)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Grid container spacing={2} sx={{width: "50%"}}>
                    <Grid item xs={6}>
                        <Button variant="contained" style={{width: "100%"}}>Leave feedback</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" style={{width : "100%"}}>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


const items = [{
                    id:1,
                    condition: "asdasdasd",
                    qty: 6,
                    image: "/assets/product-img/product.png",
                    variables:[
                        {
                            "variable_name":"variable_value"
                        }
                    ],
                    price:123,
                    currency: 123
                    
            }]

function Feedback() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <br />
                <Typography variant="h5" component="h5" >
                    Leave Seller Feedback
                </Typography>
                {
                    items.map((item => 
                        <ShopItem item={item} />
                    ))
                }
            </Container>
        </React.Fragment>
    );
}

export default Feedback;