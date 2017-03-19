import React, { Component } from 'react';
import './App.css';

class Artist extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>{this.props.artistName}</div>
                <div>{this.props.artistFollower}</div>
            </div>
        )
    }
}

export default Artist;