import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

// Component Dependencies
import SearchBar from '../Components/SearchBar/SearchBar';
import ResultsList from '../Components/ResultsList/ResultsList';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      searchResults: null,
      nominationList: []
    }

    this.updateListHandler = this.updateListHandler.bind(this);
    this.addNominationHandler = this.addNominationHandler.bind(this);

  }

  updateListHandler(searchTerm, searchResults) {
    this.setState({searchTerm: searchTerm, searchResults: searchResults});

    console.log(this.state);
  }

  addNominationHandler(movieID) {
    if (!this.state.nominationList.includes(movieID)) {
      this.state.nominationList.push(movieID);
    }
    
    console.log(this.state.nominationList);
  }

  render() {
    return (
      <div className="App">
          <Navbar fixed="top" variant="light" bg="light">
            <Navbar.Brand> Shopify </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button >Nominations</Button>
            </Navbar.Collapse>
          </Navbar>
          <SearchBar updateListHandler={this.updateListHandler}></SearchBar>
          <ResultsList 
            searchTerm={this.state.searchTerm}
            searchResults={this.state.searchResults}
            nominationList={this.state.nominationList}
            addNominationHandler={this.addNominationHandler} />
      </div>
    );
  }
}

export default App;
