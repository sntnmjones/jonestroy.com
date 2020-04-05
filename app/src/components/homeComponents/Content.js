import React, { Component } from 'react'

class Content extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div style={{
                /* Div */
                borderLeft: '1px solid black',
                borderBottom: '1px solid black',
                borderRight: '1px solid black',
                padding: '5px',

                /* Text */
            }}>{this.props.content}</div>
        );
    }
}

export default Content;