import React from "react";
import Navbar from "../components/Navbar";
import {Box, Button, Grid, Typography} from '@material-ui/core'
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item style={{ height: 'calc(100vh - 90px)', backgroundColor: '#3f37c9'}}>
        <Box p={10} style={{height: 'inherit'}}>
          <Grid container  direction="row" style={{height: "100%"}}>
            <Grid item xs={6} container justifyContent="center" alignItems="center" direction="column">
            <Typography variant="h4"  style={{color:'rgba(255, 255, 255, 0.8)', fontWeight: 600}}>
                SALT
              </Typography>
              <Typography style={{color:'rgba(255, 255, 255, 0.8)'}}>
                Your one stop advertising platform
              </Typography>
              <Link to="/home">
                <Button style={{marginTop: 30}} variant="contained">Portal</Button>
              </Link>
            </Grid>
            <Grid item xs={6} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/landing.png)`}}>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
