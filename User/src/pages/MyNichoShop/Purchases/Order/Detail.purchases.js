import React, { useState } from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, ButtonBase, CssBaseline, Dialog, DialogTitle, Divider, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { red, blue, grey, green } from "@mui/material/colors";
import { Dropdown } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function SimpleDialog(props) {
    const { onClose, open, detailHistory } = props;
  
    const handleClose = () => {
      onClose();
    };
  
    const handleListItemClick = () => {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <Box>
            <Typography gutterBottom variant="subtitle1" component="h6" height={30}>
           {detailHistory.created} the seller has issued a refund in the amount of US ${detailHistory.price} to buyer_username for the following items:
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
                item: {detailHistory.info}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
                Quantity: {detailHistory.quantity}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
                Item refund : US ${detailHistory.refund}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
            Outbound shipping refund: US ${detailHistory.shippingrefund}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
            Other refund: US ${detailHistory.otherrefund}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
            Refund reason: {detailHistory.reason}
            </Typography>
        </Box>
      </Dialog>
    );
}

function progress({active, text}){
    return (
        <div style={{textAlign: "center"}}>
            {active == 0? 
                <div style={{position: "relative", width: "100px", height: "10px", backgroundColor : "#E2E2E2"}}>
                </div>:
                <div style={{position: "relative", width: "100px", height: "10px", backgroundColor : "#2AAC27"}}>
                    <div style={{position: "absolute", bottom:"-16px", left : "40px", width : 0, height : 0, borderColor: "#2AAC27 transparent transparent transparent", borderWidth: "8px", borderStyle: "solid"}}></div>
                </div>
            }
            <div style={{marginTop: "10px"}}>

            </div>
            {text}
        </div>
        
    )
}

function Workflow({length}) {
    return (
        <div style={{display: "flow"}}>
            {length > 0 ? <progress active={1} text="ACCEPTED" /> : <progress active={0} text="ACCEPTED" />}
            {length > 0 ? <progress active={1} text="IN TRANSIT" /> : <progress active={0} text="IN TRANSIT" />}
            {length > 0 ? <progress active={1} text="OUT FOR DELIVERY" /> : <progress active={0} text="OUT FOR DELIVERY" />}
            {length > 0 ? <progress active={1} text="DELIVERED" /> : <progress active={0} text="DELIVERED" />}
        </div>
    )
}

function History(historyDetail) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                detailHistory = {historyDetail.id}
            />
            <Divider style={{color: "orange"}} />
            <Box sx={{p: 2}}>
                <Grid container>
                    <Grid item xs={3}>
                        {historyDetail.created}
                    </Grid>
                    <Grid item xs={9}>
                        <div>You opened a Return request # {historyDetail.id}</div>
                        <div>
                            Status : <x style={{color: "black"}}>{historyDetail.status}</x>. 
                            <x style={{color: "blue"}} onClick={handleClickOpen}>View details</x>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

function DetailItem({item}) {
    const currency = ["$", "Eur"];
    const itemState = ["Awaiting Payment", "Shipped", "Not shipped", "Not yet shipped", "In transit", "Delivered", "Awaiting feedback"];
    const color = [red[500], grey[900], grey[900], grey[900], grey[900], green[500], green[500]];
    const [trackState, setTrackState] = useState(0)
    return (
        <Box sx={{border: "1px solid #CBCBCB", borderRadius: "5px", margin :"10px 0px"}}>
            <Box sx={{m: 2}}>
                <Typography variant="h6" componet="h6" >
                    {itemState[item.status]}
                </Typography>
                {item.status != 0 ? 
                    <Typography variant="subtitle1" componet="p" color={grey[500]} >
                        Delivery estimate: {item.created}
                    </Typography> : null}
                {item.status == 0 ?
                    null : 
                    (item.tracking != null ?(
                        trackState == 0 ? 
                        <Typography variant="subtitle1" componet="p" color={blue[500]} >
                            Track this order
                        </Typography> : 
                        <Box>
                            <Typography variant="subtitle1" componet="p" color={blue[500]} >
                            Hide tracking details
                            </Typography>
                            <Grid container>
                                <Grid item width={150}>Carrier : </Grid>
                                <Grid item >{item.currency}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item width={150}>Carrier : </Grid>
                                <Grid item >{item.tracknumber}</Grid>
                            </Grid>
                            <Workflow length={1} />
                            {item.status == 5 ? <History /> : null}
                            <Dropdown.Toggle variant="first" style={{color : "blue"}}>
                                Show More
                            </Dropdown.Toggle>
                        </Box>) : null)}
            </Box>
            <Divider />
            <Box sx={{m: 2}}>
                <Grid container spacing={1}>
                    <Grid item direction="column" xs={2} >
                        <Box>
                            <Typography gutterBottom variant="subtitle1" component="h6" height={30}>
                                Order summary
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                Subtotal(2items):
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                Shipping cost:
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                Total
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p" color={green[500]}>
                                Refound total
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item direction="column" xs={2} >
                        <Box>
                            <Typography gutterBottom variant="subtitle1" component="h6" height={30}>
                                
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                US @1234
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                US $123
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                US $1234.56
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p" color={green[500]}>
                                US $1234
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item direction="column" xs={2} >
                        <Box>
                            <Typography gutterBottom variant="subtitle1" component="h6" height={30}>
                                Payment Method     
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                Visa Amex xxxx-1234
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item direction="column" xs={4} sx={{textAlign: "center"}}>
                        <Box sx={{width: "fit-content", textAlign: "left"}}>
                            <Typography gutterBottom variant="subtitle1" component="h6" height={30}>
                                Shipping address            
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                            Name Surname
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                            1234 EL CAMINO REAL
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                            STE - 100386
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                            SUNNYVALE CA 98765-4321
                            </Typography><Typography gutterBottom variant="body2" component="p">
                            United States
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                            Phone: + 1 234-5678-900
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item direction="column" xs={2} >
                        <Box>
                            <Button variant="contained">Seller Contact</Button>
                        </Box>
                    </Grid>
                </Grid>       
            </Box>
            <Divider />
            {
                item.status != 0 ?
                <Box sx={{ p: 1}}><h6 style={{color: blue[500]}}>Transactions<KeyboardArrowDownIcon /></h6></Box> :
                null 
            }
            <Box sx={{backgroundColor : "lightblue", p: 2}}><h6 style={{color: blue[500]}}>Ordered Item(s)</h6></Box>
            <Box sx={{width: "100%", p: 2}}>
                <Box sx={{display: "flex"}} >
                    <Grid xs={3}>
                        <ButtonBase sx={{ width: 150, height: 150 }}>
                            <Img alt="Image" src={item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9} spacing={2}>
                        <Typography gutterBottom variant="h4" component="div" color={blue[500]} sx={{fontSize : "20px", mt: 2}}>
                        EE PAY AS YOU GO 4G preparaid sim card $150.50 preloaded everything in one package
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            NSNL: {item.id}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Item price: US ${item.price}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Quantity: {item.quantity}
                        </Typography>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

const select_item ={
    orderID : "123123-12321",
    created : "sep of 2017",
    seller : "Simon",
    status : 0,
    history : {
        created : "1213123",
        id : "123",
        status : "asdadasdsa"
    }
}

function Detail() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <br />
                <Typography variant="h4" component="h4" sx={{m : 2}}>
                Order Details
                </Typography>
                <Box sx={{display : "flex"}}>
                    <Box sx={{borderRight: "1px solid grey", height: "25px", pr: 2, m: 2}}>
                    Order: #{select_item.orderID}
                    </Box>
                    <Box sx={{borderRight: "1px solid grey", height: "25px", pr: 2, m: 2}} >
                    Ordered on: {select_item.created}  
                    </Box>
                    <Box sx={{height: "25px", width: "150px", m: 2}}>
                    seller: <x style={{color: "blue"}}>{select_item.seller}</x>
                    </Box>
                </Box>
                <DetailItem item={select_item} />
            </Container>
        </React.Fragment>
    );
}

export default Detail;