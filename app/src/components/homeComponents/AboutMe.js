import React, { Component } from 'react'
import Banner from './Banner';
import Content from './Content'
import AboutMeMd from '../../markdown/aboutMe.md';


class AboutMe extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const content = 'Test';
        return (
            <div>
                <Banner title='About Me' />
                <Content AboutMeMd={AboutMeMd}/>
            </div>
        );
    }
}

export default AboutMe;