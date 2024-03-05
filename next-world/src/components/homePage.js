import React, { useState } from 'react';
import logo from '../pic3.JPG';
import logo1 from '../newOne.JPG';
import styles from './background.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Card, CardHeader, Divider, Grid, Modal, IconButton, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import BusinessTabs from './businessTabs';
import ProductListing from './productlisting';
import Blogs from './blogs';
import Footer from './footer';

const contactDetails = [
    {label:'Company Name', value:'Beauty Business Journal'},
    {label:'Industry Type', value:'Online Media'},
    {label:'Company Type', value:'Privately Held'},
    {label:'Official Contact', value:'4573459609'},
    {label:'Employees Range ', value:'1 - 50'},
    {label:'Official Website', value:'https://beautybusinessjournal.com/', url:true},
    {label:'Official Address', value:'Souk Al Bahar, Burj Khalifa District ,Office 430, Building B, Al Saaha Offices, Dubai, Dxb, United Arab Emirates, 487177'},
    
]

function HomePage() {
    const [readMore, setReadMore] = useState(false);
    const [open, setOpen] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

    const handleContactPopUp = () => {
        setOpen(true);
    }

    const closePopUp = () => {
        setOpen(false);
    }
    return (
        <div>
            <img src={logo} alt="logo" style={{ height: '100%', width: '100%' }} />
            <Grid container spacing={1} style={{ marginBottom: '1%' }}>
                <Grid item lg={12} sx={{ textAlign: 'center', mt: '2%' }}>
                    <Typography variant='h5'><u><b>About Us</b></u></Typography>
                    <div style={{ width: '70%', marginLeft: '15%', fontFamily: 'monospace', fontSize: '18px' }}>

                        <p>We're building  the community of tomorrow and making it easier for entrepreneurs,
                            indie fonders, marketers and sales professionals to learn and connect with each other.
                        </p>

                        <p>In an industry that generates $500 billion in sales a year and accounts for millions of jobs, Beauty Business Hournal is a place for
                            valued conversations - to share experiences, insights, and solutions to the challanges we face building modern brands and businesses.
                        </p>

                        <p>The community is for strategic thinkers, brand builders, and lifelong learners who want to understand the complexities of todays beauty industry. It's a
                            space to ask questions, start important discussions and expand your knowledge.
                        </p>

                        <p> Becoming a member is also a way to support the effort that goes into researching and creating thousands of articles, publishing our
                            weekly newsletter adn maintaining such a large database of content. Your contribution makes Beauty Business Journal a sustainable platform.
                        </p>

                        {readMore && <><p>
                            Beauty Business Journal is a media brand exploring the evolution of the beauty industry through the intersection of digital, media and technology.
                            It has become an indispensable resource for beauty professionals, manufacturers, distributors, retailers and entrepreneurs in over 135 countries.
                        </p>

                            <p>
                                Launched in 2018, the publication covers how the beauty industry is approaching modern business challenges, aiming to fill the niche for an informed,
                                analytical and opinionated point of view on the beauty business.
                            </p>

                            <p>
                                The editorial team is led by editor-in-chief and independent analyst Richard McKeon, and covers luxury, mass-market, sustainable and direct-to-consumer brands and strategies.
                            </p></>}

                        <Button variant='contained' style={{ backgroundColor: '#A52A2A' }} onClick={handleReadMore} >{!readMore ? 'Read more' : 'Read less'}</Button>
                    </div>
                </Grid>
            </Grid>

            <div>
                <article
                    className={styles.article}
                    style={{ backgroundImage: `url(${logo1})` }}
                >
                    <h1 className={styles.header} style={{marginRight:'5%'}}>The community is for the strategic thinkers.<br /> brand builder and lifelong learners</h1>

                    <p className={styles.body} style={{marginRight:'5%'}}>Becoming a member is also a way to support the effort that <br />goes into researching and creating thousands of articles,<br />publishing our weekly newsletter, and maintaining such a<br /> large database of content</p>
                    <br /><br /><br />
                    <p className={styles.button} style={{marginRight:'10%'}}><Button variant='contained' style={{ backgroundColor: '#A52A2A' }} onClick={handleContactPopUp}>Contact us</Button></p>
                    <br /><br /><br />
                </article>
            </div>
            <BusinessTabs/>
            <ProductListing/>
            <Blogs/>
            <Footer/>
            <Modal
                open={open} style={{ top: '6%', left: '30%', width: '50%' }}>
                <Card>
                    <CardHeader
                     action={
                        <IconButton aria-label="settings">
                          <CloseIcon onClick={closePopUp} />
                        </IconButton>
                      }
                        title="Contact Details"
                        //subheader="September 14, 2016"
                    />
                    <Divider/>
                    <Table>
                       
                        <TableBody>
                            {contactDetails.map((item,index)=>(<TableRow key={index}>
                                 <TableCell>{item?.label}</TableCell>
                                 <TableCell>{item?.url?<a href='https://beautybusinessjournal.com/'>{item?.value}</a>:item?.value}</TableCell>
                            </TableRow>))}
                        </TableBody>
                    </Table>
                </Card>
            </Modal>
        </div>
    )
}

export default HomePage;