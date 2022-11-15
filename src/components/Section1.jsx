import React, { Component } from 'react';
class Section1 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
                    <div className="row align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
                        <div className="col-lg-4 offset-xl-1" style={{fontFamily: 'cursive', color: 'white'}}>
                            <h2 className="h1 text-center text-lg-start pb-3 pb-lg-1">Our servises</h2>
                            
                            <ul className="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
                                <li className="d-flex pt-2"><i className="bi bi-check2 fs-4 me-2" style={{color: '#448c74'}}></i><span style={{paddingTop: '7px'}}>Individual approach to the brand</span></li>
                                <li className="d-flex pt-2"><i className="bi bi-check2 fs-4  me-2" style={{color: '#448c74'}}></i><span style={{paddingTop: '7px'}}>We guarantee the result after a month</span></li>
                                <li className="d-flex pt-2"><i className="bi bi-check2 fs-4  me-2" style={{color: '#448c74'}}></i><span style={{paddingTop: '7px'}}>Completing tasks exactly on time</span></li>
                            </ul><a className="btn btn-primary d-none d-lg-inline-flex" href="www.google.com" style={{backgroundColor: '#448c74', border: 'none', height: '40px'}}>See all servises</a>
                        </div>
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="row row-cols-1 row-cols-sm-2">
                                <div className="col">
                                    <div className="card px-3 px-2 bg-faded-primary" style={{backgroundColor: '#172022', color: 'white', borderRadius: '20px'}}>
                                        <div className="card-body"><i className="bi bi-gear-fill fs-1 d-block mb-3" style={{color: '#438a73'}}></i>
                                            <h3 className="h4">SEO Website Audit</h3>
                                            <p className="fs-sm">Consectetur adipiscing elit proin volutpat mollis egestas nam in luctus facilisis ultrices llentesque volutpat ligula est dignissim.</p>
                                        </div>
                                    </div>
                                    <div className="card px-3 px-2 bg-faded-info mt-4" style={{backgroundColor: '#161f2b', color: 'white', borderRadius: '20px'}}>
                                        <div className="card-body"><i className="bi bi-lightbulb-fill fs-1 text-info d-block mb-3"></i>
                                            <h3 className="h4">Content Marketing</h3>
                                            <p className="fs-sm">Morbi et massa fames ac lerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames ac massa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col pt-lg-3">
                                    <div className="card px-3 px-2 bg-faded-warning mt-4 mt-sm-0 mt-lg-4" style={{backgroundColor: '#28271e', color: 'white', borderRadius: '20px'}}>
                                        <div className="card-body"><i className="bi bi-envelope-fill fs-1 text-warning d-block mb-3"></i>
                                            <h3 className="h4">Email Marketing</h3>
                                            <p className="fs-sm">Sapiener ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam  diam natoque scelerisque viverra.</p>
                                        </div>
                                    </div>
                                    <div className="card px-3 px-2 bg-faded-danger mt-4" style={{backgroundColor: '#281a1e', color: 'white', borderRadius: '20px'}}>
                                        <div className="card-body"><i className="bi bi-telegram fs-2 text-danger d-block mb-3"></i>
                                            <h3 className="h4">Social Networks</h3>
                                            <p className="fs-sm">Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section1;