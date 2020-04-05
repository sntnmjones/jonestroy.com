import React, { Component } from 'react'
import Collapsable from './Collapsable';

class Content extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Collapsable item={this.props.content[0]} />
                <Collapsable item={this.props.content[1]} />
                <Collapsable item={this.props.content[2]} />
            </div>
        );
    }
}

export default Content;