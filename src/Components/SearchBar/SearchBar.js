import React from 'react';
import {Button, Form, FormFile, Row} from 'react-bootstrap';

// Component Dependencies

// CSS
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        };

        this.makeAPICall = this.makeAPICall.bind(this);
    }

    async searchTextDidChange(event) {
        console.log(event);

        console.log(`Text changed to: ${event.target.value}`);
        this.setState({searchText: event.target.value});

        const data = await this.makeAPICall(`9f05da9b`, event.target.value);
        this.props.updateListHandler(event.target.value, data.Search);
    }

    // async searchButtonClicked() {
    //     console.log("button clicked");

    //     const data = await this.makeAPICall(`9f05da9b`, this.state.searchText);

    //     console.log(data);

    //     this.props.updateListHandler(this.state.searchText, data.Search);
    // }

    async makeAPICall(apiKey, searchParam) {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchParam}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        const jsonData = await response.json();

        return jsonData;
    }

    render() {
        return (
            <div className="SearchBar">
                <Form>
                    <Form.Group controlId="formSearchMovies">
                        <Form.Control
                            size="lg"
                            placeholder="🔎  Search for Movies"
                            onChange={this.searchTextDidChange.bind(this)}/>
                    </Form.Group>
                </Form>
                
            </div>
        )
    }
}

export default SearchBar;