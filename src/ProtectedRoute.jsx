// src/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/auth-status', { withCredentials: true });
                setAuthenticated(response.data.authenticated);
            } catch (error) {
                console.error('Auth status error:', error);
                setAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (authenticated === null) return <div>Loading...</div>; // Opcional: muestra un loader mientras verificas el estado de autenticación
    if (!authenticated) return <Navigate to="/" />; // Redirige a la página de login si no está autenticado

    return children;
};
