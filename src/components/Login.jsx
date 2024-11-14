import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <button className="login-btn" type="submit">Login</button>
        </form>
        <p>Don't have an account ? <a href="/signup">Sign Up</a></p>
        </div>
    );
}

export default Login;