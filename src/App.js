import React, { Component } from 'react';
import Header from "./common/header"
import { BrowserRouter,Route } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
          <Header />
          <BrowserRouter>
            <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
            </div>    
          </BrowserRouter>
      </Provider>     
    );
  }
}

export default App;
