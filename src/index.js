import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './components/box';

class App extends React.Component {
    render() {
        return (
            <Box />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
