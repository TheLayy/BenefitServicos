import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleToggle, handleResetPasswordToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (error) {
            setError('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}

        >

            <>

                <TextField
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    label="E-mail"
                    error={Boolean(error)}
                    helperText={error}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    type="password"
                    label="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    error={Boolean(error)}
                    helperText={error}
                    margin="normal"
                    sx={{ mt: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Login
                </Button>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Link href="#" variant="body2" onClick={handleResetPasswordToggle}>
                        Esqueceu a Senha?
                    </Link>
                    <Box mt={1}>
                        <Link href="#" variant="body2" onClick={handleToggle}>
                            Não tem uma conta? Inscreva-se
                        </Link>
                    </Box>
                </Box>
            </>

        </Box>
    );
};

export default Login;
