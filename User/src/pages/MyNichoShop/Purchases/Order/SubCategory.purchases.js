import React from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CssBaseline, Divider, Grid, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function QuiltedImageList() {
  return (
      <Box sx={{width: "100%"}}>
        <ImageList
            sx={{ width: "100%", height: "100%" }}
            variant="quilted"
            cols={6}
            style={{overflowY: "none"}}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
        <Typography variant="p" component="p" sx={{textAlign: "center"}} >Roll Over Image to Zoom In</Typography>
      </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    rows : 6,
    cols : 5
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 1,
    rows : 1
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  }
];


function SubCategory() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <br />
                <Typography variant="h6" component="h6" sx={{mt : 2, mb: 2}}>
                <x style={{color: "lightblue"}}>My NichoShop</x><NavigateNextIcon /><x style={{color: "lightblue"}}>Sub-category</x> <NavigateNextIcon /> Canon EOS 5D Mark 3 Digital SLR Camera Body (MK 3DSLR) *NEW* + *3Year Warranty’
                </Typography>
                <Box sx={{width: "100%", p: 2, border : "1px solid lightblue", borderRadius: "5px"}}>
                The buyer buyer_username bought this item on 22 Jun 2018 12:34 GMT <x style={{width: "blue"}}>View order details</x>
                </Box>
                <Box sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <QuiltedImageList />
                        </Grid>
                        <Grid item xs={6} spacing={2}>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1" component="h6">
                                Canon EOS 5D Mark 3 Digital SLR Camera Body (MK 3DSLR) *NEW* + *3Year Warranty’
                                </Typography>
                            </Grid>
                            
                            <Grid container item spacing={2} sx={{p:2}}>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Condition:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Used</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Item price:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>US $123.45</Typography>
                                </Box>

                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Color:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Blue</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Model:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Slim</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Material:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Cotton</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Quantity:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>2</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Shipping::</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>
                                    Free Economy Int’l Delivery to United Kingdom <br />
                                    Item location: Hamtramck, Michigan, United States <br />
                                    Ship to: united Kingdom and many other countries
                                    </Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Delivery:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Estimated between Sat. Apr. 18 and Wed. May 6</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Returns:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>You do not accept returns or echanges, but the item is covered by the NichoShop Protection if it does not match the listing description.</Typography>
                                </Box>
                                <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                                    <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Sold by:</Typography>
                                    <Typography component="label" variant="subtitle1" sx={{width: "80%"}} color={blue[500]}>Andrey | Andon</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Divider sx={{mt: 2, mb: 2}} />
                <Typography variant="h5" component="h5" sx={{mt : 2, mb: 2}}>
                Item Specifics
                </Typography>
                <Grid container spacing={2}>
                    <Grid item spacing={2} xs={6}>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Condition:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>New: A brand-new, unused, unopened, undamaged item in its owiginal packaging
(where packaging is applicable). Packaging... Reading more</Typography>
                        </Box>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Platform:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Windows</Typography>
                        </Box>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Format:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Download</Typography>
                        </Box>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >EAT:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>1234567890</Typography>
                        </Box>
                    </Grid>
                    <Grid item spacing={2} xs={6}>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Brand:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Symantec</Typography>
                        </Box>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >Type:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>Anti-Spyware, Antivitus/Internet Security, Firewall Software</Typography>
                        </Box>
                        <Box sx={{display: "flow", mt: 1, width : "100%"}}>
                            <Typography component="label" variant="subtitle1" sx={{width: "20%"}} >MPN:</Typography>
                            <Typography component="label" variant="subtitle1" sx={{width: "80%"}}>1234567890</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{mt: 2, mb: 2}} />
                <Typography variant="h5" component="h5" sx={{mt : 2, mb: 2}}>
                Item Specifics
                </Typography>
                <Box>
                    <div style={{columnCount: 2}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </Box>
                
            </Container>
        </React.Fragment>
    );
}

export default SubCategory;