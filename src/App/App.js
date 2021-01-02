import React from 'react';

// Component Dependencies
import SearchBar from '../Components/SearchBar/SearchBar';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: null,
      nominationList: []
    }

    this.updateListHandler = this.updateListHandler.bind(this);

  }

  updateListHandler(data) {
    console.log('handler says hello');
    this.setState({searchResults: data});
  }

  render() {
    return (
      <div className="App">
          <SearchBar updateListHandler={this.updateListHandler}></SearchBar>
      </div>
    );
  }
}

export default App;
