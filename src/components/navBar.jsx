import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navBar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand me-3">Dmapper</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link className="nav-link active" aria-current="page" to='/contactus'>Contact Us</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link to="/login-signup">
                                    <button className="btn btn-outline-success p-1 px-2" type="submit" to="/login-signup">
                                    <i className="bi bi-person-circle me-2" style={{fontSize: '20px'}}></i>
                                        login
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default navBar;