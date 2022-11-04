import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import SnackBar from '../components/utils/SnackBar';


const theme = createTheme();

export default function Register() {

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
          <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
              Registrar
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              {/* <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
              {'O State contador vale: ' + contador }
              {'Nome maiúsculo: ' + nome }
              <button onClick={() => setNome(nome.toUpperCase())}>Mudar nome</button> */}

              <TextField margin="normal" required fullWidth id="name" label="Digite o nome" name="name" autoFocus/>
              <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
              <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
              <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha novamente" name="password" autoComplete="current-password" autoFocus/>
              <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Registrar</Button>

              {error && <Typography color="error">{errorMessage}</Typography>}
            </Box>
          </Box>
        <Copyright site="Avanade" href="https://www.avanade.com.br" sx={{mt:8, mb: 4}} />
        <Copyright site="Github" href="https://www.github.com" sx={{mt:8, mb: 4}} />

        {open && <SnackBar open={open} hide={6} message="Usuário registrado com sucesso." />}
      </Container>
    </ThemeProvider>
  )
}