import { Grid, TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from "@material-ui/icons"
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img src='https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='brand'
          />
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          alignItems='center'
          direction="column"
          justifyContent='space-between'
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300
            }}
          >
            <Grid container justifyContent="center">
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png"
                width={200}
                alt="logo"
              />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              type="password"
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
              }}
            />
            <div style={{ height: 20 }} />
            <Button color="primary" variant='contained'>
              Log in
            </Button>
            <div style={{ height: 20 }} />
            <Button>Interested in joining?</Button>
          </div>
          <Grid container justifyContent='center' spacing={2} >
            <Grid item>
              <Button color='primary'>Go to community page</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined'>Forgot password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
