import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Collapsable extends Component {
    constructor() {
        super();
        this.state = {
            markdown : ''
        };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(this.props.item.content).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const id = this.props.item.title;
        const dataTarget = '#' + this.props.item.title;
        const { markdown } = this.state;
        return (
            <div style={{
                /* Div */
                borderLeft: '1px solid black',
                borderBottom: '1px solid black',
                borderRight: '1px solid black',
                padding: '5px',
            }}>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class='card-header btn btn-link'
                                id='headingOne'
                                type='button'
                                data-toggle='collapse'
                                data-target={dataTarget}
                                style={{textDecoration: 'none', color: '#343a40'}}
                                >
                            {this.props.item.title}
                        </div>

                        <div id={id} class={this.props.item.collapse} aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <ReactMarkdown source={markdown}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapsable;