import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            query : ''
        })
        this.myInputArea = this.myInputArea.bind(this);
        this.search = this.search.bind(this);
    }

    myInputArea(ev){
        this.setState({
            query: ev.target.value
        })
    }

    search(){
        console.log('search state ', this.state)
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
                            if (event.key === 'Enter'){
                                this.search()
                            }
                        }}
                        ></FormControl>
                        <InputGroup.Addon onClick={this.search}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div>Artist Picture</div>
                <div>Artist Name</div>
                <div>Gallery</div>
            </div>
        )
    }
}

export default App;