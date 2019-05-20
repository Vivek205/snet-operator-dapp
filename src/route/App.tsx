//Disabling eslint to allow web3 injection by metamask
/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from '../utilities/AsyncComponent';
import BlockchainHelper from '../utilities/BlockChainHelper';

// MaterialUI Imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../assets/css/MaterialUITheme';


const AsyncHome = asyncComponent(() => import('../pages/home/Home'));
const AsyncPageNotFound = asyncComponent(() => import('../pages/PageNotFound'));

interface IState {
  web3Initialized: boolean;
}

class App extends Component<{}, IState>{
  network: any = undefined;

  state: IState = {
    web3Initialized: false
  }

  componentDidMount = (): void => {
    window.addEventListener('load', () => this.handleWindowLoad());
  }

  handleWindowLoad = (): void => {
    if (typeof window.web3 !== 'undefined') {
      this.network = new BlockchainHelper(window.web3);
      this.network.initialize().then((value: boolean) => {
        this.setState({ web3Initialized: value });
      }).catch(console.log);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App" >
          <Router>
            <Switch>
              <Route exact path='/' render={(props) => <AsyncHome {...props} web3Initialized={this.state.web3Initialized} network={this.network} />} />
              <Route component={AsyncPageNotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
