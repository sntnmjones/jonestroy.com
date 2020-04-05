import React, { Component } from 'react'
import Banner from './Banner';
import Content from './Content'

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
                <Content content={content}/>
            </div>
        );
    }
}

export default AboutMe;