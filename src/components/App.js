import React from 'react';
import SampleContainer from "../containers/sample_container";

export class App extends React.Component {
    render(){
        return (
            <div className="container mt-5">
                <h1 className="text-center">Simple start project with React & Redux</h1>
                <p className="text-center mt-5 ">This project already included</p>
                <SampleContainer />
            </div>
        )
    }
}
