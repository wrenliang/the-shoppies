import React from 'react';

// Component Dependencies
import SearchBar from '../SearchBar/SearchBar';

// CSS
import './LandingScreen.css';

// Assets
import OscarPhoto from '../../Assets/oscar-statuette.jpg';

class LandingScreen extends React.Component {

    render() {
        return (
            <div className="LandingScreen">
                <div className="LandingScreenLeft">
                    <div className="LandingScreenLeftInfo">
                        <h1 className="LandingScreenLeftTitle"> The Shoppies Movie Awards are here... Choose your 5 nominees! </h1>
                        <SearchBar updateListHandler={this.props.updateListHandler}></SearchBar>
                    </div>
                </div>
                <img className="LandingScreenImage" src={OscarPhoto} alt={`Oscars Award Show`}></img>
            </div>
        )
    }

}

export default LandingScreen;