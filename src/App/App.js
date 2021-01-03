import React from 'react';
import { Navbar, Button, Badge } from 'react-bootstrap';

// Component Dependencies
import SearchBar from '../Components/SearchBar/SearchBar';
import ResultsList from '../Components/ResultsList/ResultsList';
import NominatedList from '../Components/NominatedList/NominatedList';

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
      showNominations: false
    }

    this.updateListHandler = this.updateListHandler.bind(this);
    this.addNominationHandler = this.addNominationHandler.bind(this);
    this.removeNominationHandler = this.removeNominationHandler.bind(this);
    this.toggleShowNominations = this.toggleShowNominations.bind(this);
  }

  toggleShowNominations() {
    this.setState({
      showNominations: !this.state.showNominations
    });

    console.log('debug');
    console.log(this.state);
  }

  updateListHandler(searchTerm, searchResults) {
    this.setState({searchTerm: searchTerm, searchResults: searchResults});

    console.log(this.state);
  }

  addNominationHandler(movieID, movieData) {
    if (!this.state.nominationList.includes(movieID)) {
      this.state.nominationList.push(movieID);
      this.state.nominationMovies.push(movieData);
      this.forceUpdate();
    }
    
    console.log(this.state.nominationMovies);
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
                <Badge variant="light"> {this.state.nominationList.length} </Badge>
              </Button>
            </Navbar.Collapse>
          </Navbar>
          <SearchBar updateListHandler={this.updateListHandler}></SearchBar>
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
          
      </div>
    );
  }
}

export default App;
