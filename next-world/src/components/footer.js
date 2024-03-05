import React from 'react';
import styles from './background.module.css';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



function Footer() {
   
    return (
        <>
            <Grid container spacing={1} className={styles.footer}>
                <Grid item lg={3} style={{}}>
                    <Typography>PHYTOLAB<sub>COSMATICS</sub></Typography>
                    <p>Massa nisi, integer concallis sed eu. Lacus,
                        lorem bibendum in congue justo nisl, fames at
                        ultrices. Mattis enim mauris vitae ullamcorper maecenas enim,
                        fermentum
                    </p>

                    <p>Copyright 2022.phytolab All Rights Reserved</p>
                </Grid>
                <Grid item lg={3} style={{ }}>
                    <p><Button style={{ color: 'white' }}>Home</Button></p>
                    <p><Button style={{ color: 'white' }}>About Us</Button></p>
                    <p><Button style={{ color: 'white' }}>Contact Us</Button></p>
                    <p><Button style={{ color: 'white' }}>Terms & Conditions</Button></p>
                    <p><Button style={{ color: 'white' }}>Privacy Policies</Button></p>
                </Grid>
                <Grid item lg={3} style={{  }}>
                <p><Button style={{ color: 'white' }}>Manufacturer</Button></p>
                    <p><Button style={{ color: 'white' }}>Brands</Button></p>
                    <p><Button style={{ color: 'white' }}>Manufacturer Login</Button></p>
                    <p><Button style={{ color: 'white' }}>Brand Login</Button></p>
                    <p><Button style={{ color: 'white' }}>Help</Button></p>
                </Grid>
                <Grid item lg={3} style={{  }}>
                <p>Contact With Us</p>
                <IconButton style={{ color: 'white' }}><FacebookIcon/></IconButton>
                <IconButton style={{ color: 'white' }}><InstagramIcon/></IconButton>
                <IconButton style={{ color: 'white' }}><TwitterIcon/></IconButton>
                   
                </Grid>

            </Grid>
        </>
    )
}

export default Footer;

