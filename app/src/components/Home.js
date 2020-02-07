import React, { Component } from 'react'
import Navbar from './Navbar'

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class='container'>
                    <div class='row'>
                        Hello
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;