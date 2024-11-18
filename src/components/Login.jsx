import React, { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('jwt', data.token);
                navigate('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p>{error}</p>}
            <button className="login-btn" type="submit">Login</button>
        </form>
        <p>Don't have an account ? <a href="/signup">Sign Up</a></p>
        </div>
    );
}

export default Login;