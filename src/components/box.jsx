import React from 'react';
import './box.css';

class Box extends React.Component {
    style = {
        
    }

    render() {
        return (
            <main style={{backgroundColor: `${this.props.color}`}} className="box">
                <div className="button-wrapper">

                    <button onClick={this.props.handleClick}>Click!</button>

                </div>
            </main>
        )
    }
}

export default Box;