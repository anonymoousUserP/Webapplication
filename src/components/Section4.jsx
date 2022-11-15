import React, { Component } from 'react';
import chartChartFill from "../Assets/bar-chart-fill.svg";
import barChart from "../Assets/bar-chart.jpg";
import columnsIcon from "../Assets/columns.svg";
import heatMap from "../Assets/heatMap.png";
import pieChartFill from "../Assets/pie-chart-fill.svg";
import PieChart from "../Assets/PieChart.png";
import diagram from "../Assets/diagram-3.svg";
import treeMap from "../Assets/treeMap.png";
import boxArrow from "../Assets/box-arrow-in-up-right.svg";
import vennIntersecting from "../Assets/venn_intersecting.png"
import radar_full from "../Assets/radar_full.png";
import barChartSteps from "../Assets/bar-chart-steps.svg";

class Section4 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="container py-5" style={{color: 'white'}}>
                    <h2 className="h1 text-center">Our services</h2>
                    <p className="text-center pb-4 mb-2 mb-lg-3">We provide a wide range of consulting services</p>
                    <i className="bi bi-phone-flip" style={{color: 'white'}}></i>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4" style={{width: '81.1%', margin: '0 auto'}}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}>
                                        <a className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                            <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                                <img src={chartChartFill} className="d-block text-warning mb-4" width="40"
                                                    height="40" style={{margin: 'auto'}} alt='...' ></img>
                                                <h3 className="h4 card-title mt-0">Advertising communications</h3>
                                                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                                    amet sint
                                                    velit officia consequat duis enim velit mollit.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <img src={barChart} style={{width: '100%', height: '100%', borderRadius: '5px'}} alt='...' ></img>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}><a
                                        className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                        <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                            <img src={columnsIcon} className="d-block text-warning mb-4" width="40" height="40"
                                                style={{margin: 'auto'}} alt='...' ></img>
                                            <h3 className="h4 card-title mt-0">Marketing and branding</h3>
                                            <p className="card-text">Find aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum
                                                dolore eu fugiat nulla pariatur neque congue.</p>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="flip-card-back">
                                    <img src={heatMap} style={{width: '100%', height: '100%', borderRadius: '5px'}} alt='...' ></img>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}><a
                                        className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                        <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                            <img src={pieChartFill} className="d-block text-warning mb-4" width="40"
                                                height="40" style={{margin: 'auto'}} alt='...' ></img>
                                            <h3 className="h4 card-title mt-0">Web and Internet marketing</h3>
                                            <p className="card-text">Hac erat leo proin odio est sed sit felis facilisi integer sed
                                                congue neque
                                                turpis dictumst sit sed volutpat aliquet tortor non.</p>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="flip-card-back">
                                    <img src={PieChart} style={{width: '100%', height: '100%', borderRadius: '5px'}} alt='...' ></img>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}><a
                                        className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                        <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                            <img src={diagram} className="d-block text-warning mb-4" width="40" height="40"
                                                style={{margin: 'auto'}} alt='...' ></img>
                                            <h3 className="h4 card-title mt-0">Email marketing</h3>
                                            <p className="card-text">Adipiscing posuere dui, amet, augue nisl dictum justo, enim.
                                                Sed neque
                                                congue non quam ultrices interdum vitae vestibulum.</p>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="flip-card-back">
                                    <img src={treeMap} style={{width: '100%', height: '100%', borderRadius: '5px'}} alt='...' ></img>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}><a
                                        className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                        <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                            <img src={boxArrow} className="d-block text-warning mb-4" width="40"
                                                height="40" style={{margin: 'auto'}} alt='...' ></img>
                                            <h3 className="h4 card-title mt-0">Working on communication</h3>
                                            <p className="card-text">Molestie enim tempus egestas a at enim. Velit hendrerit nibh
                                                eget porta
                                                pretium. Ipsum orci habitasse eget malesuada platea.</p>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="flip-card-back">
                                    <img src={vennIntersecting} style={{width: '100%', height: '100%', borderRadius: '5px'}}   alt='...' ></img>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="col" style={{height: '100%'}}><a
                                        className="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
                                        <div className="card-body pb-0" style={{backgroundColor: '#19251bd4', color: 'white'}}>
                                            <img src={barChartSteps} className="d-block text-warning mb-4" alt='...' width="40"
                                                height="40" style={{margin: 'auto'}} ></img>
                                            <h3 className="h4 card-title mt-0">Business copywriting</h3>
                                            <p className="card-text">Massa donec quam orci feugiat. Quis iaculis facilisi ornare
                                                aenean lorem
                                                enim purus in lacus in ullamcorper diam consequat.</p>
                                        </div>
                                    </a></div>
                                </div>
                                <img src={radar_full} style={{width: '100%', height: '100%', borderRadius: '5px'}} alt='...'  ></img>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section4;