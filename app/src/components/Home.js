import React, { Component } from 'react'
import Navbar from './Navbar'
import AboutMe from './homeComponents/AboutMe'

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md'><AboutMe /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;