import React from 'react'
import '../assets/css/style.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from './About'
import MovieListEditor from './MovieListEditor'
import Login from './Login'
import { LoginProvider } from '../context/LoginContext'


const Index = () => {
    return (
        <>
            <Router>
                <LoginProvider>
                    <Navbar />
                    <Switch>
                        <Route path='/about'><About /></Route>
                        <Route path='/login'><Login /></Route>
                        <Route path='/movie-list-editor'><MovieListEditor /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </LoginProvider>
                <Footer />
            </Router>
        </>
    )
}

export default Index
