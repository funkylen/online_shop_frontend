import React from 'react';
import './box.css';

class Box extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="button-wrapper">

                    <button>Click!</button>

                </div>
            </div>
        )
    }
}

export default Box;