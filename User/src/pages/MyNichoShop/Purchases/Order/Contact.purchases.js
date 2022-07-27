import React from "react";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, ButtonBase, CssBaseline, Divider, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { setDetailItem, setPublicPage } from "../../../../actions/actions";
import { Form } from "react-bootstrap";
import { blue } from "@mui/material/colors";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

function ShopItem({ item }) {
    const dispatch = useDispatch();
    const moveToDetail = () => {
        dispatch(setPublicPage(1));
        dispatch(setDetailItem(item.id));
    };
    return (
        <Box
            sx={{
                border: "1px solid #CBCBCB",
                borderRadius: "5px",
                mt: 2,
                p: 2,
                width: "80%",
            }}
        >
            <Box sx={{ width: "100%", p: 2 }}>
                <Box sx={{ display: "flex" }}>
                    <Grid xs={3}>
                        <ButtonBase sx={{ width: 150, height: 150 }}>
                            <Img alt="Image" src={item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9} spacing={2}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            color={blue[500]}
                            sx={{ fontSize: "20px", mt: 2 }}
                        >
                            EE PAY AS YOU GO 4G preparaid sim card $150.50
                            preloaded everything in one package
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
            <Divider />
            <Box sx={{ width: "50%" }}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Select>
                        <option>Default select</option>
                        <option>I have a question about using my item</option>
                        <option>I didn’t receive my item</option>
                        <option>I need to return my item</option>
                        <option>
                            I received item that wasn’t as described
                        </option>
                        <option>Request to cancel this order</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message to the buyer (optional)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="outlined" component="label">
                    Add files
                    <input type="file" hidden />
                </Button>
                <Form.Label
                    style={{
                        borderBottom: "1px dotted grey",
                        fontSize: "10px",
                        width: "100%",
                    }}
                >
                    Accepted file formats: .gif, .jpg, .jpeg, .pdf, .and .png.
                    Add up to 10 files, 5MB each
                </Form.Label>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button variant="contained" style={{ width: "100%" }}>
                            Send Message
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" style={{ width: "100%" }}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

const items = [
    {
        id: 1,
        condition: "asdasdasd",
        qty: 6,
        image: "/assets/product-img/product.png",
        variables: [
            {
                variable_name: "variable_value",
            },
        ],
        price: 123,
        currency: 123,
    },
];

function Contact() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <br />
                <Typography variant="h5" component="h5">
                    Contact buyer: buyer_username
                </Typography>
                <ShopItem item={items[0]} />
            </Container>
        </React.Fragment>
    );
}

export default Contact;
