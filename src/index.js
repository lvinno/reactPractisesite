import React ,{ Component,Fragment }from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import GlobalStyle from './style.js';
import GlobalIcon from './static/iconfont/iconfont.js'

class Index extends Component {
    render() {
      
      return (
          <Fragment>
              <GlobalStyle />
              <GlobalIcon />
              <App />
          </Fragment>
          
      );
    }
  }
ReactDOM.render(<Index />, document.getElementById('root'));

