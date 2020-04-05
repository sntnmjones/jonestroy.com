import React, { Component } from 'react'

class Banner extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div style={{
                /* Div */
                backgroundColor: '#343a40',
                marginTop: '15px',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',

                /* Text */
                textAlign: 'center',
                fontSize: '20px',
                color: '#f8f9fa',
            }}>{this.props.title}</div>
        );
    }
}

export default Banner;