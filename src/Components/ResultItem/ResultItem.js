import React from 'react';
import { Button } from 'react-bootstrap';

// Component Dependencies

// CSS
import './ResultItem.css';

class ResultItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        }

        this.toggleHover = this.toggleHover.bind(this);
        this.nominateClicked = this.nominateClicked.bind(this);
    }

    toggleHover(state) {
        this.setState({
            isHovered: state
        });
    }

    nominateClicked() {
        console.log(`Movie: ${this.props.movie.imdbID} clicked`);
        this.props.addNominationHandler(this.props.movie.imdbID, this.props.movie);
        this.forceUpdate();
    }

    render() {
        if (this.state.isHovered || this.props.movie.Poster === "N/A") {
            const resultItemStyle = {
                position: "relative",
                width: "300px",
                height: "468px",
                backgroundColor: "black"
            }
            
            const backgroundImageStyle = {
                position: "absolute",
                left: "0",
                right: "0",
                zIndex: "1",
                width: "300px",
                height: "468px",
                backgroundImage: this.props.movie.Poster === "N/A" ? null : `url(${this.props.movie.Poster})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                filter: "blur(3px) brightness(30%)"
            }

            const contentStyle = {
                position: "relative",
                zIndex: "2"
            }

            return (
                <div className="ResultItem" style={resultItemStyle} onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)}>
                    <div className="ResultItemBackgroundImage" style={backgroundImageStyle}></div>
                    <div style={contentStyle}>
                        <h1>{`${this.props.movie.Title} (${this.props.movie.Year})`}</h1>
                        <Button 
                            variant="primary"
                            type="submit"
                            onClick={() => this.nominateClicked()}
                            disabled={this.props.nominationList.includes(this.props.movie.imdbID)}>{this.props.nominationList.includes(this.props.movie.imdbID) ? `Nominated` : `Nominate`}</Button>
                    </div>
                </div>
            );
        } else {
            const resultItemStyle=  {
                width: "300px",
                height: "468px",
                backgroundImage: `url(${this.props.movie.Poster})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            }

            return (
                <div className="ResultItem" style={resultItemStyle} onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)}>
                </div>
            );
        }
        
    }
}

export default ResultItem;