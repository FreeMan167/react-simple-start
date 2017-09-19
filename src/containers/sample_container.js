import React from "react";

import { connect } from 'react-redux';

class SampleContainer extends React.Component {
    render(){
        return(
            <ul className="list-group">
                {this.props.sample.map((sample_field) => {
                    return (
                        <li className="list-group-item" key={sample_field.title}>{sample_field.title}</li>
                    )
                })}
            </ul>
        )
    }
}

// Map state to props, state from reducers/index.js
function mapStateToProps(state) {
    return {
        sample : state.sample
    }
}

export default connect(mapStateToProps)(SampleContainer);
