import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import "../css/login.css"
import ForgotPassword from './forgotPassword';

class LoginSignup extends Component {
    state = {}

    // validation funtion for the email
    emailCheck = async (val) => {

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

    // name validation. 
    nameCheck = (val) => val.length > 5 && val.length < 30;

    // password validation
    passwordCheck = (val) => val.length >= 8 && val.length < 30;


    signinBtnPress = async () => {

        const username = document.getElementById('SigninUsername').value
        const password = document.getElementById('SigninPassword').value

        const eCheck = await this.emailCheck(username)
        if (!eCheck) {
            alert('Invalid email');
            return;
        }

        if (!this.passwordCheck(password)) {
            alert('Invalid password');
            return;
        }

        // Making a post request to the server.
        const result = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            // everythign went fine
            console.log('Got the token: ', result.data)
            localStorage.setItem('token', result.data)
            alert('Successfully logged in');
        } else {
            alert(result.error)
        }
    }

    signupBtnPress = async () => {
        debugger;

        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Making a post request to the server for the user signUp.
        const result = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                password: password,
                email: email
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            alert('User successfully registered');
        } else {
            alert(result.error)
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className='loginBody bodyContainer'>
                        <div className="containerr" id="container">
                            <div className="form-containerr  sign-up-container" style={{WebkitTransition: "all .6s ease-in-out"}}>
                                <div action="#" className='loginForm'>
                                    <div className="header">Sign Up</div>
                                    <div className="social__media__container">
                                        <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="#" className="social google">
                                            <i className="fa-brands fa-google"></i>
                                        </a>
                                        <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social instagram">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <span className="under__social">
                                        <p className="link signin-link">or use your email for registration</p>
                                    </span>

                                    <div className="button-input-group">
                                        <div className="group input-group">
                                            <input type="text" id="name" placeholder="Name" required />
                                        </div>
                                        <div className="group input-group">
                                            <input type="email" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="group input-group">
                                            <input type="password" id="password" placeholder="Password" required pattern=".{8,}" />
                                        </div>
                                        <div className="alert-text signup__alert">
                                            <span className="help__text">At least 8 character</span>
                                        </div>
                                        <div className="group button-group">
                                            <button id="signup-btn" className="signup-btn loginbutton" onClick={this.signupBtnPress}>Sign Up</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="form-containerr  sign-in-container " style={{WebkitTransition: "all .6s ease-in-out"}}>  
                                <div action="#" className='loginForm'>
                                    <div className="header">Sign In</div>
                                    <div className="social__media__container">
                                        <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="#" className="social google">
                                            <i className="fa-brands fa-google"></i>
                                        </a>
                                        <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social instagram">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <span className="under__social">
                                        <p className="link signup-link">or use your account</p>
                                    </span>

                                    <div className="button-input-group">
                                        <div className="group input-group">
                                            <input type="email" id="SigninUsername" placeholder="Email" required />
                                        </div>
                                        <div className="group input-group" >
                                            <input type="password" id="SigninPassword" placeholder="Password" required pattern=".{8,}" />
                                        </div>
                                        <div className="alert-text signup__alert">
                                            <span className="help__text">At least 8 character</span>
                                        </div>
                                            <div className="form-link forgot">
                                                <Link to="/forgotPassword"  aria-current="page" className="login-link">
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                        <div className="group button-group">
                                            <button id="signin-btn" className="loginbutton signin-btn" onClick={this.signinBtnPress}>Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1 style={{fontSize: '36px'}}>Welcome Back!</h1>
                                        <p>Please login your personal info</p>
                                        <div className="group button-group">
                                            <button className="ghost loginbutton" id="signIn" onClick={() => { document.getElementById("container").classList.remove("right-panel-active") }}>Sign in</button>
                                        </div>
                                        <footer>
                                        <p>Inspired by <a href="https://www.amcharts.com/" target="_blank">Amcharts</a></p> 
                                        </footer>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start your journey with us</p>
                                        <div className="group button-group">
                                            <button className="ghost loginbutton" id="signUp" onClick={() => { document.getElementById("container").classList.add("right-panel-active") }}>Sign up</button>
                                        </div>
                                        <footer>
                                            <p>Inspired by <a href="https://www.amcharts.com/" target="_blank">Amcharts</a></p>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default LoginSignup;