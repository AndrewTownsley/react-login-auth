import React, { useState } from 'react'

import PropTypes from 'prop-types';

const loginUser = async (credentials) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Login = ({setToken}) => {
    const [userName, setUserName] = useState()
    const [passWord, setPassWord] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            passWord,
        })
        setToken(token)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="submit">
                <h2>Please Login to access Dashboard</h2>
                <label htmlFor="username">
                    <h4>Username</h4>
                    <input onChange={(e) => setUserName(e.target.value)} type="text" name="username" id="username" />
                </label>
                <label htmlFor="password">
                    <h4>Password</h4>
                    <input onChange={(e) => setPassWord(e.target.value)} type="password" name="password" id="password" />
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
