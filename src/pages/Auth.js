import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import ResetPassword from '../components/ResetPassword';
import { Box, Typography } from '@mui/material';

const Auth = () => {
    const [currentView, setCurrentView] = useState('login');

    const handleToggle = () => {
        setCurrentView((prev) => (prev === 'login' ? 'register' : 'login'));
    };

    const handleResetPasswordToggle = () => {
        setCurrentView((prev) => (prev === 'login' ? 'reset' : 'login'));
    };

    return (
        <Box
            sx={{
                maxWidth: '500px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
            }}
        >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                {currentView === 'register' ? 'Criar Conta' : currentView === 'reset' ? 'Redefinir Senha' : 'Login'}
            </Typography>
            {
                currentView === 'reset' ? (
                    <ResetPassword handleResetPasswordToggle={handleResetPasswordToggle} />
                ) : currentView === 'register' ? (
                    <Register handleToggle={handleToggle} />
                ) : (
                    <Login handleToggle={handleToggle} handleResetPasswordToggle={handleResetPasswordToggle} />
                )}
        </Box>
    );
};

export default Auth;
