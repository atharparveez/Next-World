import React from 'react';
import logo from "../bocpLogo.JPG";
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, MenuItem, Menu, Grid } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';






const NavBar = () => {
    const [anchorMl, setAnchorMl] = React.useState(null);
    const [anchorPl, setAnchorPl] = React.useState(null);
    const open = Boolean(anchorMl);
    const open1 = Boolean(anchorPl);
    const handleManufacture = (event) => {
        setAnchorMl(event.currentTarget);
    };
    const handleProduct = (event) => {
        setAnchorPl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorMl(null);
        setAnchorPl(null);
    };
    return (
        <AppBar position="static" style={{ backgroundColor: 'white' }}>
            <Toolbar style={{ spa: 10, marginLeft: '2%' }}>
                <Grid container>
                    <Grid item lg={5} sx={{ mt: '1%' }}>
                        <Button variant='text' color="primary" component={NavLink} exact to="./"> Home</Button>
                        <Button color="primary" component={NavLink} exact to="/home"> About us</Button>
                        <Button onClick={handleManufacture} endIcon={<KeyboardArrowDownIcon />}>Manufacturer</Button>
                        <Menu
                            anchorEl={anchorMl}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                Next world-1
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Next world-2
                            </MenuItem>
                        </Menu>

                        <Button onClick={handleProduct} endIcon={<KeyboardArrowDownIcon />}>Products</Button>
                        <Menu
                            anchorEl={anchorPl}
                            open={open1}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                Product-1
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Product-2
                            </MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item lg={3}>
                        <img src={logo} alt="logo" style={{ height: '100%', width: '70%' }} />
                    </Grid>
                    <Grid item lg={4} sx={{ mt: '1%' }}>
                        <Button variant='text' color="primary" component={NavLink} exact to="./"> Contact Us</Button>
                        <Button color="primary" component={NavLink} exact to="/all"> Jobs</Button>
                        <Button color="primary" component={NavLink} exact to="/add" > Help</Button>
                        <Button color="primary" component={NavLink} exact to="/add" > Login/Register</Button>
                    </Grid>
                </Grid>


            </Toolbar>
            <Grid container>
                <Grid item lg={12} sx={{textAlign:'center'}}>
                    <Typography variant='h6' color="black" fontFamily='Georgia'><b>Business of Consumer Products</b></Typography>
                </Grid>
            </Grid>
        </AppBar >
    )
}
export default NavBar;
