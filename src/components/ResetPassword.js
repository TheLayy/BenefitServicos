import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

const ResetPassword = ({ handleResetPasswordToggle }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await sendPasswordResetEmail(auth, email);
            Swal.fire({
                title: 'E-mail enviado!',
                text: "Se o e-mail estiver cadastrado, você receberá um link para redefinição de senha.",
                icon: 'success',
                confirmButtonText: 'Ok',
            }).then(() => {
                handleResetPasswordToggle();
            });
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                setError('E-mail inválido.');
            } else {
                setError('Erro ao enviar o e-mail. Tente novamente mais tarde.');
            }
        }
    };

    return (
        <form onSubmit={handleResetPassword}>
            <TextField
                fullWidth
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                margin="normal"
                error={Boolean(error)}
                helperText={error}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Enviar E-mail de Redefinição
            </Button>

            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                Lembrou a senha?{' '}
                <Button onClick={handleResetPasswordToggle}>Login</Button>
            </Typography>
        </form>
    );
};

export default ResetPassword;
