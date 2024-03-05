import React, { useState } from 'react';
import '../../src/App.css';
import { Box, Button, Card, CardHeader, Grid, CardMedia, CardContent, Typography, Collapse,IconButton,CardActions } from '@mui/material';
import blog1 from '../blog1.JPG';
import blog2 from '../blog2.JPG';
import blog3 from "../blog3.JPG";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Blogs() {
    const [expandHelpSkin, setExpandHelpSkin] = useState(false);
    const [expandUseMoist, setExpandUseMoist] = useState(false);
    const [expandUseAloe, setExpandUseAloe] = useState(false);

    const handleExpandClick = () => {
        setExpandHelpSkin(!expandHelpSkin);
    };
    const handleExpandMoist = () => {
        setExpandUseMoist(!expandUseMoist);
    };
    const handleExpandAloe = () => {
        setExpandUseAloe(!expandUseAloe);
    };
    return (
        <div style={{ marginTop: '3%', marginBottom: '2%' }}>
            <div style={{ textAlign: 'center' }}><Typography variant='h5'><u><b>Blogs</b></u></Typography></div>
            <Grid container>
                <Grid item lg={4}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }} />
                        <CardMedia
                            component="img"
                            height="194"
                            image={blog1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                            9 Types of Aloe Vera Mask To Help Skin Whitening
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                "I'm actually a lot cooler now then I"
                            </Typography>
                        </CardContent>
                        <div style={{textAlign:'right'}}>
                            <Button
                                expand={expandHelpSkin}
                                onClick={handleExpandClick}
                                aria-expanded={expandHelpSkin}
                                aria-label="show more"
                                endIcon={<ExpandMoreIcon />}
                            >
                                {!expandHelpSkin?"Read more" :"Read Less"}
                            </Button>
                        </div>
                        <Collapse in={expandHelpSkin} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }} />
                        <CardMedia
                            component="img"
                            height="194"
                            image={blog2}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                            Use Moisturizer Properly
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                "I'm actually a lot cooler now then I"
                            </Typography>
                        </CardContent>
                        <div style={{textAlign:'right'}}>
                            <Button
                                expand={expandUseMoist}
                                onClick={handleExpandMoist}
                                aria-expanded={expandUseMoist}
                                aria-label="show more"
                                endIcon={<ExpandMoreIcon />}
                            >
                                {!expandUseMoist?"Read more" :"Read Less"}
                            </Button>
                        </div>
                        <Collapse in={expandUseMoist} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card style={{ marginLeft: '1%' }}>
                        <CardHeader varient="outlined" style={{ textAlign: 'center' }} />
                        <CardMedia
                            component="img"
                            height="194"
                            image={blog3}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h5" style={{ textAlign: 'center', fontFamily: 'cursive' }}>
                            Aloe Vera Mask To Help Skin Whitening
                            </Typography>
                            <Typography style={{ textAlign: 'center' }}>
                                Model Paulina Porizkova, 57, has connected with thousands on social media with her honest conversations on aging, and is releasing a book.{<br />}
                                "I'm actually a lot cooler now then I"
                            </Typography>
                        </CardContent>
                        <div style={{textAlign:'right'}}>
                            <Button
                                expand={expandUseAloe}
                                onClick={handleExpandAloe}
                                aria-expanded={expandUseAloe}
                                aria-label="show more"
                                endIcon={<ExpandMoreIcon />}
                            >
                                {!expandUseMoist?"Read more" :"Read Less"}
                            </Button>
                        </div>
                        <Collapse in={expandUseAloe} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid >
        </div>

    )
}

export default Blogs;

