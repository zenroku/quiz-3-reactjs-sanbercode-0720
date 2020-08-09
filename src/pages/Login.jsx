import React, { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../context/LoginContext'


const Login = () => {

    const [dataLogin] = useState({ username: 'admin', password: 'admin123' })
    const [inputLogin, setInputLogin] = useState({ username: '', password: '' })
    const [isLogin, setIsLogin] = useContext(LoginContext)

    useEffect(() => {
        console.log(isLogin)
    })

    const handleLogin = (event) => {
        event.preventDefault()

        if (JSON.stringify(dataLogin) === JSON.stringify(inputLogin)) {
            console.log('loginBerhasil')
            setIsLogin(true)
        } else {
            console.log('login gagal')
        }
    }

    const handleInput = (event) => {
        const inputUser = event.target.name
        switch (inputUser) {
            case 'username':
                {
                    setInputLogin({ ...inputLogin, username: event.target.value })
                    break
                }
            case 'password':
                {
                    setInputLogin({ ...inputLogin, password: event.target.value })
                    break
                }
            default:
                { break }
        }
    }


    return (
        <div className="login_container">
            <form onSubmit={handleLogin} className="login_form">
                <h1>Login</h1>
                <label className="login_label">Username : </label>
                <input className="login_input" type="text" name="username" onChange={handleInput}></input>
                <label className="login_label">Password : </label>
                <input className="login_input" type="password" name="password" onChange={handleInput}></input>
                <button className="login_button">Login</button>
            </form>
        </div>
    )
}

export default Login