import React, { Component } from 'react';
import $ from 'jquery';
// import { ReactDOM } from 'react';

class Section2 extends Component {
    state = {}
    
    componentDidMount=()=>{
        $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend({
                start: 0,
                end: 100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options);
        
            var thisElement = $(this);
        
            $({ count: settings.start }).animate({ count: settings.end }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
        
        $('#number1').jQuerySimpleCounter({ end: 545412, duration: 5000 });
        $('#number2').jQuerySimpleCounter({ end: 50504, duration: 5000 });
        $('#number3').jQuerySimpleCounter({ end: 32559, duration: 5000 });
        $('#number4').jQuerySimpleCounter({ end: 246, duration: 5000 });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="sectiontitle mb-0">
                    <h2>Statistics</h2>
                    <span className="headerLine"></span>
                </div>
                <div id="projectFacts" className="sectionclassName">
                    <div className="fullWidth eight columns">
                        <div className="projectFactsWrap ">
                            <div className="item wow fadeInUpBig animated animated" data-number="12" style={{visibility: 'visible'}}>
                                <i className="fa fa-briefcase"></i>
                                <p id="number1" className="number">12</p>
                                {/* <span></span> */}
                                <p>Charts Generated</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="55" style={{visibility: 'visible'}}>
                                <i className="fa fa-smile-o"></i>
                                <p id="number2" className="number">55</p>
                                {/* <span></span> */}
                                <p>Charts downloads</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="359" style={{visibility: 'visible'}}>
                                <i className="fa fa-coffee"></i>
                                <p id="number3" className="number">359</p>
                                {/* <span></span> */}
                                <p>User Registered</p>
                            </div>
                            <div className="item wow fadeInUpBig animated animated" data-number="246" style={{visibility: 'visible'}}>
                                <i className="fa fa-camera"></i>
                                <p id="number4" className="number">246</p>
                                {/* <span></span> */}
                                <p>user active per week</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section2;