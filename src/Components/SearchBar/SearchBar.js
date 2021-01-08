import React from 'react';
import { Form } from 'react-bootstrap';

// Component Dependencies

// CSS
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.debounce = this.debounce.bind(this);
        this.searchTextDidChange = this.searchTextDidChange.bind(this);
        this.makeAPICall = this.makeAPICall.bind(this);

        // Create debounced function for searchbar
        this.debouncedSearchTextDidChange = this.debounce(this.searchTextDidChange, 200);
    }

    debounce(func, delay) {
        // lexically scoped to debouncedFunction
        let timeout;

        return function debouncedFunction(...args) {
            const runMyFunc = () => {
                clearTimeout(timeout);

                console.log('calling debounced function now!');
                func(...args);
            }

            clearTimeout(timeout);
            timeout = setTimeout(runMyFunc, delay);
        }
    }

    searchTextDidChange(event) {
        this.makeAPICall(`9f05da9b`, event.target.value);
    }

    async makeAPICall(apiKey, searchParam) {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchParam}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        const jsonData = await response.json();

        this.props.updateListHandler(searchParam, jsonData.Search);

        return;
    }

    render() {
        return (
            <div className="SearchBar">
                <Form>
                    <Form.Group controlId="formSearchMovies">
                        <Form.Control
                            size="lg"
                            placeholder="🔎  Search for Movies"
                            onChange={this.debouncedSearchTextDidChange}/>
                    </Form.Group>
                </Form>
                
            </div>
        )
    }
}

export default SearchBar;