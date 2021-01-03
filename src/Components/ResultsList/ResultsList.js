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
                        index={index}>
                    </ResultItem>
                )
            });

            return list;
        }
    }

    render() {
        return (
            <div className="ResultsList">
                <h1>{`Results from '${this.props.searchTerm}'`}</h1>
                <div className="GridContainer">
                    {this.searchResults()}
                </div>  
            </div>
        );
    }
}

export default ResultsList;