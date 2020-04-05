import React, { Component } from 'react'

class Collapsable extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const id = this.props.item.title;
        const dataTarget = '#' + this.props.item.title;
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
                                {this.props.item.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapsable;