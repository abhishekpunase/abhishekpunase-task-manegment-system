import React, { useState } from 'react';

const SignUpForm = ({ onSignUp, switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        onSignUp({ username, password });
        setError('');
    };

    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
            <div className='relative w-[300px] h-[400px] bg-zinc-200 flex items-start rounded'>
            <form onSubmit={handleSignUp}>
            <h2 className='font-semibold text-center ml-7 mb-6 mt-5 text-xl'>Sign Up</h2>
            <label  className='ml-10 '>
                Username:
                <input  className='ml-10 rounded mb-5' 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br />
            <label className='ml-10 '>
                Password:
                <input  className='ml-10 rounded mb-5' 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <label className='ml-10 '>
                Confirm Password:
                <input  className='ml-10 rounded mb-5' 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button className='mt-5 ml-16 px-10 py-1 bg-blue-600 text-white rounded-md'  type="submit">Sign Up</button>
            {error && <p>{error}</p>}
            <p className='text-sm ml-9 mt-5 '>
                Already have an account? <button type="button" onClick={switchToLogin}>Login</button>
            </p>
        </form>
            </div>
        </div>
    );
};

export default SignUpForm;
