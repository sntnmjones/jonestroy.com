import React, { Component } from 'react'
import Collapsable from './Collapsable';

class Content extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const collabsables = [];

        for (const [index, value] of this.props.content.entries()) {
            collabsables.push(<Collapsable item={value} />)
        }

        return (
            <div>
                {collabsables}
            </div>
        );
    }
}

export default Content;