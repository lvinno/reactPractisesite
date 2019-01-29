import React, { Component } from 'react';
import Header from "./common/header"
import { BrowserRouter,Route } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            </div>    
          </BrowserRouter>
      </Provider>     
    );
  }
}

export default App;
