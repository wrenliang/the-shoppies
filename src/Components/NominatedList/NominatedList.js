import React from 'react';
import { Button } from 'react-bootstrap';

// Component Dependencies

// CSS
import './NominatedList.css';

class NominatedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.showNominations === true) {
            return (
                <div className="NominatedList">
                    <div className="NominatedListSpacer"></div>
                    <h1> My Nominations </h1>
                    <div className="NominationsListContainer">
                        {
                            this.props.nominationMovies.map((movie, index) => {
                                return (
                                    <div className="NominationsListItem">
                                        <img className="NominationsListImage" src={movie.Poster} alt={`Movie Poster`}></img>
                                        <div className="NominationsListInfo">
                                            <h3>{`${movie.Title} (${movie.Year})`}</h3>
                                            <Button >Remove</Button>
                                        </div>  
                                    </div>
                                );
                            })
                        }
                    </div>
                        
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default NominatedList;