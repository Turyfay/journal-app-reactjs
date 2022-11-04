import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { Google } from "@mui/icons-material";
import { LayoutAuth } from '../layout/LayoutAuth';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { useMemo } from "react";

export const LoginScreen = () => {

  const { email, password, onInputChange, onResetForm, formState } = useForm({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(store => store.auth);
  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <LayoutAuth title='Login'>
      <form onSubmit={onSubmitLogin} className='animate__animated animete__fadeIn'>

        <Grid container >
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="ejemplo@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}

            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity="error" >{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth disabled={isAuthenticated} >Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type='button' onClick={onGoogleSignIn} variant="contained" fullWidth disabled={isAuthenticated}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>



          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>


        </Grid>
      </form>
    </LayoutAuth>
  )
}
