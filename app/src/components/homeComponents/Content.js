import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import AboutMeMd from '../../markdown/aboutMe.md';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            markdown: ''
        };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(AboutMeMd).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div style={{
                /* Div */
                borderLeft: '1px solid black',
                borderBottom: '1px solid black',
                borderRight: '1px solid black',
                padding: '5px',
            }}>
                <ReactMarkdown source={markdown}  />
            </div>
        );
    }
}

export default Content;