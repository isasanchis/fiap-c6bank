import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box,TextField, FormControlLabel, Checkbox, Button, Snackbar, Stack } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CopyProps = {
  site: string;
    sx?:object;
}

function Copyright(props:CopyProps){
    return (
      <Typography>
        {'Copyright © '}
        <Link color="inherit" href="https://www.avanade.com.br/">
          {props.site}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
}

const theme = createTheme();


export default function LoginPage() {

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>("");
  const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(password && password.length < 6) {
      setError(true);
      setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    } else if(password) {
      setError(false);
      setErrorMessage('');
      setOpen(true);

      // enviar form p o server
      // snackbar
    }
  }, [password]);

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(data.get('email'));
    console.log(data.get('password'));

    setEmail(data.get('email'));
    setPassword(data.get('password'));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Usuário autenticado com sucesso!
          </Alert>
        </Snackbar>
          <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              {/* <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
              {'O State contador vale: ' + contador }
              {'Nome maiúsculo: ' + nome }
              <button onClick={() => setNome(nome.toUpperCase())}>Mudar nome</button> */}

              <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
              <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar de mim" />
              <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>

              {error && <Typography color="error">{errorMessage}</Typography>}
            </Box>
          </Box>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
      </Container>
    </ThemeProvider>
  )
}