import React, { Component } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Carousel from './carousel';
import '../css/styleCounter.css';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div style={{backgroundColor: '#121519'}}>
                    <Carousel/>
                    <Section2/>
                    <Section4/>
                    <Section1/>
                    <Section6/>
                    <Section5/>
                    <Section3/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;