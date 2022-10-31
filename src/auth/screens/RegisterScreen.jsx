import { Button, Grid, TextField } from "@mui/material"
import { LayoutAuth } from "../layout/LayoutAuth"

export const RegisterScreen = () => {
  return (
    <LayoutAuth title='Registro de Usuario'>
      <form >

        <Grid container>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Nombres'
              type='text'
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Apellidos'
              type='text'
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="ejemplo@gmail.com"
              fullWidth
              size='small'
            />
          </Grid>


          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder="Contraseña"
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              label='Repetir Contraseña'
              type='password'
              placeholder="Repetir Contraseña"
              fullWidth
              size='small'
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12} >
              <Button variant="contained" fullWidth>Registrar</Button>
            </Grid>

          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  )
}
