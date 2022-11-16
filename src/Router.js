import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contactus';
import Feedback from './components/FeedBack';
import LoginSignup from './components/login-signup';
import ForgotPassword from './components/forgotPassword';
import ResetPassword from './components/ResetPassword';

const Rote = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route path='/feedBack' element={<Feedback/>}/>
                <Route path='/login-signup' element={<LoginSignup/>}/>
                <Route path='/forgotPassword' element={<ForgotPassword/>}/>
                <Route path='/resetPassword' element={<ResetPassword/>}/>
            </Routes>
    )
}

export default Rote;