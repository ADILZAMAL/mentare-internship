import React from 'react'
import SignIn from '../components/SignIn'
import Navbar from '../components/Navbar';
import { Box, Divider, Grid } from '@material-ui/core';
import { Redirect, withRouter } from 'react-router-dom';

 function Home(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(props)
    if(user&& user.role && user.role.name === 'vendor'){
        props.history.push('/vendor')
    }
    if(user&& user.role&& user.role.name === 'advertiser')
        props.history.push('/advertiser')
    return (
        <Grid container direction="column">
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item style={{backgroundColor: '#3f37c9',  height: 'calc(100vh - 90px)'}}>
                <Box p={5} style={{ height: 'inherit'}}>
                    <Grid container alignItems="" style={{ height: '100%'}}>
                        <Grid xs={6} item container justifyContent="center" alignItems="center" style={{borderRight: '2px dashed white'}}>
                            <SignIn role="vendor" title=" TO REGISTER OUR INVENTORY WITH US, SIGN IN HERE" buttonText="Vendor Portal"/>
                        </Grid>
                        <Grid xs={6} item container justifyContent="center" alignItems="center">
                            <SignIn role="advertiser" title="TO DISPLAY ADS ON INVENTORY REGISTERED WITH US, SIGN IN HERE" buttonText="Advertiser Portal"/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default withRouter(Home)