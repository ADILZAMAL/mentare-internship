import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: '#e9ecef',
        borderRadius: '15px',
        color: '#3f37c9',
    },
  paper: {
      margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

},
signUp:{
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#fff',
      width: '60%',
      textAlign: 'center',

  }
}));

export default function SignIn({title, buttonText}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs"  className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography  variant="subtitle2" align="center">
         {title}
        </Typography>
        <form className={classes.form} noValidate>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{buttonText}</Button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography align="center" variant="subtitle2">
              Forgot password?
          </Typography>
          <Box mt={4} mb={2} style={{borderBottom: '2px dashed #3f37c9'}}></Box>
          <Typography  variant="subtitle1" align="center" style={{fontWeight: 600}}>
              Don't have an account yet?
          </Typography>
          <Grid container justifyContent="center" >
            <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.signUp}
            >
                Sign Up
            </Button>
          </Grid>
          <Typography  variant="subtitle1" align="center" style={{fontWeight: 600}}>
              OR
          </Typography>
          <Typography component="h1"  variant="body2" align="center" >
              Reach out to our Sales expert!
          </Typography>
        </form>
      </div>
    </Container>
  );
}