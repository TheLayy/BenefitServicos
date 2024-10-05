import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = () => {
    const { currentUser, loading } = useContext(AuthContext);

    // Show loading while authentication is being verified
    if (loading) {
        return (<Box display="flex" justifyContent="center" alignItems="center" height="60vh">
            <CircularProgress />
        </Box>)
    }

    // If user is authenticated, render the Outlet; otherwise, redirect to /auth
    return currentUser ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
