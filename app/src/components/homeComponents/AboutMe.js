import React, { Component } from 'react'
import Banner from './Banner';
import Content from './Content'

class AboutMe extends Component {
    constructor() {
        super();
        this.state = {};
        var content = 'Test';
    }

    content = 'Test';

    render() {
        return (
            <div>
                <Banner title='About Me' />
                <Content content/>
            </div>
        );
    }
}

export default AboutMe;