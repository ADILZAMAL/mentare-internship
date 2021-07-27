import React from 'react'
import SignIn from '../components/SignIn'
import Navbar from '../components/Navbar';
import { Box, Divider, Grid } from '@material-ui/core';

export default function Home() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item style={{backgroundColor: '#3f37c9',  height: 'calc(100vh - 90px)'}}>
                <Box p={5} style={{ height: 'inherit'}}>
                    <Grid container alignItems="" style={{ height: '100%'}}>
                        <Grid xs={6} item container justifyContent="center" alignItems="center" style={{borderRight: '2px dashed white'}}>
                            <SignIn title=" TO REGISTER OUR INVENTORY WITH US, SIGN IN HERE" buttonText="Vendor Portal"/>
                        </Grid>
                        <Grid xs={6} item container justifyContent="center" alignItems="center">
                            <SignIn  title="TO DISPLAY ADS ON INVENTORY REGISTERED WITH US, SIGN IN HERE" buttonText="Advertiser Portal"/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
