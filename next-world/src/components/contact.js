import React, { useState } from 'react';
import logo from "../loginpage.JPG";
import { Box, Button, Card, CardHeader, Grid, TextField, Typography } from '@mui/material';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    subject:'',
    message:''
    // Add more fields as needed
  };

const Contact = () => {
    const [state,setState]= useState(initialState);
    const [error,setError]= useState(false);

    const handleSubmit = ()=>{
        if(state.firstName===null || state.firstName===""){
            alert(`Please fill the details...`)
            setError(true)
        }
        else{
            setError(false)
            alert(`your respose for ${state.firstName} ${state.lastName} has been recieved.`)
            setState(initialState);
            
        }
       
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
          });
      };
    console.log(state,"clicked")
    return (
        <div>
            <img src={logo} alt="logo" style={{ height: '100%', width: '100%' }} />
            <Grid container spacing={1} style={{ marginBottom: '1%' }}>
                <Grid item lg={6} sx={{ textAlign: 'center', mt: '2%' }}>
                    <Typography variant='h5'><u><b>How can we help?</b></u></Typography>
                    <div style={{ width: '30%', marginLeft: '35%', fontFamily: 'sans-serif' }}><p>Let's talk about  you and your product vision.
                        Everything we do is customized for your specific needs. We look forward to connecting with you to discuss how PHYTOLAB can help youmake your
                        vision a reality! Email to schedule a consult. We will respond to you as soon as we can.
                    </p><br />

                        <Typography variant='h4' style={{ fontFamily: 'serif' }}><u>Locations</u></Typography>
                        <Grid container>
                            <Card variant="outlined">
                                <CardHeader
                                    title={<Typography style={{ fontSize: 25, color: '#A52A2A' }}>Beaverton</Typography>}
                                    subheader="4145 SW Watson Ave Suite 350 Beaverton, OR 97005"
                                />

                            </Card> &nbsp;
                            <Card variant="outlined">
                                <CardHeader
                                    title={<Typography style={{ fontSize: 25, color: '#A52A2A' }}>Italy</Typography>}
                                    subheader="Via Enrico MATTIE 7 Pogliano Milanese Milano 20010 Italy"
                                />
                            </Card>
                        </Grid>
                    </div>
                </Grid>
                <Grid item lg={6} sx={{ mt: '2%' }}>
                    {state.fn}
                    <Typography>Name</Typography>
                    <TextField style={{ width: '40%', marginTop: '1%' }} variant='outlined' error={error} size='small' label="First" name="firstName"value={state.firstName} onChange={handleChange} />&nbsp;
                    <TextField style={{ width: '40%', marginTop: '1%' }} variant='outlined' error={error} size='small' label="Last" name="lastName"value={state.lastName} onChange={handleChange} /><br />
                    <Typography style={{ marginTop: '2%' }}>Email</Typography>
                    <TextField style={{ width: '81%', marginTop: '1%' }} variant='outlined' size='small' name="email"value={state.email} onChange={handleChange} /><br />
                    <Typography style={{ marginTop: '2%' }}>Phone Number</Typography>
                    <TextField style={{ width: '81%', marginTop: '1%' }} variant='outlined' type='number' size='small' name="phone"value={state.phone} onChange={handleChange} /><br />
                    <Typography style={{ marginTop: '2%' }}>Subject</Typography>
                    <TextField style={{ width: '81%', marginTop: '1%' }} variant='outlined' size='small' name="subject"value={state.subject} onChange={handleChange}  /><br />
                    <Typography style={{ marginTop: '2%' }}>Your Message</Typography>
                    <TextField style={{ width: '81%', marginTop: '1%' }} multiline rows={5} variant='outlined' size='small'  name="message"value={state.message} onChange={handleChange} /><br /><br />
                    <Button style={{ width: '30%', marginLeft: '25%', backgroundColor: '#A52A2A' }} variant='contained' onClick={handleSubmit}>Submit</Button>

                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;