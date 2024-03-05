import React from 'react';
import '../../src/App.css';
import { Box, Button, Card, CardHeader, Grid, CardMedia, CardContent, Typography } from '@mui/material';
import fashion from '../fashion.JPG';
import lifestyle from '../lifestyle.JPG';
import logo from "../latestArticle1.JPG";
import logo2 from "../latestArticle2.JPG";




function ProductListing() {
    return (
        <div style={{ marginTop: '3%', marginBottom: '2%' }}>
            <Grid container>
                <Grid item lg={3}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }}
                            title={<Box component="section" sx={{ p: 2, border: '1px solid grey', fontFamily: 'serif' }}>
                                Fashion
                            </Box>} />
                        <CardMedia
                            component="img"
                            height="194"
                            image={fashion}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                                Hipster Yoga At The End Of The World
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                "I'm actually a lot cooler now then I"
                            </Typography>
                            <p>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.

                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }}
                            title={<Box component="section" sx={{ p: 2, border: '1px solid grey', fontFamily: 'serif' }}>
                                Lifestyle
                            </Box>} />
                        <CardMedia
                            component="img"
                            height="194"
                            image={lifestyle}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                                What is the Definition Of An Entrepreneur Lifestyle?
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                "I'm actually a lot cooler now then I"
                            </Typography>
                            <p>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.

                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }}
                            title={<Box component="section" sx={{ p: 2, border: '1px solid grey', fontFamily: 'serif' }}>
                                Latest Article
                            </Box>} />
                        <CardContent>
                            <Card className="container">
                                <div className="box1"><img src={logo} alt="logo" style={{ height: '100%', width: '100%' }} /></div>
                                <div className="box2">
                                    <h4>Lifestyle</h4>
                                    <p><h4>Success Is A Choice-- What Are You Going To Do?</h4></p>

                                    <p> Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                        "I'm actually a lot cooler now then I"</p>
                                </div>
                            </Card>

                            <Card className="container">
                                <div className="box1"><img src={logo2} alt="logo" style={{ height: '100%', width: '100%' }} /></div>
                                <div className="box2">
                                    <h4>Lifestyle</h4>
                                    <p><h4>Entrepreneurship Ideas For Young & Ambitious People</h4></p>

                                    <p> Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                        "I'm actually a lot cooler now then I"</p>
                                </div>
                            </Card>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </div>

    )
}

export default ProductListing;

