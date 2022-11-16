import React, { Component } from 'react';
// import '../css/ResetPassword.css';

class ResetPassword extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='resetPasswordContainer'>
                    <div className="mainDiv">
                        <div className="cardStyle">
                            <form action="" name="signupForm" id="signupForm">
                                <img src="./Image/icons.png" id="signupLogo" />
                                <h2 className="formTitle">
                                    Change your passsword here
                                </h2>
                                <div className="inputDiv">
                                    <label className="inputLabel" for="password">New Password</label>
                                    <input type="password" id="password" name="password" required />
                                </div>
                                <div className="inputDiv">
                                    <label className="inputLabel" for="confirmPassword">Confirm Password</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" />
                                </div>
                                <div className="buttonWrapper">
                                    <button id="submitButton" onclick="validateSignupForm()" className="submitButton pure-button pure-button-primary">
                                        <span>Continue</span>
                                        <span id="loader"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ResetPassword;
