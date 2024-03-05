import React from 'react';
import styles from './background.module.css';
import { Button } from '@mui/material';



function BusinessTabs() {
    const handleBusinessButtons = (val) => {
        alert(`${val} is under development.`)
    }
    return (
        <div className={styles.bussinessTab} style={{ textAlign: 'center' }} >
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Environment")}><b>Environment</b></Button>
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Fashion")}><b>Fashion</b></Button>
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Food")}><b>Food</b></Button>
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Lifestyle")}><b>Lifestyle</b></Button>
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Music")}><b>Music</b></Button>
            <Button style={{ margin: '20px', width: '10%', backgroundColor: 'white', color: 'black' }} variant="contained" onClick={() => handleBusinessButtons("Technology")}><b>Technology</b></Button>
        </div>
    )
}

export default BusinessTabs;

