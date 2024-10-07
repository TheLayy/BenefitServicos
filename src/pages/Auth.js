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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundImage: 'url("/section2-bg.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    maxWidth: '500px',
                    width: '100%',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: 'white',
                    textAlign: 'center',
                }}
            >

                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    {currentView === 'register' ? 'Criar Conta' : currentView === 'reset' ? 'Redefinir Senha' : 'Login'}
                </Typography>
                {currentView === 'reset' ? (
                    <ResetPassword handleResetPasswordToggle={handleResetPasswordToggle} />
                ) : currentView === 'register' ? (
                    <Register handleToggle={handleToggle} />
                ) : (
                    <Login handleToggle={handleToggle} handleResetPasswordToggle={handleResetPasswordToggle} />
                )}
            </Box>

        </Box>
    );
};

export default Auth;
