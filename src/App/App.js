import React from 'react';
import { Navbar, Button, Badge } from 'react-bootstrap';
import disableScroll from 'disable-scroll';

// Component Dependencies
import SearchBar from '../Components/SearchBar/SearchBar';
import ResultsList from '../Components/ResultsList/ResultsList';
import NominatedList from '../Components/NominatedList/NominatedList';
import FinishedScreen from '../Components/FinishedScreen/FinishedScreen';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      searchResults: null,
      nominationList: [],
      nominationMovies: [],
      showNominations: false,
      showFinishedScreen: false
    }

    this.updateListHandler = this.updateListHandler.bind(this);
    this.addNominationHandler = this.addNominationHandler.bind(this);
    this.removeNominationHandler = this.removeNominationHandler.bind(this);
    this.toggleShowNominations = this.toggleShowNominations.bind(this);
    this.showFinishedScreenSetup = this.showFinishedScreenSetup.bind(this);
    this.hideFinishedScreenSetup = this.hideFinishedScreenSetup.bind(this);
  }

  componentDidMount() {
    this.hideFinishedScreenSetup();
  }

  toggleShowNominations() {
    this.setState({
      showNominations: !this.state.showNominations
    });
  }

  updateListHandler(searchTerm, searchResults) {
    this.setState({searchTerm: searchTerm, searchResults: searchResults});

  }

  addNominationHandler(movieID, movieData) {
    if (this.state.nominationList.length >= 5) {
      // show warning badge
    } else {
      if (!this.state.nominationList.includes(movieID)) {
        this.state.nominationList.push(movieID);
        this.state.nominationMovies.push(movieData);
        this.forceUpdate();
      }

      if (this.state.nominationList.length === 5) {
        // show finished screen
        this.showFinishedScreenSetup();
      }
    }
  }

  showFinishedScreenSetup() {
    this.setState({
      showFinishedScreen: true
    });

    window.scrollTo(0, 0);
    disableScroll.on();
  }

  hideFinishedScreenSetup() {
    this.setState({
      showFinishedScreen: false
    });

    window.scrollTo(0, 0);
    disableScroll.off();
  }

  removeNominationHandler(movieID, movieData) {
    const listIndex = this.state.nominationList.indexOf(movieID);
    const movieIndex = this.state.nominationMovies.indexOf(movieData);

    if (listIndex !== -1) {
      this.state.nominationList.splice(listIndex, 1);
    }

    if (movieIndex !== -1) {
      this.state.nominationMovies.splice(movieIndex, 1);
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
          <Navbar fixed="top" variant="light" bg="light">
            <Navbar.Brand> The Shoppies </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button
                onClick={() => this.toggleShowNominations()}>
                🏆
                <Badge variant={this.state.nominationList.length >= 5 ? "danger": "light"}> {this.state.nominationList.length} </Badge>
              </Button>
            </Navbar.Collapse>
          </Navbar>
          <SearchBar updateListHandler={this.updateListHandler}></SearchBar>
          <div className="ResultsNominationsContainer">
            <ResultsList 
              searchTerm={this.state.searchTerm}
              searchResults={this.state.searchResults}
              nominationList={this.state.nominationList}
              addNominationHandler={this.addNominationHandler}>
            </ResultsList>
            <NominatedList
              showNominations={this.state.showNominations}
              removeNominationHandler={this.removeNominationHandler}
              nominationMovies={this.state.nominationMovies}>
            </NominatedList>
            <FinishedScreen
              showFinishedScreen={this.state.showFinishedScreen}
              dismissScreenHandler={this.hideFinishedScreenSetup}
              nominationMovies={this.state.nominationMovies}>
            </FinishedScreen>
          </div>
      </div>
    );
  }
}

export default App;
