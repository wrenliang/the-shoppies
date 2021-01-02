import React from 'react';
import {Button, Form} from 'react-bootstrap';

// Component Dependencies

// CSS
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",

        };

        this.makeAPICall = this.makeAPICall.bind(this);
    }

    searchTextDidChange(event) {
        console.log(event);

        console.log(`Text changed to: ${event.target.value}`);
        this.setState({searchText: event.target.value});
    }

    async searchButtonClicked() {
        console.log("button clicked");

        const data = await this.makeAPICall(`9f05da9b`, this.state.searchText);

        console.log(data);

        this.props.updateListHandler(data);
    }

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
                <h1>Search Bar</h1>
                <Form>
                    <Form.Group controlId="formSearchMovies">
                        <Form.Label>Search Movies</Form.Label>
                        <Form.Control
                            placeholder="🔎 Enter a movie name"
                            onChange={this.searchTextDidChange.bind(this)}
                        />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={this.searchButtonClicked.bind(this)}>Search</Button>
            </div>
        )
    }
}

export default SearchBar;