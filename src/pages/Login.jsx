import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Usa useNavigate para redirigir

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log('Login success:', response.data);
            // Redirige al usuario a la página de inicio después del inicio de sesión
            navigate('/home'); // Cambia la ruta según tu configuración
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            setError('Invalid username or password');
        }
    };

    return (
        <main className='flex flex-col justify-center items-center min-h-screen bg-slate-900 gap-10' >
            <div className='bg-white rounded-full w-52 h-52 border-orange-400 border-4'>

            </div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-5'>
                <label htmlFor="" className='text-white font-bold -mb-3 text-xl'>Usuario</label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className='w-64 h-10 rounded-lg bg-slate-200 p-2'
                />
                <label htmlFor="" className='text-white font-bold -mb-3 text-xl'>Contraseña</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='w-64 h-10 rounded-lg bg-slate-200 p-2'
                />
                <button type="submit" className='w-28 h-9 bg-blue-500 rounded text-white'>Login</button>
                {error && <p className='text-red-600 font-semibold text-xl '>{error}</p>}
            </form>
        </main>
    );
};
