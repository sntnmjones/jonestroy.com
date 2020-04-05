import React, { Component } from 'react'
import Banner from './Banner';
import Content from './Content'

class Card extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Banner title={this.props.content.title} />
                <Content content={this.props.content.items} />
            </div>
        );
    }
}

export default Card;