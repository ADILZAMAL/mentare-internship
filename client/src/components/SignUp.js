import React, { useState } from 'react';
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
import axios from 'axios'
import { withRouter } from 'react-router-dom';
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

function SignUp({role, ...props}) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = (e) => {
    e.preventDefault();
     axios({
      method:'post', 
      url:'http://localhost:5000/api/auth/signup',
      data:{
        username: userName,
        email,
        password,
        role
      }
    }).then(({data})=>{
      console.log(data)
      toast.success('User Registered successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      props.history.push('/home')
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
         {`SIGN UP | ${role.toUpperCase() }`}
        </Typography>
        <form className={classes.form} onSubmit={signUpHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userName"
              label="User Name"
              type="text"
              id="userName"
              value={userName}
              onChange={e=>setUserName(e.target.value)}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            onChange={e=>setEmail(e.target.value)}
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
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <Box mb={3}>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>SIGN UP</Button>
          </Box>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp)