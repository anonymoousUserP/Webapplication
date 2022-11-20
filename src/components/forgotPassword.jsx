import React, { Component } from 'react';
import '../css/forgotPassword.css';

class ForgotPassword extends Component {
    state = {}

    otpPress = async (event) =>{
        if(document.getElementById("recover-submit").value === "Submit"){
            this.checkOtp();
            return;
        }
    
        const email = document.getElementById("email").value;
        if(!email){
            alert('Please Enter the email address');
            return ;
        }
    
        const eCheck = await this.emailCheck(email)
        if(!eCheck){
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
                email : email
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
    emailCheck = async (val)=>{
    
        // Making a post request to the server for the email validation.
        const data = await fetch('/api/emailCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : val
            })
        }).then((res) => res.json());
        return val.length < 30 && data.result;
    }
    
    // function to check the otp.
    checkOtp = async ()=>{
        const otp = document.getElementById('otp').value;
        const email = document.getElementById('email').value;
    
        // Making a post request to the server for the otp send.
        const result = await fetch('/api/otpCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp : otp,
                email : email
            })
        }).then((res) => res.json())
        
        if (result.status === 'ok') {
            alert(result.msg);
            window.location.href = './newPassword.html';
            localStorage.setItem("otpToken", result.token);
            localStorage.setItem("email",email);
        } else {
            alert(result.error);
            if(result.error=='Otp varification time out.'){
                window.location.href = './index.html';
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='ForgotpasswordBody'>
                    <div className="form-gap"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="text-center">
                                            <h3><i className="fa fa-lock fa-4x"></i></h3>
                                            <h2 className="text-center">Forgot Password?</h2>
                                            <p>You can reset your password here.</p>
                                            <div className="panel-body">

                                                <form id="register-form" role="form" autoComplete="off" className="form" method="post">

                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i
                                                                className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                            <input id="email" name="email" placeholder="email address"
                                                                className="form-control" type="email" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><img style={{height: "18px"}}
                                                                src="./Image/otp.png" /></span>
                                                            <input id="otp" name="OTP" placeholder="Enter OTP" className="form-control"
                                                                type="" />
                                                        </div>
                                                    </div>
                                                    <a id="recover-submitA" href="#">
                                                        <div className="form-group">
                                                            <input name="recover-submit" id="recover-submit"
                                                                className="btn btn-lg btn-primary btn-block" style={{caretColor: 'transparent'}}
                                                                defaultValue="Send OTP" type=""
                                                                onClick={this.otpPress} />
                                                        </div>
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ForgotPassword;