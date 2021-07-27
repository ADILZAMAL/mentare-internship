import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import {Link, Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

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

function SignIn({title, buttonText, role, ...props}) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
       axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/signin',
        data:{
          username: userName,
          password
        }
      }).then(({data})=>{
        if(data.accessToken){
          localStorage.setItem('user', JSON.stringify(data))
          props.history.push(data.role.name === 'vendor' ? '/vendor': '/advertiser')
        }
      })
      .catch(({request})=>{
        toast.error(JSON.parse(request.response).message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
    
  }
  return (
    <Container component="main" maxWidth="xs"  className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography  variant="subtitle2" align="center">
         {title}
        </Typography>
        <form className={classes.form} onSubmit={login}>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{buttonText}</Button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoFocus
            value={userName}
            onChange={e=>setUserName(e.target.value)}
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
            value={password}
            onChange={e=>setPassword(e.target.value)}
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
                variant="outlined"
                color="primary"
                className={classes.signUp}
            >
              <Link to={`/signup/${role}`}>
                  Sign Up
              </Link>
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

export default withRouter(SignIn)