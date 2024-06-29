import React, { useState } from 'react';

const LoginForm = ({ users, onLogin, switchToSignUp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            onLogin(user);
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
            <div className='relative w-[300px] h-[400px] bg-zinc-200 flex items-start rounded'>
            <form   onSubmit={handleLogin}>
            <h2 className='font-semibold text-center ml-7 mb-6 mt-5 text-xl'>Login/SignUp</h2>
            <label className='ml-10 '>
                Username <br />
                <input  className='ml-10 rounded mb-5' 
                    type="text"
                    value={username}
                    placeholder='name'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br />
            <label className='ml-10 '>
                Password: <br />
                <input  className='ml-10 rounded ' 
                    type="password"
                    value={password}
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button  className='mt-10 ml-20 px-10 py-1 bg-blue-600 text-white rounded-md' type="submit">Login</button>
            {error && <p>{error}</p>}
            <p className='text-sm ml-9 mt-10 '>
                Don't have an account? <button type="button" onClick={switchToSignUp}>Sign Up</button>
            </p>
        </form>
            </div>
        </div>
    );
};

export default LoginForm;
