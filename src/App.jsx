import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Artist from './Artist';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            query: null
        })
        this.myInputArea = this.myInputArea.bind(this);
        this.search = this.search.bind(this);
    }

    myInputArea(ev) {
        this.setState({
            query: ev.target.value
        })
    }

    search() {
        console.log('1st search state ', this.state);
        const baseURL = 'https://api.spotify.com/v1/search'
        let SearchURL = `${baseURL}?q=${this.state.query}&type=artist&limit=1`;
        SearchURL = SearchURL.replace(' ', '%20');
        console.log('baseURL ', SearchURL);
        fetch(SearchURL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log('json', json))
    }

    render() {
        return (
            <div id='App'>
                <div className='title'>Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Enter For An Artist'
                            onChange={this.myInputArea}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        ></FormControl>
                        <InputGroup.Addon onClick={this.search}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Artist
                artistName={this.state.artist}
                ></Artist>
                <div>Gallery</div>
            </div>
        )
    }
}

export default App;