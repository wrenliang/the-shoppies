import React from 'react';
import { Row,Button } from 'react-bootstrap';

// Component Dependencies

// CSS
import './NominatedList.css';

class NominatedList extends React.Component {
    constructor(props) {
        super(props);
    }

    nominationItems = () => {
        const list = this.props.nominationMovies.map((movie, index) => {
            return (
                <div className="NominationsListItem">
                    <img className="NominationsListImage" src={movie.Poster} alt={`Movie Poster`}></img>
                    <div className="NominationsListInfo">
                        <h2>{`${movie.Title} (${movie.Year})`} <Button variant="danger" onClick={() => (this.props.removeNominationHandler(movie.imdbID, movie))}>Remove</Button></h2> 
                    </div>
                    
                </div>
            );
        });

        return list;
    }

    render() {
        if (this.props.showNominations === true) {
            return (
                <div className="NominatedList">
                    <h1 className="NominatedListTitle"> 🏆 Your Nominees 🏆 </h1>
                    <div className="NominationsListContainer">
                        {this.nominationItems()}
                    </div>
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default NominatedList;