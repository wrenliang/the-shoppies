import React from 'react';
import { Button } from 'react-bootstrap';

// Component Dependencies

// CSS
import './FinishedScreen.css';

class FinishedScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    nominatedMovies = () => {
        const list = this.props.nominationMovies.map((movie, index) => {
           return (
               <div className="FinishedScreenMovieItem">
                   <img className="FinishedScreenMovieItemImage" src={movie.Poster} alt={`Movie Poster`}></img>
                   <h3 className="FinishedScreenMovieItemText">{`${movie.Title} (${movie.Year})`}</h3>
               </div>
           ) 
        });

        return list;
    }

    render() {
        if (this.props.showFinishedScreen === true) {
            return (
                <div className="FinishedScreen">
                    <div className="FinishedScreenBackground"></div>
                    <div className="FinishedScreenMovieList">
                        {this.nominatedMovies()}
                    </div>
                    <Button onClick={() => this.props.dismissScreenHandler()}> Dismiss View </Button>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default FinishedScreen;