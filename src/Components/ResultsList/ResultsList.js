import React from 'react';
import { Button } from 'react-bootstrap';

// Component Dependencies
import ResultItem from '../ResultItem/ResultItem';

// CSS
import './ResultsList.css';

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
    }

    searchResults = () => {
        if (this.props.searchResults == null) {
            return;
        } else {
            const list = this.props.searchResults.map((movie, index) => {
                return (
                    <ResultItem 
                        movie={movie}
                        addNominationHandler={this.props.addNominationHandler}
                        nominationList={this.props.nominationList}
                        key={index}>
                    </ResultItem>
                )
            });

            return list;
        }
    }

    render() {
        if (this.props.searchTerm == null || this.props.searchTerm === "") {
            return (
                <div className="ResultsList">
                    <h1 className="ResultsListTitle">{`Search results`}</h1>
                    <p className="ResultsListSubtitle"> To browse for movies, please provide a query in the search bar above</p>
                </div>
            );
        } else {
            return (
                <div className="ResultsList">
                    <h1 className="ResultsListTitle">{`Results from '${this.props.searchTerm}'`}</h1>
                    <div className="GridContainer">
                        {this.searchResults()}
                    </div>  
                </div>
            );
        }
        
    }
}

export default ResultsList;