import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Swal from 'sweetalert2';

const Register = ({ handleToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('As senhas não são iguais.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                title: 'Usuário criado com sucesso!',
                text: "Você será direcionado para o painel de administração",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            })
            navigate('/admin');
        } catch (error) {
            setError('Erro ao criar usuário. Verifique se o e-mail está correto ou se a senha atende aos requisitos.');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <TextField
                fullWidth
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                margin="normal"
                error={Boolean(error)}
                helperText={error && "E-mail inválido ou já em uso."}
            />
            <TextField
                fullWidth
                type="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                margin="normal"
                error={Boolean(error)}
                helperText={error && "Senha deve ter pelo menos 6 caracteres."}
            />
            <TextField
                fullWidth
                type="password"
                label="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                margin="normal"
                error={Boolean(error)}
                helperText={error && "As senhas não coincidem."}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Registrar
            </Button>
            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                Já tem uma conta?{' '}
                <Link href="#" onClick={handleToggle}>Voltar para Login</Link>
            </Typography>
        </form>
    );
};

export default Register;
