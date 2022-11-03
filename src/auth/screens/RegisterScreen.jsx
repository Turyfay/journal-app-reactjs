import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { LayoutAuth } from "../layout/LayoutAuth"


const formValidations = {
   email: [(value)=> value.includes('@'),'El correo en invalido'],
   password: [(value)=>value.length < 6, 'La contraseña no es valida debe tenes mas de 6 caracteres'],
   nombres: [(value)=>value.length > 1, 'Los nombres no son validos'],
   apellidos: [(value)=>value.length > 1, 'Los apellidos no son validos']
}


export const RegisterScreen = () => {

  const {
    nombres, 
    apellidos, 
    email, 
    password, 
    passwordRepeat, 
    onInputChange, 
    onResetForm, 
    formState,
    isFormValid,
    nombresValid,
    apellidosValid,
    emailValid,
    passwordValid,
    equalPassword
  } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }, formValidations);

  const onSubmitRegister = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <LayoutAuth title='Registro de Usuario'>
      <form onSubmit={onSubmitRegister}>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Nombres'
              type='text'
              fullWidth
              size='small'
              name="nombres"
              value={nombres}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Apellidos'
              type='text'
              fullWidth
              size='small'
              name='apellidos'
              value={apellidos}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="ejemplo@gmail.com"
              fullWidth
              size='small'
              name="email"
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
              size='small'
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Repetir Contraseña'
              type='password'
              placeholder="Repetir Contraseña"
              fullWidth
              size='small'
              name="passwordRepeat"
              value={passwordRepeat}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >

            <Grid item xs={12} >
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>

          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  )
}
