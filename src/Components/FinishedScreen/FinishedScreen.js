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
               <div className="FinishedScreenMovieItem" key={index}>
                   <img className="FinishedScreenMovieItemImage" src={movie.Poster} alt={`Movie Poster`}></img>
                   <h4 className="FinishedScreenMovieItemText">{`${movie.Title} (${movie.Year})`}</h4>
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
                    <h1 className="FinishedScreenTitle">Your Nominees for the Shoppies Movie Awards are...</h1>
                    <div className="FinishedScreenMovieList">
                        {this.nominatedMovies()}
                    </div>
                    <Button variant="secondary" onClick={() => this.props.dismissScreenHandler()}> Continue Browsing </Button>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default FinishedScreen;