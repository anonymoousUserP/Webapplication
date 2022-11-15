import React, { Component } from 'react';

import instagramLogo from "../Assets/instagram-light.svg";
import  googleAdsLogo from "../Assets/google-ads-dark.svg";
import ticktockLogo from "../Assets/tiktok-light.svg";
import bingLogo from "../Assets/bing.svg";
import faceBookLogo from "../Assets/facebook.svg";
import microsoftLogo from "../Assets/microsoft-dark.svg";
import googleLogo from "../Assets/google.svg";
import admitadLogo from "../Assets/admitad-light.svg";
import googleAnalyticsLogo from "../Assets/google-analytics-light.svg";

class Section6 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="container">
                    <div className="bg-faded-primary rounded-5 py-5 px-4 p-sm-5 mt-5" style={{backgroundColor: '#172022'}}>
                        <div className="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
                            <div className="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0" style={{color: 'white', fontFamily: 'cursive'}}>
                                <h2 className="h1 mb-4">The tools <br className="d-none d-lg-inline"/>we work with</h2>
                                <p className="pb-3 mb-3 mb-lg-4">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel
                                    quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.</p><a
                                        className="btn btn-primary d-none d-lg-inline-flex" href="#" style={{backgroundColor: '#448c74', border: 'none', height: '40px'}}>See all tools</a>
                            </div>
                            <div className="order-lg-1 w-100 mx-auto mx-lg-0" style={{maxWidth: '558px'}}>
                                <div className="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300"><img
                                                src={bingLogo} alt="Bing"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="500"><img
                                                src={faceBookLogo} alt="Facebook"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="200"><img
                                                src={microsoftLogo} className="d-dark-mode-block" alt="Facebook"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="800"><img
                                                src={googleLogo} className="d-dark-mode-block" alt="Google"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back">
                                                <img className="d-dark-mode-block"src={googleAdsLogo} alt="Google Ads"/>
                                                </div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init aos-animate" style={{backgroundColor: "#121519"}}
                                            data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="600"><img
                                                src={admitadLogo} className="d-dark-mode-block" alt="Admitad"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init" style={{backgroundColor: "#121519"}} data-aos="zoom-in"
                                            data-aos-easing="ease-out-back" data-aos-delay="400"><img className="d-dark-mode-block"
                                                src={googleAnalyticsLogo} alt="Google Analytics"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init" style={{backgroundColor: "#121519"}} data-aos="zoom-in"
                                            data-aos-easing="ease-out-back" data-aos-delay="700"><img className="d-dark-mode-block"
                                                src={instagramLogo} alt="Instagram"/></div>
                                    </div>
                                    <div className="col">
                                        <div className=" rounded-3 aos-init" style={{backgroundColor: "#121519"}} data-aos="zoom-in"
                                            data-aos-easing="ease-out-back" data-aos-delay="100"><img className="d-dark-mode-block"
                                                src={ticktockLogo} alt="TikTok"/></div>
                                    </div>
                                    
                                </div>
                                <div className="d-lg-none text-center pt-4 mt-2 mt-md-3 aos-init aos-animate" data-aos="zoom-in"
                                    data-aos-easing="ease-out-back" data-aos-delay="900"><a className="btn btn-primary" href="#" style={{backgroundColor: '#448c74', border: 'none', height: '40px'}}>See all
                                        tools</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section6;