import React, { useContext, useEffect } from 'react'
import Logo from '../assets/img/logo.png'
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {
    const [isLogin, setIsLogin] = useContext(LoginContext)

    useEffect(() => {
        console.log(isLogin)
    })

    const handleLogout = () => {
        setIsLogin('belum login')
    }

    return (
        <header>
            <img alt='' src={Logo} width={'200px'} />
            <p>{isLogin}</p>
            <nav>
                <ul>
                    <li><a href="/">Home </a> </li>
                    <li><a href="/about">About </a> </li>
                    <li><a href="/movie-list-editor">Movie List Editor</a></li>
                    <li><a href="/login">Login </a> </li>
                    <li><a href="/" onClick={handleLogout}>Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar