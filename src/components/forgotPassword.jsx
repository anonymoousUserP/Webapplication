import React, { Component } from 'react';
import '../css/forgotPassword.css';
import otpIcon from "../Assets/otp.png";
import { useNavigate } from "react-router-dom";
import Home from './Home';
import Routing from './Routing';

function ForgotPassword(props) {
    const state = {}
    const navigate = useNavigate();
    const otpPress = async (event) => {
        // const  navigate = useNavigate();
        // this.props.navHook('/SomeWhere')
        navigate('/home')
        // navigate("/home");
    
        if (document.getElementById("recover-submit").value === "Submit") {
            this.checkOtp();
            return;
        }
    
        const email = document.getElementById("email").value;
        if (!email) {
            alert('Please Enter the email address');
            return;
        }
    
        const eCheck = await this.emailCheck(email)
        if (!eCheck) {
            alert('Invalid email');
            return;
        }
    
        // Making a post request to the server for the otp send.
        const result = await fetch('/api/sendOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then((res) => res.json())
    
        if (result.status === 'ok') {
            // everythign went fine
            // document.getElementById("recover-submitA").href = './newPassword.html';
            document.getElementById("recover-submit").value = "Submit";
            alert('otp sent successfully');
    
        } else {
            alert(result.error)
        }
    }
    
    // validation funtion for the email
    const emailCheck = async (val) => {
    
        // Making a post request to the server for the email validation.
        const data = await fetch('/api/emailCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: val
            })
        }).then((res) => res.json());
        return val.length < 30 && data.result;
    }
    
    // function to check the otp.
    const checkOtp = async () => {
        const otp = document.getElementById('otp').value;
        const email = document.getElementById('email').value;
    
        // Making a post request to the server for the otp send.
        const result = await fetch('/api/otpCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp: otp,
                email: email
            })
        }).then((res) => res.json())
    
        if (result.status === 'ok') {
            alert(result.msg);
            window.location.href = './newPassword.html';
            localStorage.setItem("otpToken", result.token);
            localStorage.setItem("email", email);
        } else {
            alert(result.error);
            if (result.error == 'Otp varification time out.') {
                window.location.href = './index.html';
            }
        }
    }
    
    return <React.Fragment>
        <div className='ForgotpasswordBody'>
            <div className="form-gap"></div>
            <div className="ForgotpasswordContainer">
                <div className="rowForgotpassword">
                    <div className="col-md-4 col-lg-12 col-md-offset-4 col-lg-offset-12 col-md-12 col-md-offest-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center m-3">
                                    <h3><i className="fa fa-lock fa-4x"></i></h3>
                                    <h2 className="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <div id="register-form" role="form" autoComplete="off" className="form formForgotpassword" method="post">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i style={{ fontSize: '27px' }} className="glyphicon bi bi-envelope-fill"></i>
                                                        <i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    <input id="email" name="email" placeholder="email address"
                                                        className="form-control" type="email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ width: 'auto' }}>
                                                        <img className='glyphicon' style={{ height: "18px", height: '23px', width: '26px', padding: '0 3px' }} src={otpIcon} />
                                                    </span>
                                                    <input id="otp" name="OTP" placeholder="Enter OTP" className="form-control"
                                                        type="" />
                                                </div>
                                            </div>
                                            <a id="recover-submitA" href="#" style={{ color: '#337ab7' }}>
                                                <div className="form-group">
                                                    <input name="recover-submit" id="recover-submit"
                                                        className="btn-blockForgotPassword btn btn-lg btn-primary btn-block" style={{ caretColor: 'transparent' }}
                                                        defaultValue="Send OTP" type=""
                                                        onClick={this.otpPress} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>

}


export default ForgotPassword;