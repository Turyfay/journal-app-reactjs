import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { checkAuthenticated, startGoogleSignIn} from '../../store/auth';
import { Google } from "@mui/icons-material";
import { LayoutAuth } from '../layout/LayoutAuth';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';

export const LoginScreen = () => {

  const { email, password, onInputChange, onResetForm, formState } = useForm({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { status } = useSelector(store => store.auth);

  const onSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(checkAuthenticated(email, password));
  }

  const onGoogleSignIn = () => {
    console.log('on google sign in ');
    dispatch(startGoogleSignIn());
  }

  return (
    <LayoutAuth title='Login'>
      <form onSubmit={onSubmitLogin} >

        <Grid container>
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
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type='button' onClick={onGoogleSignIn} variant="contained" fullWidth>
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
