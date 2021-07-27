import React from 'react'
import SignIn from '../components/SignIn'
import Navbar from '../components/Navbar';
import { Box, Divider, Grid } from '@material-ui/core';
import SignUp from '../components/SignUp'

export default function Home() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item style={{backgroundColor: '#3f37c9',  height: 'calc(100vh - 90px)'}}>
                <Box p={5} style={{ height: 'inherit'}}>
                    <Grid container justifyContent="center" style={{ height: '100%'}}>
                        <Grid xs={6} item container justifyContent="center" alignItems="center" >
                            <SignUp role="VENDOR"/>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
