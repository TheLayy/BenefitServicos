import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ClientTable from '../components/ClientTable';

const AdminPage = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    const handleBackToSite = () => {
        navigate('/');
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Painel de Administração
                    </Typography>
                    <Button color="inherit" onClick={handleBackToSite}>
                        Voltar ao Site
                    </Button>
                    <Button color="inherit" onClick={handleLogout}>
                        Sair
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <ClientTable />
            </Container>
        </div>
    );
};

export default AdminPage;
