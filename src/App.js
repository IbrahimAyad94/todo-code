import React, { Component } from 'react';

import './App.css';
import Layout from './containers/Layout/Layout';
import AppContext from './context/Context';
class App extends Component {

  state = {
    done: 0,
    inProgress: 0
  }

  componentDidMount() {
    let myList = JSON.parse(localStorage.getItem('TO_DO'));
    myList = myList ? myList : [];
    console.log(myList);
    let myDone = myList.filter(i => i.status == 'Done');
    this.setState({done: myDone.length, inProgress: myList.length - myDone.length})
}

  doneHandler = (count) => {
    this.setState({ done: count });
  }

  inprogressHandler = (count) => {
    this.setState({ inProgress: count });
  }

  render() {

    return (
      <AppContext.Provider value={{
        done: this.state.done,
        inProgress: this.state.inProgress,
        updateDone: this.doneHandler,
        updateInProgress: this.inprogressHandler
      }}>
        <Layout></Layout>
      </AppContext.Provider>
    );
  }

}

export default App;
