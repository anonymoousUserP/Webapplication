import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contactus';
import Feedback from './components/FeedBack';

const Rote = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route path='/feedBack' element={<Feedback/>}/>
            </Routes>
    )
}
export default Rote;