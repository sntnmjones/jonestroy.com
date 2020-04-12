import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './homeComponents/Card';
import Hobbies from '../markdown/hobbies.md';
import Education from '../markdown/education.md';

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
                        title: 'Education',
                        content: Education,
                        collapse: 'collapse show'
                    },
                    {
                        title: 'Hobbies',
                        content: Hobbies,
                        collapse: 'collapse'
                    },
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