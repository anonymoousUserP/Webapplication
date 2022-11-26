import React, { Component } from 'react';
import { useNavigation } from 'react-router';
import ForgotPassword from './forgotPassword';

export default function Routing (){
    // const navigation = useNavigation() // extract navigation prop here 
    
    return <ForgotPassword navigation={useNavigation()} /> //pass to your component.   
}