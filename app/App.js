import React from 'react';
import ReactDOM from 'react-dom';
require('./assets/sass/style.scss');

export class App extends React.Component {
    render(){
        return (
            <h1>Hello world !!</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
