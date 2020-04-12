import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './homeComponents/Card';
import AboutMeMd from '../markdown/aboutMe.md';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        /**
         * About Me card
         */
        const cards = {
            AboutMe: {
                title: 'About Me',
                items: [
                    {
                        title: 'Hobbies',
                        content: AboutMeMd,
                        collapse: 'collapse show'
                    },
                    {
                        title: 'Education',
                        content: 'Too much school',
                        collapse: 'collapse'
                    },
                    {
                        title: 'Code',
                        content: 'Too much code',
                        collapse: 'collapse'
                    }
                ]
            }
        };

return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-md'>
                    <Card content={cards.AboutMe} />
                </div>
            </div>
        </div>
    </div>
);
    }
}

export default Home;