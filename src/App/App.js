import React from 'react';
import { Navbar, Button, Badge, Toast } from 'react-bootstrap';
import disableScroll from 'disable-scroll';

// Component Dependencies
import ResultsList from '../Components/ResultsList/ResultsList';
import NominatedList from '../Components/NominatedList/NominatedList';
import FinishedScreen from '../Components/FinishedScreen/FinishedScreen';
import LandingScreen from '../Components/LandingScreen/LandingScreen';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Assets
import ShopifyLogo from '../Assets/shopify-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      searchResults: null,
      nominationList: [],
      nominationMovies: [],
      showNominations: false,
      showFinishedScreen: false,
      showToggleToast: false,
      showMaximumToast: false,
      showCacheToast: false
    }

    this.updateListHandler = this.updateListHandler.bind(this);
    this.addNominationHandler = this.addNominationHandler.bind(this);
    this.removeNominationHandler = this.removeNominationHandler.bind(this);
    this.toggleShowNominations = this.toggleShowNominations.bind(this);
    this.showFinishedScreenSetup = this.showFinishedScreenSetup.bind(this);
    this.hideFinishedScreenSetup = this.hideFinishedScreenSetup.bind(this);

    this.displayToggleToast = this.displayToggleToast.bind(this);
    this.hideToggleToast = this.hideToggleToast.bind(this);
    this.displayMaximumToast = this.displayMaximumToast.bind(this);
    this.hideMaximumToast = this.hideMaximumToast.bind(this);
    this.displayCacheToast = this.displayCacheToast.bind(this);
    this.hideCacheToast = this.hideCacheToast.bind(this);
  }

  componentDidMount() {
    this.hideFinishedScreenSetup();

    const cachedData = localStorage.getItem('nominationCache');
    if (cachedData != null) {
      const cachedJSON = JSON.parse(cachedData);
      this.setState({
        nominationList: cachedJSON.nominationList,
        nominationMovies: cachedJSON.nominationMovies
      });

      if (cachedJSON.nominationList.length > 0) {
        this.displayCacheToast();
      }
    }
  }

  // Callback Handler for child component
  addNominationHandler(movieID, movieData) {
    if (this.state.nominationList.length >= 5) {
      this.displayMaximumToast();
    } else if (!this.state.nominationList.includes(movieID)) {
      this.state.nominationList.push(movieID);
      this.state.nominationMovies.push(movieData);

      // Update localStorage
      localStorage.setItem('nominationCache', JSON.stringify({
        nominationList: this.state.nominationList,
        nominationMovies: this.state.nominationMovies
      }));

      this.displayToggleToast();
      this.forceUpdate();

      // Change to finished screen state if nominations full
      if (this.state.nominationList.length === 5) {
        this.showFinishedScreenSetup();
      }
    }
  }

  // Callback Handler for child component
  removeNominationHandler(movieID, movieData) {
    const nListIndex = this.state.nominationList.indexOf(movieID);
    const nMoviesIndex = this.state.nominationMovies.indexOf(movieData);

    if (nListIndex !== -1) {
      this.state.nominationList.splice(nListIndex, 1);
    }
    if (nMoviesIndex !== -1) {
      this.state.nominationMovies.splice(nMoviesIndex, 1);
    }

    // Update localStorage
    localStorage.setItem('nominationCache', JSON.stringify({
      nominationList: this.state.nominationList,
      nominationMovies: this.state.nominationMovies
    }));

    this.forceUpdate();
  }

  // Callback Handler for child component
  updateListHandler(searchTerm, searchResults) {
    this.setState({searchTerm: searchTerm, searchResults: searchResults});
  }

  // --- UI Convenience Functions --- 
  toggleShowNominations() {
    this.setState({
      showNominations: !this.state.showNominations
    });
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

  displayToggleToast() {
    this.setState({
      showToggleToast: true
    });
  }

  hideToggleToast() {
    this.setState({
      showToggleToast: false
    });
  }

  displayMaximumToast() {
    this.setState({
      showMaximumToast: true
    });
  }

  hideMaximumToast() {
    this.setState({
      showMaximumToast: false
    });
  }

  displayCacheToast() {
    this.setState({
      showCacheToast: true
    });
  }

  hideCacheToast() {
    this.setState({
      showCacheToast: false
    });
  }
  // --- UI Convenience Functions --- 

  render() {
    return (
      <div className="App">
          <Navbar fixed="top" variant="light">
            <Navbar.Brand> <img src={ShopifyLogo} alt={`Shopify Logo`} width="30" height="30" className="d-inline-block align-top"></img> <strong>The Shoppies</strong> </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button
                variant="success"
                onClick={() => this.toggleShowNominations()}>
                <Badge variant={this.state.nominationList.length >= 5 ? "danger": "light"}> {this.state.nominationList.length} </Badge>
                🏆
              </Button>
            </Navbar.Collapse>
          </Navbar>

          <div className="ToastContainer">
            <div className="ToastContainerNavbarSpacer"></div>
            <Toast show={this.state.showToggleToast} onClose={() => this.hideToggleToast()} delay={3000} autohide>
              <Toast.Header><strong className="mr-auto">✅ Nominated!</strong>
              <small>now</small></Toast.Header>
              <Toast.Body>Click the 🏆 button to toggle Nominations View</Toast.Body>
            </Toast>
            <Toast show={this.state.showMaximumToast} onClose={() => this.hideMaximumToast()} delay={3000} autohide>
              <Toast.Header><strong className="mr-auto">⚠️ Limit Exceeded!</strong>
              <small>now</small></Toast.Header>
              <Toast.Body>You already have 5 nominations!</Toast.Body>
            </Toast>
            <Toast show={this.state.showCacheToast} onClose={() => this.hideCacheToast()} delay={3000} autohide>
              <Toast.Header><strong className="mr-auto">💾 Restored from Cache!</strong>
              <small>now</small></Toast.Header>
              <Toast.Body>Your nominations were restored from your browser's cache</Toast.Body>
            </Toast>
          </div>

          <LandingScreen updateListHandler={this.updateListHandler}></LandingScreen>
          

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
